// window.lync={
//     chainId
// }


ethereum.on("accountsChanged", (accounts) => {
    console.log("accounts",accounts);
    if(accounts<1){
        window.location.reload();
    }
    else{
        console.log("accountsChanged");
    }
});

// ethereum.on('chainChanged', (_chainId) => {
//     // console.log("chainId"+_chainId);
//     window.location.reload();
// })
