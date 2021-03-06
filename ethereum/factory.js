//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0x7Ab2Bd22e4704cF19c9bcDad6F828E8756FE3Aa6'
	);

console.log(instance);

export default instance;
