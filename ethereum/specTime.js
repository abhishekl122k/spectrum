//OM NAMO NARAYANA
import web3 from './web3';
import SpecTime from './build/contracts/SpecTime.json';

const instance = new web3.eth.Contract(
	SpecTime.abi,
	//address of SpecTime here
	'0x6c8f22d3124d556dAFe5a2fCCb7d4D173011e7c7'
	);

console.log(instance);

export default instance;
