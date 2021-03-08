//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0x3D063830a42C7fbE6A6a8ae8AAa1da6393B89e5E'
	);

console.log(instance);

export default instance;
