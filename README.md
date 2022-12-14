# Cash Cows Contracts

By CAO order of [CCIP4: Open Source](https://dao.wearecashcows.com/#/proposal/0xccb5e6d7e9fa1ed02e9429327b14995bdaa78e6ffc55a01b17a10806df4831b7), 
The Cash Cows project is now open source. Please observe and respect our
[open source license](https://github.com/Cash-Cows/contracts/blob/main/LICENSE).

```
Cows do not guarantee that this code, is the one actually used right now.
Cows cannot guarantee that this code will work for everyone. If cows want 
to use this, you can! But cows must also open source their code too.
```

Moo. 

## About Cash Cows

[wearecashcows.com](https://www.wearecashcows.com/)

Cash Cows is an NFT experiment about sharing the creator fees with its
holders. We aim to lead this space in Web3 with innovations that the 
World has never seen before.

 - [ERC721B](https://www.npmjs.com/package/erc721b) gas efficient minting
 - First collection in history to design and implement a community royalty splitter 
 - Zero-Gas marketplace listings
 - First design and implementation of ERC721Soulbound
 - First enterprise grade digital asset store
 - Economics centered design

[Join the Cowmmunity on Opensea](https://opensea.io/collection/cash-cows-crew)

## Audit

```bash
$ git clone https://github.com/Cash-Cows/contracts.git
```

Run the following command `npm test` to start the tests.

## Reports

The following reports will be updated periodically. The gas costs in USD are merely estimates and never accurate with 
ethereum mainnet.

```
·-----------------------------------------------|---------------------------|-------------|-----------------------------·
|              Solc version: 0.8.9              ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 12450000 gas  │
················································|···························|·············|······························
|  Methods                                      ·               50 gwei/gas               ·       1518.20 usd/eth       │
·························|······················|·············|·············|·············|···············|··············
|  Contract              ·  Method              ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  burn                ·      52990  ·     127203  ·      78620  ·           21  ·       5.97  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  grantRole           ·          -  ·          -  ·      51463  ·           18  ·       3.91  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  mint                ·      72548  ·     161540  ·     126632  ·           18  ·       9.61  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  mint                ·      75751  ·     135290  ·     105285  ·            4  ·       7.99  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  mint                ·      71354  ·     108030  ·      89650  ·            4  ·       6.81  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  openMint            ·      26221  ·      46133  ·      36177  ·            2  ·       2.75  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  transferFrom        ·      69384  ·      88886  ·      73395  ·           11  ·       5.57  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  updateMetadata      ·          -  ·          -  ·      46441  ·            1  ·       3.53  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  updateTreasury      ·          -  ·          -  ·      46376  ·            1  ·       3.52  │
·························|······················|·············|·············|·············|···············|··············
|  CashCows              ·  withdraw            ·          -  ·          -  ·      35341  ·            1  ·       2.68  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsBarn          ·  grantRole           ·          -  ·          -  ·      51456  ·            1  ·       3.91  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsBarn          ·  release             ·          -  ·          -  ·     107314  ·            2  ·       8.15  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsBarn          ·  release             ·     104197  ·     117016  ·     110607  ·            2  ·       8.40  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  grantRole           ·          -  ·          -  ·      51485  ·            8  ·       3.91  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  mint                ·      73077  ·     183163  ·     140488  ·           12  ·      10.66  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  mint                ·      83358  ·     136655  ·     115852  ·            3  ·       8.79  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  openMint            ·      26266  ·      46178  ·      37648  ·            7  ·       2.86  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  setMaxMint          ·          -  ·          -  ·      46051  ·            4  ·       3.50  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  setMintPrice        ·          -  ·          -  ·      46097  ·            4  ·       3.50  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  transferFrom        ·      69341  ·      88843  ·      73245  ·           10  ·       5.56  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  updateMetadata      ·          -  ·          -  ·      46375  ·            1  ·       3.52  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  updateTreasury      ·      26519  ·      46419  ·      41444  ·            4  ·       3.15  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClub          ·  withdraw            ·          -  ·          -  ·      48487  ·            1  ·       3.68  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClubMetadata  ·  setBaseURI          ·          -  ·          -  ·      47011  ·            1  ·       3.57  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClubTreasury  ·  release             ·          -  ·          -  ·     119856  ·            1  ·       9.10  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsClubTreasury  ·  release             ·          -  ·          -  ·     136092  ·            1  ·      10.33  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  burn                ·          -  ·          -  ·     160487  ·            1  ·      12.18  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  burnRedeem          ·          -  ·          -  ·     128530  ·            1  ·       9.76  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  redeem              ·          -  ·          -  ·      70188  ·            1  ·       5.33  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  setCollection       ·          -  ·          -  ·      46092  ·            1  ·       3.50  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  setToken            ·          -  ·          -  ·      46038  ·            1  ·       3.49  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  setTokenConversion  ·          -  ·          -  ·      45725  ·            1  ·       3.47  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsCulling       ·  setTreasury         ·          -  ·          -  ·      46103  ·            1  ·       3.50  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsDolla         ·  grantRole           ·      29185  ·      51374  ·      49147  ·           10  ·       3.73  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsDolla         ·  mint                ·      55953  ·      73125  ·      66232  ·            5  ·       5.03  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsDolla         ·  pause               ·          -  ·          -  ·      47041  ·            1  ·       3.57  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsDolla         ·  transfer            ·          -  ·          -  ·      53722  ·            1  ·       4.08  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  burnable            ·          -  ·          -  ·      46590  ·            1  ·       3.54  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  grantRole           ·          -  ·          -  ·      51462  ·            3  ·       3.91  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  link                ·          -  ·          -  ·      88017  ·            2  ·       6.68  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  mint                ·          -  ·          -  ·      83458  ·            1  ·       6.34  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  mint                ·     106337  ·     160927  ·     133632  ·            2  ·      10.14  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  redeem              ·          -  ·          -  ·      85951  ·            1  ·       6.52  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  unlink              ·          -  ·          -  ·      65141  ·            1  ·       4.94  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  unlinkable          ·          -  ·          -  ·      46541  ·            1  ·       3.53  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  withdraw            ·          -  ·          -  ·      35991  ·            1  ·       2.73  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsGame          ·  withdraw            ·          -  ·          -  ·      29034  ·            1  ·       2.20  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  addItem             ·      54997  ·      92009  ·      74284  ·            9  ·       5.64  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  burnTokens          ·          -  ·          -  ·      46667  ·            1  ·       3.54  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  grantRole           ·          -  ·          -  ·      51507  ·            7  ·       3.91  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  mint                ·      64920  ·      82032  ·      73476  ·            2  ·       5.58  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  mint                ·      61149  ·      94462  ·      81556  ·            4  ·       6.19  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  mint                ·      87497  ·     125022  ·     101985  ·            4  ·       7.74  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  mint                ·      82671  ·      82683  ·      82677  ·            2  ·       6.28  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  mint                ·     102193  ·     136405  ·     119299  ·            2  ·       9.06  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  setPrice            ·          -  ·          -  ·      46775  ·            9  ·       3.55  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  setPrice            ·          -  ·          -  ·      46303  ·            6  ·       3.51  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  updateMaxSupply     ·          -  ·          -  ·      29095  ·            1  ·       2.21  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  updateURI           ·          -  ·          -  ·      32686  ·            1  ·       2.48  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  withdraw            ·          -  ·          -  ·      36013  ·            1  ·       2.73  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsLoot          ·  withdraw            ·          -  ·          -  ·      29119  ·            1  ·       2.21  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMarket        ·  setExchangeRate     ·          -  ·          -  ·      28568  ·            1  ·       2.17  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMarket        ·  toDolla             ·          -  ·          -  ·      68074  ·            1  ·       5.17  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMarket        ·  toMilk              ·          -  ·          -  ·      68108  ·            1  ·       5.17  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMetadata      ·  setBaseURI          ·          -  ·          -  ·      47078  ·            1  ·       3.57  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMetadata      ·  setStage            ·      45959  ·      45983  ·      45971  ·            3  ·       3.49  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMetadata      ·  setTreasury         ·          -  ·          -  ·      46081  ·            1  ·       3.50  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMilk          ·  grantRole           ·      29185  ·      51374  ·      48196  ·            7  ·       3.66  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMilk          ·  mint                ·      73065  ·      73125  ·      73095  ·            2  ·       5.55  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMilk          ·  pause               ·          -  ·          -  ·      47041  ·            1  ·       3.57  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsMilk          ·  transfer            ·          -  ·          -  ·      53722  ·            1  ·       4.08  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsTreasury      ·  release             ·          -  ·          -  ·     119779  ·            1  ·       9.09  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsTreasury      ·  release             ·          -  ·          -  ·      90541  ·            2  ·       6.87  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsTreasury      ·  releaseBatch        ·     117967  ·     350890  ·     234429  ·            2  ·      17.80  │
·························|······················|·············|·············|·············|···············|··············
|  CashCowsTreasury      ·  releaseBatch        ·     137353  ·     394241  ·     265797  ·            2  ·      20.18  │
·························|······················|·············|·············|·············|···············|··············
|  MockERC20WETH         ·  approve             ·          -  ·          -  ·      46191  ·            3  ·       3.51  │
·························|······················|·············|·············|·············|···············|··············
|  MockERC20WETH         ·  mint                ·      51176  ·      68360  ·      64894  ·            5  ·       4.93  │
·························|······················|·············|·············|·············|···············|··············
|  Deployments                                  ·                                         ·  % of limit   ·             │
················································|·············|·············|·············|···············|··············
|  CashCows                                     ·          -  ·          -  ·    2839048  ·       22.8 %  ·     215.51  │
················································|·············|·············|·············|···············|··············
|  CashCowsBarn                                 ·          -  ·          -  ·    1363990  ·         11 %  ·     103.54  │
················································|·············|·············|·············|···············|··············
|  CashCowsClub                                 ·          -  ·          -  ·    2879390  ·       23.1 %  ·     218.57  │
················································|·············|·············|·············|···············|··············
|  CashCowsClubMetadata                         ·          -  ·          -  ·     512789  ·        4.1 %  ·      38.93  │
················································|·············|·············|·············|···············|··············
|  CashCowsClubTreasury                         ·          -  ·          -  ·    1246664  ·         10 %  ·      94.63  │
················································|·············|·············|·············|···············|··············
|  CashCowsCulling                              ·          -  ·          -  ·     651539  ·        5.2 %  ·      49.46  │
················································|·············|·············|·············|···············|··············
|  CashCowsDolla                                ·          -  ·          -  ·    1306377  ·       10.5 %  ·      99.17  │
················································|·············|·············|·············|···············|··············
|  CashCowsGame                                 ·          -  ·          -  ·    2202321  ·       17.7 %  ·     167.18  │
················································|·············|·············|·············|···············|··············
|  CashCowsIndex                                ·          -  ·          -  ·     261410  ·        2.1 %  ·      19.84  │
················································|·············|·············|·············|···············|··············
|  CashCowsLoot                                 ·          -  ·          -  ·    3620311  ·       29.1 %  ·     274.82  │
················································|·············|·············|·············|···············|··············
|  CashCowsMarket                               ·          -  ·          -  ·     414853  ·        3.3 %  ·      31.49  │
················································|·············|·············|·············|···············|··············
|  CashCowsMetadata                             ·          -  ·          -  ·     649235  ·        5.2 %  ·      49.28  │
················································|·············|·············|·············|···············|··············
|  CashCowsMilk                                 ·          -  ·          -  ·    1306240  ·       10.5 %  ·      99.16  │
················································|·············|·············|·············|···············|··············
|  CashCowsTreasury                             ·    1268997  ·    1269009  ·    1269004  ·       10.2 %  ·      96.33  │
················································|·············|·············|·············|···············|··············
|  MockERC20WETH                                ·          -  ·          -  ·     645971  ·        5.2 %  ·      49.04  │
·-----------------------------------------------|-------------|-------------|-------------|---------------|-------------·
```
