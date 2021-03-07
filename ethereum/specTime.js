//OM NAMO NARAYANA
import web3 from './web3';
import SpecTime from './build/contracts/SpecTime.json';

const instance = new web3.eth.Contract(
	SpecTime.abi,
	//address of SpecTime here
	'0xEB1e1c33B67954544a22DFe80eD5F4132c019304'
	);

console.log(instance);

export default instance;
