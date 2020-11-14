// const { default: Web3 } = require('web3');
const Web3 = require('web3');
const Crowdfunding = require('./build/contracts/Crowdfunding.json');


const init = async () => {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:9545'));

    const address = "0x4d80f230dc65C3096d2A5E8825BEA755c29E7cB0";
    // const id = await web3.eth.net.getId();
    // const deployedNetwork = Crowdfunding.networks[id];
    const contract = new web3.eth.Contract(
        Crowdfunding.abi,
        address
    );

    // const allProjects = await contract.methods.returnAllProjects().call();
    // console.log(allProjects);

    contract.methods.returnAllProjects().call().then((projects) => {
        projects.forEach((projectAddress) => {
          const projectInst = crowdfundProject(projectAddress);
          projectInst.methods.getDetails().call().then((projectData) => {
            const projectInfo = projectData;
            projectInfo.isLoading = false;
            projectInfo.contract = projectInst;
            this.projectData.push(projectInfo);
          });
        });
      });
}

init();