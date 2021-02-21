import React, { Component } from 'react';

import Head from 'next/head';
import {Router} from '../routes';
import { Link } from '../routes';
import Map from '../components/Map';
import web3 from '../ethereum/web3';
import { Button, Segment, Grid, Header, Divider, Image } from 'semantic-ui-react';

class Index extends Component {

  state = { 
    name: '',
    loading: false,
    errorMessage: '',
  };

  onSub = async event => {
    event.preventDefault();
    
    
    try{
      Router.pushRoute('/home/signup');
    }catch(e){
      console.log(e.toString());
    }
    
  };

  render() {
    return(
      <body style={{ backgroundColor: 'white', height: 'window.height', width: '100%' }}>
      <Segment>
        <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
        </Head>
        <Grid columns='equal'>
        <Grid.Row>
        <Grid.Column>
          
        </Grid.Column>
        <Grid.Column>
          <h1 style={{ fontFamily: 'lucida console', fontSize: '50px', textAlign:'center' }}>SPECTRUM</h1>
        </Grid.Column>
        <Grid.Column>
         
          <Link route="/home/feed">
            <a className="item">
              <Button  color='red' floated="right">
              Get started!
            </Button>
            </a>
          </Link>  
          
         
        </Grid.Column>
      </Grid.Row>
      </Grid>
        
      <Segment placeholder >
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical >--)</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon >
                <h2 style={{ fontFamily: 'lucida console', fontSize: '40px', textAlign:'center' }}>Where the world <br/>gets its News</h2>  
                <p style={{ fontFamily: 'lucida console', color: 'gray',textAlign:'justify'}}>These issues of privacy, freedom, and lack of control at the user's end gave rise to a new form of social networks, i.e., Decentralized Social Networks, - A network controlled and managed over distributed systems rather than one single entity. This concept gave rise to new social networks that are now very popular and have a vast user base.</p>
                <br/>
              <Image src='https://www.ibm.com/blogs/blockchain/wp-content/uploads/2019/09/Retina_Display-636831316.jpg' size='large' rounded />
                
              </Header>

            </Grid.Column>

            <Grid.Column>
              <Header icon >
                <h2 style={{ fontFamily: 'lucida console', fontSize: '40px', textAlign:'center' }}>Join The Community!</h2>
                
               
                <Map/><br/>
              <p style={{ fontFamily: 'lucida console', color: 'gray',textAlign:'justify'}}>A completely token driven portal, where the right information and the promotionof the right information is rewarded. This place could be considered a stock market for news, where average people and independent sources make efforts to verify the news for which they get rewarded. </p>
                
              </Header>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      
      </Segment>
      </body>
    );
  }
}

export default Index;