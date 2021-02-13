import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Router from '../../routes';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import { Tab, Icon, Button, Card, Popup, Header, Form, Segment, Input, Message } from 'semantic-ui-react';



class Feed extends Component {
    render() {
        const panes = [
            {
              menuItem: 'Post',
              render: () => <Tab.Pane attached={false} style={{height: 'window.height', width: '100%' }}>
                    <center>
                    <Card 
                        style = {{ textAlign:'left' , width: '500px'}}
                        image='https://images.cnbctv18.com/wp-content/uploads/2019/10/AP19294524202946-768x512.jpg'
                        header={<a>@NASDAQ<Icon name='check circle'/></a>}
                        description='ExxonMobil stock surges by 12% despite the severe backlash faced by them from the economy regaerding the way they make their money.'
                        extra={
                            <div>
                            <Button icon='heart' />
                            <Popup
                                content={
                                    <Segment inverted>
                                        <Form inverted error>
                                        
                                        <Header inverted as='h2' icon textAlign='center'>
                                        <Icon name='check circle outline' circular />
                                        <Header.Content>Verify this post</Header.Content>
                                        </Header>
                                        <br/>
                                        <Form.Group widths='equal'>
                                        <Input
                                            label="ETH"
                                            labelPosition='right'                                           
                                        />

                                            
                                        </Form.Group>
                                        <br/>
                                        <Button loading={false} size='mini' color='green' type='submit'>Verify True</Button>
                                        <Button loading={false} size='mini' color='red' type='submit'>Verify True</Button>
                                        <br/><br/>  
                                        <Button loading={false} size='mini' color='grey' type='submit'>I would like to know if it's true</Button>
                                        </Form>
                                    </Segment>
                                }
                                on='click'
                                positionFixed
                                trigger={
                                    <Button size='small' icon labelPosition='left' positive  >
                                    <Icon name='dollar sign' />
                                    
                                    Verify
                                    </Button>
                                    }
                            />
                                
                            <Popup trigger={<Button>Show Approval Rating</Button>} flowing hoverable>
                           
                            <Button color='green'>
                            <Icon name='check circle outline' /> 10,201,443
                            </Button>
                           
                            <Button color='youtube'>
                            <Icon name='x' /> 32,298
                            </Button> 
                            <Button color='twitter'>
                            <Icon name='question' /> 12,324,123
                            </Button>                
                            </Popup>   
                            <Message color='black'>Verified by CNN, MSNBC</Message>
                            </div>
                        }
                    />

                    <Card
                    style = {{ textAlign:'left' , width: '500px'}}
                    >
                    <Card.Content>
                    <Card.Header>Daniel</Card.Header>
                    <Card.Meta>Joined in 2016</Card.Meta>
                    <Card.Description>
                        Daniel is a comedian living in Nashville.
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        10 Friends
                    </a>
                    </Card.Content>
                </Card>

                    </center>
              </Tab.Pane>,
            }
          ];
        
        
        return (
            <Layout style={{position: 'fixed'}}>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Layout>
        );
    }
}

export default Feed;

