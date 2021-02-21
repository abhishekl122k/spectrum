pragma solidity ^0.6.0;


contract Spectrum{

    address[] public deployedPosts;
    string content;
    
    
    //Pass post content and alias name as string. How??
    
    function createPost() public returns (uint ){
        Post newPost = new Post(msg.sender, content);
        deployedPosts.push(address(newPost));
        return deployedPosts.length;
    }

    function getDeployedPosts() public view returns (uint){
        return deployedPosts.length;
    }

    function returnContent() public view returns (string memory){
        return content;
    }

    constructor()public{
        content = "OM";
    }
}

contract Post{

    // address tempAddress = address(keccak256("0x604BCD042D2d5B355ecE14B6aC3224d23F29a51c"));//delete this
    address tempAddress;
    
    address public manager;
    string public name;
    string public content;
    
    uint public total = 2;
    uint public yayprice;
    uint public nayprice;
    uint public yaycount = 0;
    uint public naycount = 0;
    mapping(address=>uint) public yays;
    mapping(address=>uint) public nays;
    address payable [] voted;
    bool completed = false;
    bool verdict;

    
    modifier active(){
    	require(!completed);
      _;
    }
	
  	function complete() public payable{

        if(msg.sender== tempAddress) {
            if(verdict==true){
                for(uint i = 0; i < voted.length; i++){
                    if(yays[voted[i]]>0){
                        voted[i].transfer(yays[voted[i]]*address(this).balance/(yaycount)*95/100);
                    }
                }
            }
        }else{
            for(uint i = 0; i < voted.length; i++){
                if(nays[voted[i]]>0){
                    voted[i].transfer(nays[voted[i]]*address(this).balance/(naycount)*95/100);
                }
            }
        }
    }
 
    
    function updateCost() public {
        yayprice = total * ((yaycount+10)/(yaycount + naycount + 20));
        nayprice = total - yaycount;
    }
    
    function voteYay() public payable active{
    		
        if(msg.sender == tempAddress){
            completed = true;
            verdict = true;
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
			completed = true;
            verdict = false;
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
    
    
    constructor(address manager_init,string memory content_init) public {
        manager = manager_init;
        tempAddress = manager;
        content = content_init;
    	updateCost();
	}
    
    
}