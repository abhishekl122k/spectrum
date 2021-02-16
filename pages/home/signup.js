import React from 'react';

import { Button, Segment, Grid, Header, Icon, Divider, Search, Image, Form, Message } from 'semantic-ui-react'
import Home from '../../components/Home';
import Head from 'next/head';
import web3 from "../../ethereum/web3";


export class signup extends React.Component {
	static propTypes = {
	};

	state={
		item:{
			firstname: '',
			secondname:'',
			errorMessage:'',
			loading:false
		}
	}

	constructor(props) {
		super(props);
		console.log('props:', props);
	}

	onChange = async event => {
	  	event.preventDefault();
	  	let name = event.target.name
	  	let value = event.target.value;

	  	await this.setState(prevState => ({

	    item: { ...prevState.item, [name]: value }
	  }))

	}

  onSubmit = async event => {
    event.preventDefault();
    console.log('submitting');
    this.setState({loading:true, errorMessage:''});
    try{
    	const accounts = await web3.eth.getAccounts();
    	console.log('accounts', accounts);
    }catch (err) {
    	console.log('error:',err);
    	this.setState({ errorMessage: err.message });
    }
    this.setState({loading:false});
  };

	render() {
		return (
			    <Segment >
			        <Head>
			              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
			        </Head>
			        <Grid columns='equal'>
				        <Grid.Row>
					        <Grid.Column >
          						<Segment ><h1 style={{ fontFamily: 'lucida console', fontSize: '50px', textAlign:'center' }}>SPECTRUM</h1></Segment>
					        </Grid.Column>
				        </Grid.Row>
				        <Grid.Row>
					        <Grid.Column verticalAlign='middle'>
          						<Segment ><Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular /></Segment>
					        </Grid.Column>
				        </Grid.Row>
				        <Grid.Row>
					        <Grid.Column verticalAlign='middle'>
          						<Segment >
          							<Form onSubmit={this.onSubmit}>
									    <Form.Field>
									      <label>First Name</label>
									      <input 
									      name = 'firstname'
									      value = {this.state.item.firstname} 
									      onChange={this.onChange} 
									      placeholder='First Name' 
									      />
									    </Form.Field>
									    <Form.Field>
									      <label>Last Name</label>
									      <input 
									      name = 'lastname'
									      value = {this.state.item.lastname} 
									      onChange={this.onChange} 
									      placeholder='Last Name' 
									      />
									    </Form.Field>
									   
									    <Button type='submit'>Submit</Button>
									  </Form>
          						</Segment>
					        </Grid.Column>
				        </Grid.Row>
			        </Grid>
			    </Segment>
		);
	}
}

export default signup;
