//OM NAMO NARAYANA
import web3 from './web3';
import PriceConsumerV3 from './build/contracts/PriceConsumerV3.json';

const instance = new web3.eth.Contract(
	PriceConsumerV3.abi,
	//address of spectrum here
	'0x90643E8E36977Da76F9Df48d2e6e977EA7388084'
	);

console.log(instance);

export default instance;
