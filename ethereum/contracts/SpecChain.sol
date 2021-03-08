//OM NAMO NARAYANA

pragma solidity ^0.6.0;

import "@chainlink/contracts/src/v0.6/ChainlinkClient.sol";


contract APIConsumer is ChainlinkClient {
  
    bytes32 volume;
    address private oracle;
    string private jobId;
    uint256 private fee;


    constructor() public {

        setPublicChainlinkToken();
        oracle = 0xC2d39d70fB75Fb3d2a0e3a67B914Bfd8A7e2964a;
        jobId = "f858e9a076704c06a73a5b564772de6f";
        fee = 0.05 * 10 ** 18; 
    }


    function requestVolumeData(string memory url) public returns(bytes32)
    {
        Chainlink.Request memory request = buildChainlinkRequest(stringToBytes32(jobId), address(this), this.fulfill.selector);
        request.add("get", url);
        request.add("path", "USD");
        request.addInt("times", 100);
        return sendChainlinkRequestTo(oracle, request, fee);
    }

    function fulfill(bytes32 _requestId, bytes32 _volume) public recordChainlinkFulfillment(_requestId)
    {
        volume = _volume;
    }
    
    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
      return 0x0;
    }
    assembly { // solhint-disable-line no-inline-assembly
      result := mload(add(source, 32))
    }
  }
}

contract SpecChain is APIConsumer{
  bytes32 public data;
  function getData(string memory url) public returns (bytes32) {
    data = requestVolumeData(url);
    return data;
  }
}
