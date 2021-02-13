import React, { Component } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Head from 'next/head';
import Router from '../routes';
import { Link } from '../routes';
import Map from '../components/Map';
import web3 from '../ethereum/web3';
import { Button, Segment, Grid, Header, Icon, Divider, Search, Image, Form, Message } from 'semantic-ui-react'

class Index extends Component {

  state = { 
    name: '',
    loading: false,
    errorMessage: '',
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      
      // Lots of authentication code code to be entered here

      Router.pushRoute('/home/feed');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return(
      <body style={{ backgroundColor: 'black', height: 'window.height', width: '100%' }}>
      <Segment inverted >
        <Head>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
        </Head>
        <Grid columns='equal'>
        <Grid.Row>
        <Grid.Column>
          <Segment inverted></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted><h1 style={{ fontFamily: 'lucida console', fontSize: '50px', textAlign:'center' }}>SPECTRUM</h1></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment inverted>
          <Link route="/home/feed">
            <a className="item">
              <Button inverted color='red' floated="right">
              Log in
            </Button>
            </a>
          </Link>  
          
          </Segment>
        </Grid.Column>
      </Grid.Row>
      </Grid>
        
      <Segment placeholder inverted>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical inverted>--)</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon inverted>
                <h2 style={{ fontFamily: 'lucida console', fontSize: '40px', textAlign:'center' }}>Where the world <br/>gets its News</h2>  
                <p style={{ fontFamily: 'lucida console', color: 'gray',textAlign:'justify'}}>These issues of privacy, freedom, and lack of control at the user's end gave rise to a new form of social networks, i.e., Decentralized Social Networks, - A network controlled and managed over distributed systems rather than one single entity. This concept gave rise to new social networks that are now very popular and have a vast user base.</p>
                <br/>
              <Image src='https://www.ibm.com/blogs/blockchain/wp-content/uploads/2019/09/Retina_Display-636831316.jpg' size='large' rounded />
                
              </Header>

            </Grid.Column>

            <Grid.Column>
              <Header icon inverted>
                <h2 style={{ fontFamily: 'lucida console', fontSize: '40px', textAlign:'center' }}>Join The Community!</h2>
                
               
                <Map/><br/>
              <p style={{ fontFamily: 'lucida console', color: 'gray',textAlign:'justify'}}>A portal for excellence in news, completely token driven. This place could be considered a stock market for news, where average people and large news organizations make efforts to verify the news for which they get paid. </p>
                
              </Header>

              <Grid columns='equal'>
              <Grid.Row>
              <Grid.Column>
                <Segment inverted></Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment inverted>
                <Form onSubmit={this.onSubmit} error floated='right' error={!!this.state.errorMessage}>
                <Form.Group>
                  <Form.Input
                    placeholder='  Your Name'
                    name='name'
                    value={this.state.name}
                    onChange={ event => this.setState({ name: event.target.value })}
                  />
                  <Message error header="Oops!" content={this.state.errorMessage} />
                  <Form.Button content='Sign up' inverted color='red' floated="right" loading={this.state.loading}/>
                </Form.Group>
              </Form>

                  
                </Segment>
              </Grid.Column>
            </Grid.Row>
            </Grid>
              

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