import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
//import factory from '../../ethereum/factory';
import Factory from '../../ethereum/factory';
import Layout from '../../components/Layout';
import { Link } from '../../routes';



class PostIndex extends Component {

  static async getInitialProps() {
    //const campaigns = await factory.methods.getDeployedPosts().call();
    const spectrum = await Factory.methods.getDeployedPosts().call();

    console.log('hello');
    console.log(spectrum);

    //This is what contract data should look like:
    const posts = [{
        address: '0x123',
        name: 'ElonMusk',
        content: 'Bitcoin price to cross $50,000 on Feb 26th.',
        yayprice: '0.01',
        nayprice: '0.01',
        pool: '26,234,231.12',
        completed: false,
        verdict: true
    },
    {   
        address: '0x456',
        name: 'Arvinth',
        content: 'Projected winner of 2021 elections: BJP',
        yayprice: '0.005',
        nayprice: '0.015',
        pool: '24,223.43',
        completed: true,
        verdict: true
    },
    {   
        address: '0x789',
        name: 'Abhishek',
        content: 'Projected winner of 2021 elections: INC',
        yayprice: '0.005',
        nayprice: '0.015',
        pool: '24,223,213.43',
        completed: true,
        verdict: false
    }
    ];
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
      if(true){
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
      }
      else{
          return ({ });
      }
        
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