const ApiConsumer = artifacts.require('APIConsumer');
const PriceConsumer = artifacts.require('PriceConsumerV3');

module.exports = function (deployer) {
  deployer.deploy(ApiConsumer);
  deployer.deploy(PriceConsumer);
};
