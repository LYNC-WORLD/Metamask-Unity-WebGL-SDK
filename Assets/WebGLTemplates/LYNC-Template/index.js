document.body.appendChild(Object.assign(document.createElement("script"), { type: "text/javascript", src: "./web3/web3.min.js" }));
document.body.appendChild(Object.assign(document.createElement("script"), { type: "text/javascript", src: "./web3/ethers.min.js" }));

let provider, web3, walletAddress;

window.lync={
    Web3Init,
    SendTokens,
    SendTransaction,
    contractResponse:"",
    SetResponse,
}

async function Web3Init(){
    provider = window.ethereum;
    web3 = new Web3(provider);
    walletAddress = await web3.eth.getAccounts();
}

async function SendTokens(ReceiverAddress,value){

    let gasPrice = await web3.eth.getGasPrice().then((result) => {
        console.log(web3.utils.fromWei(result, 'ether'))
        return result;
    })

    let NewGasPrice= Math.round(gasPrice* 1.2);

    web3.eth.sendTransaction({
        from: walletAddress[0],
        gasPrice: NewGasPrice,
        gas: undefined,
        to: ReceiverAddress,
        value: ethers.utils.parseEther(value),
        data: ""
    }).then(()=>{
        console.log("SENTTTT");
        window.alert("Sent")
    })
}


ethereum.on("accountsChanged", (accounts) => {
    if(accounts<1){
        window.location.reload();
    }
    else{
        console.log("accountsChanged");
    }
});

function SetResponse(value){
    lync.contractResponse = value;
}

async function SendTransaction(contractAddress,ContractABI, MintNFTFunctionName,Args,MintCost){
    const Value=JSON.parse(Args)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const Signer = provider.getSigner();
    const nftContract = new ethers.Contract(contractAddress,ContractABI, Signer);
    try{
        let transaction = await nftContract[MintNFTFunctionName](
            ...Value,
            {
                value: ethers.utils.parseEther(MintCost)
            },
        );
        await transaction.wait().then((result)=>{
            lync.contractResponse = result.transactionHash;
            console.log(result.transactionHash);
        },)
    }
    catch(error){
        lync.contractResponse = error.reason;
    }
}

// ethereum.on('chainChanged', (_chainId) => {
//     // console.log("chainId"+_chainId);
//     window.location.reload();
// })
