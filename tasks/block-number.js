const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        // this is an anonymous fct because it has no name like blockTask
        //that's a JS arrow fct
        // const blockTask = async function() => {}
        // async function blockTask() {}
        // hre = hardhat runtime envornonment = same like "requiok"
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)

module.exports = {}
