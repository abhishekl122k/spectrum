//OM NAMO NARAYANA


const ApiConsumer = artifacts.require('APIConsumer');
const PriceConsumer = artifacts.require("PriceConsumerV3");

var instance;


contract("PriceConsumer", accounts =>{
    it("should create an instance", async () =>{
        instance = await PriceConsumer.deployed();
    });
    it("should get the latest price", async () => {
        instance = await PriceConsumer.deployed();
        // console.log('instance.getLatestPrice:', instance.getLatestPrice);
        let roundData = await instance.getLatestPrice.call();
        // console.log('round data:', roundData);
    })
})

contract("ApiConsumer", accounts =>{


    // async function before(){
    //     console.log('to create an instance');
    //     instance = await ApiConsumer.deployed();
    //     console.log('deployed instance: ', instance);
    // }

    it("should have created an instance", async()=>{
        instance = await ApiConsumer.deployed();
        
    });
    it("should have called the dummy function", async()=>{
        instance = await ApiConsumer.deployed();
        let dummy = await instance.dummyFunction.call();
        // console.log('dummy function method', instance.dummyFunction);
    });

    it("should call requestDataVolume()", async()=>{
        instance = await ApiConsumer.deployed();
        let requestId = await instance.requestVolumeData.call();
        console.log('requestId:', requestId);
    });
});