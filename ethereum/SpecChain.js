//OM NAMO NARAYANA
import web3 from './web3';
import SpecChain from './build/contracts/SpecChain.json';

const instance = new web3.eth.Contract(
	SpecChain.abi,
	//address of SpecCahin here
	'0x7511DD90A6AEdfef0171cB0A75e9741d4C10a7bf'
	);

console.log(instance);

export default instance;
