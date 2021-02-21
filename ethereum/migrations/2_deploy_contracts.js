//OM NAMO NARAYANA
var PriceConsumer = artifacts.require("PriceConsumerV3");
var ApiConsumer = artifacts.require("APIConsumer");
var Spectrum = artifacts.require("Spectrum");

module.exports = function(deployer){
    deployer.deploy(ApiConsumer);
    deployer.deploy(PriceConsumer);
    deployer.deploy(Spectrum);
};