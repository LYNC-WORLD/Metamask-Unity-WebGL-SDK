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
