//OM NAMO NARAYANA
import web3 from './web3';
import SpecChain from './build/contracts/SpecChain.json';

const instance = new web3.eth.Contract(
	SpecChain.abi,
	//address of SpecCahin here
	'0x7A370d331AdafcACd4756099f0768531ddD2F817'
	);

console.log(instance);

export default instance;
