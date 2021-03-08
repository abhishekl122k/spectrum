//OM NAMO NARAYANA
import web3 from './web3';
import SpecTime from './build/contracts/SpecTime.json';

const instance = new web3.eth.Contract(
	SpecTime.abi,
	//address of SpecTime here
	'0x526b7dF9784b4413315715BE7E1F31e773DAF481'
	);

console.log(instance);

export default instance;
