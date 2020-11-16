// const { default: Web3 } = require('web3');
const Web3 = require('web3');
const Crowdfunding = require('../build/contracts/Crowdfunding.json');


// const init = async () => {
    const web3 = new Web3('http://localhost:9545');

    const address = "0x4d80f230dc65C3096d2A5E8825BEA755c29E7cB0";
    // const id = await web3.eth.net.getId();
    // const deployedNetwork = Crowdfunding.networks[id];
    const contract = new web3.eth.Contract(
        Crowdfunding.abi,
        address
    );

    console.log("hello world");

    contract.methods.sendEther().call((err, result) => { console.log(result) });
// }

// init();