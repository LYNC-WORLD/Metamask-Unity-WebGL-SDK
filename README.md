# Metamask-Unity-Wallet-SDK

### Integrate Metamask Wallet into game engine

LYNC Metamask Wallet SDK is a one-stop solution for game developers to easily integrate Metamask into their game engine and deploy their game on multiple networks with just a few clicks. This SDK allows game developers to monitor gamers’ data via LYNC analytics system and update the SDK without leaving the game engine.

## Get Your API Key
Please get your API key before downloading the SDK from https://www.lync.world/form.html

## Installation
Download the LYNC - Metamask Wallet SDK from here. Import the SDK .unitypackage file to your project. or simply drag and drop .unitypackage file to your project.

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FdDzWzt5kkCqpWZTINSsu%2FLYNC%20wallet%20sdk.png?alt=media&token=65ae978c-fa8b-4eb5-a2ba-548146b3bb14)

Once the Metamask Wallet SDK package has finished importing into your Unity project, you can begin integrating it into your game. To do this, open the ConnectWallet scene provided by the LYNC - Metamask SDK.

                                             Path : Assets ->LYNC-Metamask-SDK -> Scenes
![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2F0e5ptS2g38m6cM1SGKsw%2Fimage.png?alt=media&token=df2b4ac5-149b-47fc-b4eb-7f26a7bf27f9)

## Choose blockchain network
After opening ConnectWallet scene, Go to Interface. In the "Inspector" window, go to the API key & Enter the API key.

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FRnp2FCuQ12kWWVUQLDGn%2FLYNC%20metamask%20wallet%20sdk.png?alt=media&token=7ae549f5-ea46-467f-9725-2ac6485d0dcd)

To choose the blockchain network, simply go to the CurrentChain drop-down menu and pick the network of your preference to deploy your game on.

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FHpqGkDLiEehF4j8lwzNU%2FLYNC%20metamask%20wallet%20sdk%20integration.png?alt=media&token=0d6c3d8a-4c09-44c0-99c1-58817059654a)

## Integrating the Transaction Layer
The Transactions are divided into 2 parts:
1. No Code Transactions
2. Modular Transactions

```
Note: Make sure to have "TransactionManager.cs" in your scene.
```
### No-code Transaction
Check the No-Code-Transaction Scene in the Scenes folder.

![image](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FutQhQ1f3Hy2b3URu0DVp%2Fuploads%2FbSCYoy1tSvils7tPiYiJ%2FScreenshot%202024-02-04%20at%208.23.48%E2%80%AFPM.png?alt=media&token=9ec20967-7bf1-4138-b585-a6864778ad1b)

Check the No-Code TransactionExample GameObject, you can just pass in a few parameters to write on any custom contract inside the game.
Just pass the following parameters:
1. Contract Address - Type any contract address on the chain you selected in the LYNCInterface GameObject.
2. ABI - You can get the contract ABI of a verified contract on the explorer.
3. Function Name - Write the exact function name from the contract
4. Cost - The cost required to do the transaction, if it's free you can pass 0 else pass the value in wei.
5. Arguments - The arguments required by the transaction, are left blank if none.

### Modular Transactions
Check the Transaction Scene in the Scenes folder.

![image](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FutQhQ1f3Hy2b3URu0DVp%2Fuploads%2FAcMC4oiVCxSeB3xG9f5o%2FScreenshot%202024-02-04%20at%2011.55.12%E2%80%AFPM.png?alt=media&token=6fd4eb56-131f-42d9-9b9c-db8287d65a6b)

Check the TransactionExample GameObject, it has a TransactionExample.cs file attached. 

This example contains 3 types of transaction transactions, ERC-721, ERC-1155 and ERC-20.

![image](https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FutQhQ1f3Hy2b3URu0DVp%2Fuploads%2F9eP8ehYPEZBAOWMlHEhx%2FScreenshot%202024-02-05%20at%2012.16.22%E2%80%AFAM.png?alt=media&token=5fca5e50-ba06-44f2-b8fb-c304fcbfbe24)

In this example:
1. send20Trx is a button to disable the button click once the transaction is initiated.
2. contractAddress - is the contract address for a custom transaction. (In this case, it's an ERC-20 contract address on Mumbai Testnet)
3. ABI - You can get the contract ABI of a verified contract on the explorer.
4. functionName - Write the exact function name from the contract (In this case, sendToken)
5. cost - The cost required to do the transaction, if it's free you can pass 0 else pass the value in wei. (In this case, as the function is not payable the value is 0).
6. ParametersOfFunctions - You can pass in the arguments required for the transaction. (In this example, the argument is how much amount you want to send, 10000000000000000 is the value in wei, i.e 0.01 eth. You can pass n number of arguments separated with a comma( , ) ).
7. args - Converts compatible to be a JSON
8. Sending transaction -
```
TransactionManager.Instance.SendTransaction(LoadingScreen, contractAddress, ABI, functionName, args, cost, On20TrxCompleted, On20TrxFailed);
```

The above example explains a requirement for doing transactions.

You can use the "TransactionManager.Instance.SendTransaction()" to send transactions from anywhere in the project, make sure to add the TransactionManager.cs file in the scene.
It takes a LoadingScreen GameObject, contractAddress, ABI, functionName, args, and cost, as explained above and 2 more functions of type "System.Action<string>".
These are not compulsory functions but they handle the Transaction Success or Failure.

**On20TrxCompleted **- Handles once the transaction is completed. (It returns a transaction hash).
**On20TrxFailed** - Handles if the transaction failed. (It returns a reason for transaction failure).

## Integrating ConnetWallet scene into the build 
To deploy your Unity project, it's necessary to set up the Player Settings in Unity. Follow these steps to select the LYNC WebGL template.

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FvhM5TyzDTWyCecTKV5Ub%2FLYNC%20OKX%20Wallet%20Integration.png?alt=media&token=a98f0cb1-e8c0-4460-82f3-c3574e077b33)

In the "Build Settings" window, place ConnectWallet and FetchWallet at the top of this section. 

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FCr5UxTMd4KVDiwmh4Qm3%2FLYNC%20metamask%20wallet%20sdk%20integration%20build.png.jpg?alt=media&token=46792188-2a8b-49d6-badf-1591099b4248)

Go to "Player Settings" and navigate to "Resolution and Presentation". Select LYNC - Template in WebGL Template

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FfoYh0yqDI1JYc0qHNnpn%2FLYNC%20Unity%20SDK.png?alt=media&token=68432dc1-f421-434c-880f-3495b61d5755)

After completing all the necessary steps and configuring the Player Settings with the LYNC WebGL template, you can now build and run your game.
To do this, go to "File" on the top menu bar in the Unity editor and select "Build and Run." 

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2FZu5tl1uaAbHiMBWnRacj%2FBuild%20and%20launch%20web3%20games.png?alt=media&token=7b3f782b-3c7e-47aa-ae3c-1be9ecdd63ac)


Congratulation, you have successfully integrated the Metamask wallet with your favourite blockchain network using LYNC SDK. 

NOTE: If you wish to use wallet address inside game after user's wallet is connected, use:

```PlayerPrefs.GetString("WalletAddress");```


If you face any error, while Build and Run.

PLEASE ADD, Unity package install by git link:

```com.unity.nuget.newtonsoft-json```

![image](https://1898638688-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F3h3YUWYt8sR5rHLOIeFc%2Fuploads%2F9nwo1yYtk7mKRGrZZd5S%2FScreenshot%202023-08-21%20130643.png?alt=media&token=27f6acf8-4196-42be-8043-cc4c2bad2929)
