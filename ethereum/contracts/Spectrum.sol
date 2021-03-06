pragma solidity ^0.6.0;


contract Spectrum{

    address[] public deployedPosts;
    
    function createPost(string memory content, string memory name) public returns (address[] memory){
        Post newPost = new Post(msg.sender, content, name);
        deployedPosts.push(address(newPost));
        return deployedPosts;
    }

    function getDeployedPosts() public view returns (address[] memory){
        return deployedPosts;
    }

}

contract Post{

    address tempAddress;
    
    address public manager;
    string public name;
    string public content;
    
    uint public total = 20000000000000000;
    uint public yayprice;
    uint public nayprice;
    uint public yaycount = 0;
    uint public naycount = 0;
    mapping(address=>uint) public yays;
    mapping(address=>uint) public nays;
    address payable [] public voted;
    bool public completed = false;
    bool public verdict;
    uint public balanceRef = 0;
    uint public timeStamp;

    
    modifier active(){
    	require(!completed);
      _;
    }
	
  	function complete() public payable{

        if(msg.sender== tempAddress) {
			completed = true;
            balanceRef = address(this).balance;
            if(verdict==true){
                for(uint i = 0; i < voted.length; i++){
                    if(yays[voted[i]]>0){
                        voted[i].transfer((yays[voted[i]]*balanceRef)/(yaycount)*95/100);
                    }
                }
            }else{
                for(uint i = 0; i < voted.length; i++){
                    if(nays[voted[i]]>0){
                        voted[i].transfer((nays[voted[i]]*balanceRef)/(naycount)*95/100);
                    }
                }
            }
        }
    }
 
    
    function updateCost() public {
        yayprice =  ((total *(yaycount+10))/(yaycount + naycount + 20));
        nayprice = total - yayprice;
        balanceRef = address(this).balance;
    }
    
    function voteYay() public payable active{
    		
        if(msg.sender == tempAddress){
            verdict = true;
            complete();
        }else{
        	if(yays[msg.sender]==0 && nays[msg.sender]==0){
          	    voted.push(msg.sender);
        	}
            require(msg.value>=yayprice);
            require(yays[msg.sender]<=3);

            yays[msg.sender]++;
            yaycount++;
            updateCost();
        }       
    }
    
    function voteNay() public payable {
    	
      	 if(msg.sender==tempAddress){
            verdict = false;
            complete();
        }else{
        	if(yays[msg.sender]==0 && nays[msg.sender]==0){
          	    voted.push(msg.sender);
        	}
            require(msg.value>=nayprice);
            require(nays[msg.sender]<=3);

            nays[msg.sender]++;
            naycount++;
            updateCost();
        }       
    }

    function getSummary() public view returns (address, string memory, string memory, uint, uint, uint, uint, bool, bool, uint){
        return(address(this), name, content, yayprice, nayprice, yaycount, naycount, completed, verdict, balanceRef);
    }
    
    
    constructor(address manager_init, string memory content_init, string memory name_init) public {
        name = name_init;
        manager = manager_init;
        tempAddress = manager;
        content = content_init;
    	updateCost();
	}
    
    
}