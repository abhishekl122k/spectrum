//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0x07059A85cD2E171112668133B47fF21BbD19Aa98'
	);

console.log(instance);

export default instance;
