const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledSpectrum = require('./build/spectrum.json');
const compiledFactory = require('./build/postFactory.json');

const provider = new HDWalletProvider(
    'alone ahead plunge pact soda skull lion wall index story board normal',
    'https://rinkeby.infura.io/v3/d2aaf60f86b64e8ab349c9cd9da59031'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(
        JSON.parse(compiledSpectrum.interface)
        )
        .deploy({ data: compiledSpectrum.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    

  console.log('Spectrum depolyed to ', result.options.address,' and factory deployed to ', result2.options.address );
};
deploy();
