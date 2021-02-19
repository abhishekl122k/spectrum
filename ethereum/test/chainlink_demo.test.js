//OM NAMO NARAYANA


const ApiConsumer = artifacts.require('APIConsumer');
const chainlink = artifacts.require('ChainlinkDemo');


contract("ApiConsumer", accounts =>{
    it("should have created an oracle", async()=>{
        instance = await ApiConsumer.deployed();
        console.log('instance:', instance);        
    });
});