//OM NAMO NARAYANA
//var PriceConsumer = artifacts.require("PriceConsumerV3");
//var ApiConsumer = artifacts.require("APIConsumer");
var Spectrum = artifacts.require("Spectrum");
var Post = artifacts.require("Post");

module.exports = function(deployer){//, network, address, spectrumContent, spectrumName, postManager, postConent, postName){
    //deployer.deploy(ApiConsumer);
    //deployer.deploy(PriceConsumer);
    deployer.deploy(Spectrum, "OM NAMO NARAYANA", "Arvinth");
    deployer.deploy(Post,"0x604BCD042D2d5B355ecE14B6aC3224d23F29a51c", "OM NAMO NARAYANA", "Arvinth");
};