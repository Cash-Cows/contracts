const { expect, deploy, bindContract, getRole } = require('../utils')

describe('CashCowsLoot Tests', function() {
  before(async function() {
    const signers = await ethers.getSigners()
    this.preview = 'https://ipfs.io/ipfs/Qm123abc/preview.json'

    const nft = await deploy('CashCows', this.preview, signers[0].address)
    await bindContract('withNFT', 'CashCows', nft, signers)
    const dolla = await deploy('CashCowsDolla', signers[0].address)
    await bindContract('withDolla', 'CashCowsDolla', dolla, signers)
    const loot = await deploy('CashCowsLoot', this.preview, signers[0].address)
    await bindContract('withLoot', 'CashCowsLoot', loot, signers)

    const [ admin, holder1, holder2 ] = signers

    //grant admin to all roles
    await admin.withNFT.grantRole(getRole('MINTER_ROLE'), admin.address)
    await admin.withNFT.grantRole(getRole('CURATOR_ROLE'), admin.address)
    await admin.withDolla.grantRole(getRole('MINTER_ROLE'), admin.address)
    await admin.withLoot.grantRole(getRole('MINTER_ROLE'), admin.address)
    await admin.withLoot.grantRole(getRole('CURATOR_ROLE'), admin.address)
    await admin.withLoot.grantRole(getRole('FUNDER_ROLE'), admin.address)

    //allow loot to burn dolla
    await admin.withDolla.grantRole(getRole('BURNER_ROLE'), loot.address)
    
    //mint dolla for holder
    await admin.withLoot.burnTokens(admin.withDolla.address, true)
    await admin.withDolla.mint(holder1.address, 100)
    await admin.withDolla.mint(holder2.address, 200)
    //mint to owners
    await admin.withNFT['mint(address,uint256)'](holder1.address, 10)
    
    this.signers = { admin, holder1, holder2 }
    this.zero = '0x0000000000000000000000000000000000000000'
  })

  it('Should not mint', async function () {
    const { admin } = this.signers
    await expect(
      admin.withLoot['mint(address,uint256,uint256,bytes)'](admin.address, 1, 20, [])
    ).to.be.revertedWith('InvalidCall()')
  })

  it('Should add item', async function () {
    const { admin } = this.signers

    await admin.withLoot.addItem('ipfs://item5', 1)
    await admin.withLoot.addItem('ipfs://item2', 3)
    await admin.withLoot.addItem('ipfs://item3', 0)
    await admin.withLoot.addItem('ipfs://item4', 3)
    await admin.withLoot.addItem('ipfs://item5', 0)

    expect(await admin.withLoot.lastItemId()).to.equal(5)
    expect(await admin.withLoot.maxSupply(1)).to.equal(1)
    expect(await admin.withLoot.maxSupply(2)).to.equal(3)
    expect(await admin.withLoot.maxSupply(3)).to.equal(0)
    expect(await admin.withLoot.maxSupply(4)).to.equal(3)
    expect(await admin.withLoot.maxSupply(5)).to.equal(0)

    expect(await admin.withLoot.uri(1)).to.equal('ipfs://item5')
    expect(await admin.withLoot.uri(2)).to.equal('ipfs://item2')
    expect(await admin.withLoot.uri(3)).to.equal('ipfs://item3')
    expect(await admin.withLoot.uri(4)).to.equal('ipfs://item4')
    expect(await admin.withLoot.uri(5)).to.equal('ipfs://item5')

    expect(await admin.withLoot.totalSupply(1)).to.equal(0)
    expect(await admin.withLoot.totalSupply(2)).to.equal(0)
    expect(await admin.withLoot.totalSupply(3)).to.equal(0)
    expect(await admin.withLoot.totalSupply(4)).to.equal(0)
    expect(await admin.withLoot.totalSupply(5)).to.equal(0)
  })

  it('Should update item', async function () {
    const { admin } = this.signers

    await admin.withLoot.updateMaxSupply(1, 3)
    await admin.withLoot.updateURI(1, 'ipfs://item1')

    expect(await admin.withLoot.maxSupply(1)).to.equal(3)

    expect(await admin.withLoot.uri(1)).to.equal('ipfs://item1')
  })

  it('Should set price', async function () {
    const { admin } = this.signers

    await admin.withLoot['setPrice(uint256,uint256)'](1, 10)
    await admin.withLoot['setPrice(uint256,uint256)'](2, 20)
    await admin.withLoot['setPrice(uint256,uint256)'](3, 30)
    await admin.withLoot['setPrice(uint256,uint256)'](5, 50)

    expect(await admin.withLoot['priceOf(uint256)'](1)).to.equal(10)
    expect(await admin.withLoot['priceOf(uint256)'](2)).to.equal(20)
    expect(await admin.withLoot['priceOf(uint256)'](3)).to.equal(30)
    expect(await admin.withLoot['priceOf(uint256)'](4)).to.equal(0)
    expect(await admin.withLoot['priceOf(uint256)'](5)).to.equal(50)

    const dolla = admin.withDolla.address
    await admin.withLoot['setPrice(uint256,address,uint256)'](1, dolla, 10)
    await admin.withLoot['setPrice(uint256,address,uint256)'](2, dolla, 20)
    await admin.withLoot['setPrice(uint256,address,uint256)'](3, dolla, 30)
    await admin.withLoot['setPrice(uint256,address,uint256)'](5, dolla, 50)

    expect(await admin.withLoot['priceOf(uint256,address)'](1, dolla)).to.equal(10)
    expect(await admin.withLoot['priceOf(uint256,address)'](2, dolla)).to.equal(20)
    expect(await admin.withLoot['priceOf(uint256,address)'](3, dolla)).to.equal(30)
    expect(await admin.withLoot['priceOf(uint256,address)'](4, dolla)).to.equal(0)
    expect(await admin.withLoot['priceOf(uint256,address)'](5, dolla)).to.equal(50)
  })

  it('Should mint (eth)', async function () {
    const { admin, holder1, holder2 } = this.signers

    await holder1.withLoot['mint(address,uint256,uint256)'](holder1.address, 1, 1, { value: 10 })
    await holder2.withLoot['mint(address,uint256,uint256)'](holder2.address, 1, 2, { value: 20 })

    expect(await admin.withLoot.balanceOf(holder1.address, 1)).to.equal(1)
    expect(await admin.withLoot.balanceOf(holder2.address, 1)).to.equal(2)
    expect(await admin.withLoot.totalSupply(1)).to.equal(3)

    expect(await ethers.provider.getBalance(admin.withLoot.address)).to.equal(30)
  })

  it('Should not mint (eth)', async function () {
    const { admin } = this.signers
    await expect(//no more supply
      admin.withLoot['mint(address,uint256,uint256)'](admin.address, 1, 20, { value: 200 })
    ).to.be.revertedWith('InvalidCall()')
    await expect(//not enough supply
      admin.withLoot['mint(address,uint256,uint256)'](admin.address, 2, 20, { value: 400 })
    ).to.be.revertedWith('InvalidCall()')
    await expect(//incorrect amount
      admin.withLoot['mint(address,uint256,uint256)'](admin.address, 2, 1, { value: 10 })
    ).to.be.revertedWith('InvalidCall()')
    await expect(//no price
      admin.withLoot['mint(address,uint256,uint256)'](admin.address, 4, 1, { value: 1000 })
    ).to.be.revertedWith('InvalidCall()')
  })

  it('Should mint batch (eth)', async function () {
    const { admin, holder1, holder2 } = this.signers

    await holder1.withLoot['mint(address,uint256[],uint256[])'](holder1.address, [3, 5], [1, 1], { value: 80 })
    await holder2.withLoot['mint(address,uint256[],uint256[])'](holder2.address, [3, 5], [2, 2], { value: 160 })

    expect(await admin.withLoot.balanceOf(holder1.address, 3)).to.equal(1)
    expect(await admin.withLoot.balanceOf(holder2.address, 3)).to.equal(2)
    expect(await admin.withLoot.balanceOf(holder1.address, 5)).to.equal(1)
    expect(await admin.withLoot.balanceOf(holder2.address, 5)).to.equal(2)

    expect(await admin.withLoot.totalSupply(3)).to.equal(3)
    expect(await admin.withLoot.totalSupply(5)).to.equal(3)

    expect(await ethers.provider.getBalance(admin.withLoot.address)).to.equal(270)
  })

  it('Should not mint batch (eth)', async function () {
    const { admin } = this.signers
    await expect(//no more supply
      admin.withLoot['mint(address,uint256[],uint256[])'](admin.address, [1], [20], { value: 200 })
    ).to.be.revertedWith('InvalidCall()')
    await expect(//not enough supply
      admin.withLoot['mint(address,uint256[],uint256[])'](admin.address, [2], [20], { value: 400 })
    ).to.be.revertedWith('InvalidCall()')
    await expect(//incorrect amount
      admin.withLoot['mint(address,uint256[],uint256[])'](admin.address, [2], [1], { value: 10 })
    ).to.be.revertedWith('InvalidCall()')
    await expect(//no price
      admin.withLoot['mint(address,uint256[],uint256[])'](admin.address, [4], [1], { value: 1000 })
    ).to.be.revertedWith('InvalidCall()')
  })

  it('Should mint (dolla)', async function () {
    const { admin, holder1, holder2 } = this.signers

    const dolla = admin.withDolla.address
    await holder1.withLoot['mint(address,uint256,address,uint256)'](holder1.address, 2, dolla, 1)
    await holder2.withLoot['mint(address,uint256,address,uint256)'](holder2.address, 2, dolla, 2)

    expect(await admin.withLoot.balanceOf(holder1.address, 2)).to.equal(1)
    expect(await admin.withLoot.balanceOf(holder2.address, 2)).to.equal(2)
    expect(await admin.withLoot.totalSupply(2)).to.equal(3)

    expect(await admin.withDolla.balanceOf(holder1.withLoot.address)).to.equal(0)
  })

  it('Should not mint (dolla)', async function () {
    const { admin } = this.signers
    const dolla = admin.withDolla.address
    await expect(//no more supply
      admin.withLoot['mint(address,uint256,address,uint256)'](admin.address, 2, dolla, 20)
    ).to.be.revertedWith('ERC20: burn amount exceeds balance')
    await expect(//incorrect amount
      admin.withLoot['mint(address,uint256,address,uint256)'](admin.address, 3, dolla, 100)
    ).to.be.revertedWith('ERC20: burn amount exceeds balance')
    await expect(//no price
      admin.withLoot['mint(address,uint256,address,uint256)'](admin.address, 4, dolla, 1)
    ).to.be.revertedWith('InvalidCall()')
  })

  it('Should mint batch (dolla)', async function () {
    const { admin, holder1, holder2 } = this.signers

    const dolla = admin.withDolla.address
    await holder1.withLoot['mint(address,uint256[],address,uint256[])'](holder1.address, [3, 5], dolla, [1, 1])
    await holder2.withLoot['mint(address,uint256[],address,uint256[])'](holder2.address, [3, 5], dolla, [2, 2])

    expect(await admin.withLoot.balanceOf(holder1.address, 3)).to.equal(2)
    expect(await admin.withLoot.balanceOf(holder2.address, 3)).to.equal(4)
    expect(await admin.withLoot.balanceOf(holder1.address, 5)).to.equal(2)
    expect(await admin.withLoot.balanceOf(holder2.address, 5)).to.equal(4)

    expect(await admin.withLoot.totalSupply(3)).to.equal(6)
    expect(await admin.withLoot.totalSupply(5)).to.equal(6)

    expect(await admin.withDolla.balanceOf(holder1.withLoot.address)).to.equal(0)
  })

  it('Should not mint batch (dolla)', async function () {
    const { admin } = this.signers
    const dolla = admin.withDolla.address
    await expect(//no more supply
      admin.withLoot['mint(address,uint256[],address,uint256[])'](admin.address, [2], dolla, [20])
    ).to.be.revertedWith('ERC20: burn amount exceeds balance')
    await expect(//incorrect amount
      admin.withLoot['mint(address,uint256[],address,uint256[])'](admin.address, [3], dolla, [100])
    ).to.be.revertedWith('ERC20: burn amount exceeds balance')
    await expect(//no price
      admin.withLoot['mint(address,uint256[],address,uint256[])'](admin.address, [4], dolla, [1])
    ).to.be.revertedWith('InvalidCall()')
  })
})