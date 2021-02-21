//OM NAMO NARAYANA
const Spectrum = artifacts.require("Spectrum");
const Post= artifacts.require("Post");

contract("Spectrum!", accounts=>{
    it("should create a spectrum instance", async()=>{
        instance = await Spectrum.deployed();
    });
    it("should create a new Post instance", async()=>{
        instance = await Spectrum.deployed();
        await instance.createPost.call();
        
    });
    it("returns content", async()=>{
        instance  = await Spectrum.deployed();
        let content = await instance.returnContent.call();
        console.log('content', content);
    });
    it("should display the deployed posts", async()=>{
        instance = await Spectrum.deployed();
        let contractAddress = await instance.createPost.call();
        let deployedPosts = await instance.getDeployedPosts.call();
        assert(contractAddress == deployedPosts);
    });
});