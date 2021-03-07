//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0x7FC9Ec36ec7f7FCd6439B5fec436a6f7A946f4dB'
	);

console.log(instance);

export default instance;
