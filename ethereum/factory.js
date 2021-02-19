//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './Spectrum.json';

return new web3.eth.Contract(
	JSON.parse(Spectrum.interface),
	//address of spectrum here
	'0x1aA5726407E0C47915Fbd42a7951Fe268f550B49'
	);