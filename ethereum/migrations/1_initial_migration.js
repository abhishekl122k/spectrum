const ApiConsumer = artifacts.require('APIConsumer');

module.exports = function (deployer) {
  deployer.deploy(ApiConsumer);
};
