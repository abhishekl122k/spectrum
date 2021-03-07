//OM NAMO NARAYANA

pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";


contract APIConsumer is ChainlinkClient {
  
    uint256 public volume;
    
    address private oracle;
    bytes32 private jobId;
    uint256 private fee;



    constructor() public {


        //change the oracle and jobId during rinkeby deployment

        setPublicChainlinkToken();
        oracle = 0x7AFe1118Ea78C1eae84ca8feE5C65Bc76CcF879e;
        jobId = "6d1bfe27e7034b1d87b5270556b17277";
        fee = 0.1 * 10 ** 18; 
        require(true, "passed constructor");
    }


    //function to debug APIConsumer
    function testFunction() public returns (int test_data){
        test_data = 1;
        return test_data;
        bytes32 request_data = requestVolumeData();
    }

    function requestVolumeData() public returns (bytes32 requestId) 
    {

        require(true, "requestDataCalled");
        Chainlink.Request memory request = buildChainlinkRequest(jobId, address(this), this.fulfill.selector);
        require(true, "buildChainLinkRequest done");
        
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

contract SpecChain is APIConsumer{
    address public manager;
    string public name;
    string public content;
    bytes32 data;
    constructor() public {
        data = requestVolumeData();
    }
    function getData() public{

    }
}