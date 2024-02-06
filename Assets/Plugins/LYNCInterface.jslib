 
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

    CopyString: function (value) {
        var textField = document.createElement('textarea');
        textField.value = UTF8ToString(value);
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        document.body.removeChild(textField);
    },

    returnResponse: function(){
        var res = window.lync.contractResponse;
        var bufferSize = lengthBytesUTF8(res) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(res, buffer, bufferSize);
        return buffer;
    },

    setResponse: function(value){
        window.lync.SetResponse(UTF8ToString(value))
    },

    SendTransaction: async function(ContractAddress,ContractABI,FunctionName,Args,MintCost){
        window.lync.SendTransaction(
            UTF8ToString(ContractAddress),
            UTF8ToString(ContractABI),
            UTF8ToString(FunctionName),
            UTF8ToString(Args),
            UTF8ToString(MintCost),
        );
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
