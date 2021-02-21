//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './build/contracts/Spectrum.json';

const instance = new web3.eth.Contract(
	Spectrum.abi,
	//address of spectrum here
	'0x8910c6B05F1A48D9F8AFD9A5884ED6a8cBF3D7d5'
	);
	
console.log(instance);

export default instance;


// export default () => {
// 	return new web3.eth.Contract(
// 		JSON.parse(Spectrum.abi),
// 		//address of spectrum here
// 		'0x8910c6B05F1A48D9F8AFD9A5884ED6a8cBF3D7d5'
// 	);
// };