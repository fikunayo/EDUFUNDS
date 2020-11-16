if (window.ethereum) {
  window.web3 = new Web3(ethereum);
  try {
    // Request account access if needed
    ethereum.enable();
  } catch (error) {
    // User denied account access...
  }
} else if (window.web3) {
  // Legacy dapp browsers...
  window.web3 = new Web3(web3.currentProvider);
} else {
  // Non-dapp browsers...
  console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
}


// const init = async () => {
    const web3 = new Web3('http://localhost:9545');

		web3.eth.defaultAccount = web3.eth.accounts[0];

    const abi = [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "address",
            "name": "contractAddress",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "address",
            "name": "projectStarter",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "projectTitle",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "string",
            "name": "projectDesc",
            "type": "string"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "goalAmount",
            "type": "uint256"
          }
        ],
        "name": "ProjectStarted",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "functionCalled",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "returnAllProjects",
        "outputs": [
          {
            "internalType": "contract Project[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "sendEther",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "durationInDays",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountToRaise",
            "type": "uint256"
          }
        ],
        "name": "startProject",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ];

    const address = "0x4d80f230dc65C3096d2A5E8825BEA755c29E7cB0";

    const contract = new web3.eth.Contract(
        abi,
        address
    );

    console.log(contract);

// }

// init();