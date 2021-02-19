//OM NAMO NARAYANA
var chainLinkDemo = artifacts.require("chainlink_demo");

module.export = function(deployer){
    deployer.deploy(chainLinkDemo);
};