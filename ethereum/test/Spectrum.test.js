//OM NAMO NARAYANA

const Spectrum = artifacts.require("Spectrum");
const Post= artifacts.require("Post");

contract("Spectrum!", accounts=>{

    var instance;
    beforeEach(async ()=>{
        instance = await Spectrum.new("OM NAMO NARAYANA", "ARVINTH");
    });
        

    it("should create a spectrum instance", ()=>{
        ;
    });
    it("should call a new Post instance", async()=>{
        await instance.createPost.sendTransaction();
    });

    it("should display the deployed posts", async()=>{
        await instance.createPost.sendTransaction();
        var deployedPosts = await instance.getDeployedPosts.call();
        assert(deployedPosts.length > 0);
    });

    it("should use create instance using deployed contracts", async()=>{
        await instance.createPost.sendTransaction();
        var deployedPosts = await instance.getDeployedPosts.call();
        var instancePost = await Post.at(deployedPosts[0]);
    });
});

contract("Post!", accounts=>{
    var spectrumInstance, postInstance;
    beforeEach(async()=>{
        spectrumInstance = await Spectrum.deployed('OM NAMO NARAYANA', 'ARVINTH');
        await spectrumInstance.createPost.sendTransaction();
        let deployedContracts = await spectrumInstance.getDeployedPosts.call();
        postInstance = await Post.at(deployedContracts[0]);
    });

    it("should return post details", async()=>{
        console.log(await postInstance.getSummary.call());
    });
    it("should complete post by giving true verdict", async()=>{
       await postInstance.voteYay.sendTransaction();
       let getSummary = await postInstance.getSummary.call();
       assert(getSummary[7]==true && getSummary[8]==true); 
    });
});
