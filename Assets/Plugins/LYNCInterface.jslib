 
var LibraryMyPlugin = {
   $MyData: {
        walletAddress: "",
        error: "",
   },
   
   CheckIsMetamaskWalletInstalled: function (){
        if(window.ethereum === undefined){
            return false; // Wallet is not installed
        }
        else{
            if(ethereum.isMetaMask){
                return true; // Metamask Wallet installed
            }
        }
    },
   
   GetCurrentChain: function () {
        let currentChainId = window.ethereum.networkVersion;
        var bufferSize = lengthBytesUTF8(currentChainId) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(currentChainId, buffer, bufferSize);
        return buffer;
    },
    
   OpenMetamaskWalletPopup: async function (){
        MyData.walletAddress = await ethereum.request({ method: 'eth_requestAccounts' });
    },
    
    ChangeChain: async function (chainID){
        MyData.error = await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: UTF8ToString(chainID) }],
      });
    },
    
   GetAccount: function () {
        var str = JSON.stringify(MyData.walletAddress);
        var bufferSize = lengthBytesUTF8(str) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(str, buffer, bufferSize);
        window.lync.Web3Init();
        return buffer;
    },
    
   GetChainDetails: function () {
        if(MyData.error == null){
            return true;
        }else{
            return false;
        }
    },
    
   AddChain: async function () {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
              {
                chainId: "0x1389",
                chainName: "Mantle Testnet",
                nativeCurrency: {
                  name: "BIT",
                  symbol: "BIT",
                  decimals: 18,
                },
                blockExplorerUrls: ["https://explorer.testnet.mantle.xyz"],
                rpcUrls: ["https://rpc.testnet.mantle.xyz"], //
              },
          ],
      });
    },
    
    CheckIsWalletConnected: function (){
        var str = JSON.stringify(MyData.walletAddress);
        var bufferSize = lengthBytesUTF8(str) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(str, buffer, bufferSize);
        return buffer;
    },
    SendTokens: function (ReceiverAddress,value){
      window.lync.SendTokens(UTF8ToString(ReceiverAddress),UTF8ToString(value));
    },
};

 
autoAddDeps(LibraryMyPlugin, '$MyData');
mergeInto(LibraryManager.library, LibraryMyPlugin);
