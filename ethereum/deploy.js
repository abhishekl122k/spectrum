const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledSpectrum = require('./build/spectrum.json');
const compiledFactory = require('./build/postFactory.json');

const provider = new HDWalletProvider(
    'alone ahead plunge pact soda skull lion wall index story board normal',
    'https://rinkeby.infura.io/v3/c92640a6fb404d95946203bbe4d032de'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

    const result1 = await new web3.eth.Contract(
        JSON.parse(compiledSpectrum.interface)
        )
        .deploy({ data: compiledSpectrum.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    const result2 = await new web3.eth.Contract(
        JSON.parse(compiledFactory.interface)
        )
        .deploy({ data: compiledFactory.bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    

  console.log('Spectrum depolyed to ', result1.options.address,' and factory deployed to ', result2.options.address );
};
deploy();
