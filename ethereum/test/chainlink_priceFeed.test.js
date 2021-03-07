//OM NAMO NARAYANA

// const SpecTime = artifacts.require("SpecTime");
const priceV3 = artifacts.require("PriceConsumerV3");


contract("PriceConsumerV3!", accounts=>{

    var instance;
    beforeEach(async ()=>{
        instance = await priceV3.new();
    });
        

    it("should create a PriceConsumerV3 instance", ()=>{
        ;
    });
    it("should call price feed", async()=>{
        await instance.getLatestPrice.sendTransaction();
    });
});

// contract("SpecTime!", accounts=>{

//     var instance;
//     beforeEach(async ()=>{
//         instance = await SpecTime.new();
//     });
        

//     it("should create a specTime instance and called priceFeed", ()=>{
//         ;
//     });
//     it("should call price feed", async()=>{
//         await instance.getPrice.call();
//     });
// });

