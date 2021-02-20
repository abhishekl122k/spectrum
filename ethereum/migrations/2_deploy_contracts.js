//OM NAMO NARAYANA
var PriceConsumer = artifacts.require("PriceConsumerV3");
var ApiConsumer = artifacts.require("APIConsumer");

module.exports = function(deployer){
    deployer.deploy(ApiConsumer);
    deployer.deploy(PriceConsumer);
};