//OM NAMO NARAYANA
var chainLinkDemo = artifacts.require("ChainlinkDemo");
var ApiConsumer = artifacts.require("APIConsumer");

module.exports = function(deployer){
    deployer.deploy(chainLinkDemo);
    deployer.deploy(ApiConsumer);
};