//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0xab8BECb5EDf133ca54a0C3F1959FA47bdFF5e35E'
	);

console.log(instance);

export default instance;
