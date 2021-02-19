//OM NAMO NARAYANA
const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');
 
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const SpectrumPath = path.resolve(__dirname, 'contracts', 'Spectrum.sol');
const AggregatorV3InterfacePath = path.resolve(__dirname, '')

const spectrumsol = fs.readFileSync(SpectrumPath, 'UTF-8');
 
var input = {
    language: 'Solidity',
    sources: {
        'Spectrum.sol': {content : spectrumsol},
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));
fs.ensureDirSync(buildPath);

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract]
  );
}
