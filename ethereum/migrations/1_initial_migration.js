const Migrations = artifacts.require("Migrations");
const ChainlinkDemo = artifacts.require("ChainlinkDemo");
const ApiConsumer = artifacts.require('APIConsumer')

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ApiConsumer);
};
