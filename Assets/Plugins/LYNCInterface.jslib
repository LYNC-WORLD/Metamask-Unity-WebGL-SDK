 
var LibraryMyPlugin = {
   $MyData: {
        walletAddress: "",
        error: "",
   },
   
   WalletInstalled: function (){
        if(window.ethereum === undefined){
            return false; // Wallet is not installed
        }
        else{
            if(ethereum.isMetaMask){
                return true; // Metamask Wallet installed
            }
        }
    },
   WalletConnected: function (){
        const walletAddress = JSON.stringify(MyData.walletAddress);
        let bufferSize = lengthBytesUTF8(walletAddress) + 1;
        let buffer = _malloc(bufferSize);
        stringToUTF8(str, buffer, bufferSize);
        return buffer;
    },
   CurrentChain: function () {
        let currentChainId = window.ethereum.networkVersion;
        var bufferSize = lengthBytesUTF8(currentChainId) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(currentChainId, buffer, bufferSize);
        return buffer;
    },
    
   WalletPopup: async function (){
        MyData.walletAddress = await ethereum.request({ method: 'eth_requestAccounts' });
    },
    
    ChangeCurrentChain: async function (chainID){
        MyData.error = await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: UTF8ToString(chainID) }],
      });
    },
    
   WalletAddress: function () {
        const walletAddress = JSON.stringify(MyData.walletAddress);
        let bufferSize = lengthBytesUTF8(walletAddress) + 1;
        let buffer = _malloc(bufferSize);
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
    
   AddChain: async function (ChainID, NetworkURL, NetworkName, CurrencyName, CurrencySymbol, BlockExplorerURL) {
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
              {
                chainId: UTF8ToString(ChainID),
                chainName: UTF8ToString(NetworkName),
                nativeCurrency: {
                  name: UTF8ToString(CurrencyName),
                  symbol: UTF8ToString(CurrencySymbol),
                  decimals: 18,
                },
                blockExplorerUrls: [UTF8ToString(BlockExplorerURL)],
                rpcUrls: [UTF8ToString(NetworkURL)],
              },
          ],
      });
    },
    SendTokens: function (ReceiverAddress,value){
      window.lync.SendTokens(UTF8ToString(ReceiverAddress),UTF8ToString(value));
    },
};

 
autoAddDeps(LibraryMyPlugin, '$MyData');
mergeInto(LibraryManager.library, LibraryMyPlugin);
