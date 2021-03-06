//OM NAMO NARAYANA

pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";
contract SpecChain{
    address public manager;
    string public name;
    string public content;
    bytes32 data;
    constructor() public{
        data = requestVolumeData();
    }
}

contract APIConsumer is ChainlinkClient {
  
    uint256 public volume;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;



    constructor() public {


        //change the oracle and jobId during rinkeby deployment

        setPublicChainlinkToken();
        oracle = 0x2f90A6D021db21e1B2A077c5a37B3C7E75D15b7e;
        jobId = "29fa9aa13bf1468788b7cc4a500a45b8";
        fee = 0.1 * 10 ** 18; 
    }


    //function to debug APIConsumer
    function testFunction() pure public returns (int test_data){
        test_data = 1;
        return test_data;
        bytes32 request_data = requestVolumeData();
    }

    function requestVolumeData() public returns (bytes32 requestId) 
    {
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        

        //here we put the address of the api call. This can be used to get images.
        request.add("get", "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD");
        
       
        request.add("path", "RAW.ETH.USD.VOLUME24HOUR");
        
        int timesAmount = 10**18;
        request.addInt("times", timesAmount);
        

        //change the aggregator settings during deployment in infura
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, uint256 _volume) public recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
    }
}