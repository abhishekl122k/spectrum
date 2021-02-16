import React from 'react';

import { Button, Segment, Grid, Header, Icon, Divider, Search, Image, Form, Message } from 'semantic-ui-react'
import Home from '../../components/Home';
import Head from 'next/head';

// const LoadingScreen = () => (
// <View style={styles.container}>
//     <Image
//         style={styles.logo}
//         source={logo}
//     />
// </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 300,
//     height: 400,
//   },
// });

export class signup extends React.Component {
	static propTypes = {
	};

	constructor(props) {
		super(props);
	}

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
          							<Form>
									    <Form.Field>
									      <label inverted>First Name</label>
									      <input placeholder='First Name' />
									    </Form.Field>
									    <Form.Field>
									      <label>Last Name</label>
									      <input placeholder='Last Name' />
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
