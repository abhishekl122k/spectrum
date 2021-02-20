//OM NAMO NARAYANA


const ApiConsumer = artifacts.require('APIConsumer');
const chainlink = artifacts.require('ChainlinkDemo');

var instance;





contract("ApiConsumer", accounts =>{


    // async function before(){
    //     console.log('to create an instance');
    //     instance = await ApiConsumer.deployed();
    //     console.log('deployed instance: ', instance);
    // }

    it("should have created an instance", async()=>{
        instance = await ApiConsumer.deployed();
        console.log('instance:', instance);        
    });
    it("should have called the dummy function", async()=>{
        instance = await ApiConsumer.deployed();
        let dummy = await instance.dummyFunction.call();
    });

    it("should call requestDataVolume()", async()=>{
        instance = await ApiConsumer.deployed();
        let requestId = await instance.requestVolumeData.call();
        console.log('requestId:', requestId);
    });
});