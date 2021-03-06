//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0xd2A5bAc6729Ced431122E1864A5F825Dd5A97D12'
	);

console.log(instance);

export default instance;
