import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import Factory from '../../ethereum/factory';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import Post from '../../ethereum/post';
import EthUsd from '../../ethereum/ethUsd';
import SpecTimeFactory from '../../ethereum/specTime';
import SpecChainFactory from '../../ethereum/SpecChain';



class PostIndex extends Component {

  static async getInitialProps() {
    const spectrum = await Factory.methods.getDeployedPosts().call();


    try{
      const SpecTime = await SpecTimeFactory.methods.getPrice().call();

    }catch(e){
      console.log("error while creating SpecTime", e);
    }

    try{
      const SpecChain = await SpecChainFactory.methods.getData("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new").call();

    }catch(e){
      console.log("error while creating SpecChain", e);
    }


    var posts = [];

    for(var i = 0; i <= spectrum.length; i=i+1){
      let post;
      if(i==spectrum.length){
        // await Post("0x1cfF6c42824f24cf458b14d3AAc83F9e5Bf5CEee").methods.updateThumbnail("https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new").call();
        post = await Post("0x1cfF6c42824f24cf458b14d3AAc83F9e5Bf5CEee").methods.getSummary().call();
      }else{
        post = await Post(spectrum[i]).methods.getSummary().call();
      }

      posts.push({
        address: post[0],
        name: post[1],
        content: post[2],
        yayprice: post[3]/1000000000000000000,
        nayprice: post[4]/1000000000000000000,
        pool: post[9]/1000000000000000000,
        yaycount: post[5],
        naycount: post[6],
        completed: post[7],
        verdict: post[8],
        thumbnail: post[9]
      });
      console.log('url', post[9]);
  }

    //dummy data to illustrate
    posts.push({
      address: '0x123',
      name: 'ElonMusk',
      content: 'Bitcoin price to cross $50,000 on March 26th.',
      yayprice: '0.012',
      nayprice: '0.008',
      pool: '26,234',
      completed: false,
      yaycount: 16235,
      naycount: 10111,
      verdict: false
    });

    posts.push({
        address: '0x123',
        name: 'Donald Trump',
        content: 'We won the election!',
        yayprice: '0.001',
        nayprice: '0.019',
        pool: '265,254',
        yaycount: 202122,
        naycount: 10211,
        completed: true,
        verdict: false
    });

    
    return { posts };
  }

  renderButton(completed, verdict, address) {
    if(completed==false){
        return (
                <Link route={`/home/predict/${address}`}>
                    <a><Button positive>$ Predict</Button></a>
                </Link>
        );
    }else{
        if(verdict==true){
            return (
                <Button  disabled color='green'><Icon  name='check circle' />Verified Yes</Button>
            );
        }else{
            return (
                <Button disabled color='red'><Icon  name='check circle' />Verified No</Button>
            );
        }
    }   
  }

  renderCampaigns() {
    const items = this.props.posts.map(post => {
      
    return {
        header: (
            <h3>
                @{post.name}
            </h3>
        ),
        description: (
            <strong>{post.content}</strong>
        ),
        extra: (
            <div>
            <div className='ui two buttons'>
            <Button size='mini' disabled basic color='green'>
                Yes: {post.yayprice} ETH
            </Button>
            <Button size='mini' disabled basic color='red'>
                No: {post.nayprice} ETH
            </Button>
            </div>
            <br/>
            <br/>
            {this.renderButton(post.completed, post.verdict, post.address)}
            <br/>
            <br/>
                <Button disabled size='mini'>Pool: {post.pool} ETH</Button>
                    
          </div>
        ),
            
      };
      
      
        
    });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3>News Market <Icon  name='newspaper' /></h3>

         
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default PostIndex;