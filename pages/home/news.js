import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
//import factory from '../../ethereum/factory';
import Layout from '../../components/Layout';
import { Link } from '../../routes';

class PostIndex extends Component {
  static async getInitialProps() {
    //const campaigns = await factory.methods.getDeployedPosts().call();
    
    //This is what contract data should look like:
    const posts = [{
        address: '0x123',
        name: 'ElonMusk',
        content: 'Bitcoin price to cross $50,000 on Feb 26th.',
        yayprice: '0.01',
        nayprice: '0.01',
        pool: '26,234,231.12',
        completed: true,
        verdict: true
    },
    {   
        address: '0x456',
        name: 'Arvinth',
        content: 'Projected winner of TN elections: DMK',
        yayprice: '0.005',
        nayprice: '0.015',
        pool: '24,223.43',
        completed: false,
        verdict: true
    },
    {   
        address: '0x789',
        name: 'Abhishek',
        content: 'Projected winner of TN elections: BJP',
        yayprice: '0.005',
        nayprice: '0.015',
        pool: '24,223,213.43',
        completed: true,
        verdict: false
    }
    ];
    return { posts };
  }

  renderButton(verdict) {
    if(verdict==true){
        return (
            <Button disabled color='green'><Icon  name='check circle' />Verified Yes</Button>
        );
    }else{
        return (
            <Button disabled color='red'><Icon  name='check circle' />Verified No</Button>
        );
    }
  }

  renderCampaigns() {
    const items = this.props.posts.map(post => {
      if(post.completed){
        return {
            header: (
                <h4>
                    @{post.name}
                </h4>
            ),
            description: (
              <h3><strong>{post.content}</strong></h3>
             ),
            extra: (
                <div>
                <Button.Group>
                    <Button disabled >Pool: {post.pool} ETH</Button>
                    <Button.Or text='  ' />
                    
                        
                        {this.renderButton(post.verdict)}
                        
                    
                </Button.Group>
                            
              </div>
            ),
            fluid: true,    
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
          <h3>Verified News<Icon  name='check circle' /></h3>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default PostIndex;