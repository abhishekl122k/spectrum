//OM NAMO NARAYANA
import web3 from './web3';
import Spectrum from './Spectrum.json';

return new web3.eth.Contract(
	JSON.parse(Spectrum.interface),
	//address of spectrum here
	''
	);