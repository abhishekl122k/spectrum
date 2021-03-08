//OM NAMO NARAYANA

var Spectrum = artifacts.require("Spectrum");
var Post = artifacts.require("Post");
var SpecTime = artifacts.require("SpecTime");
// var PriceConsumerV3 = artifacts.require("PriceConsumerV3");
// var ApiConsumer = artifacts.require("APIConsumer");
var SpecChain = artifacts.require("SpecChain");

module.exports = function(deployer){
    // deployer.deploy(ApiConsumer);
    // deployer.deploy(PriceConsumerV3);
    deployer.deploy(SpecChain);
    deployer.deploy(SpecTime);
    deployer.deploy(Spectrum, "OM NAMO NARAYANA", "Arvinth");
    deployer.deploy(Post,"0x604BCD042D2d5B355ecE14B6aC3224d23F29a51c", "OM NAMO NARAYANA", "Arvinth", "https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new");
};