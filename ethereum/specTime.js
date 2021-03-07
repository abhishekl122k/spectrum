//OM NAMO NARAYANA
import web3 from './web3';
import PriceConsumerV3 from './build/contracts/PriceConsumerV3.json';

const instance = new web3.eth.Contract(
	PriceConsumerV3.abi,
	//address of PriceConsumer here
	'0xcCbc63f81DC0da619098b9Ca5b468Cb86Bf9f15B'
	);

console.log(instance);

export default instance;
