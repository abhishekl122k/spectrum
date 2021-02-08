import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Router from '../../routes';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import { Tab, Icon, Button, Card, Image } from 'semantic-ui-react';



class Feed extends Component {
    render() {
        const panes = [
            {
              menuItem: 'Feed',
              render: () => <Tab.Pane attached={false}>
                    <center>
                    <Card
                        image='https://c.ndtvimg.com/2021-02/0msbotuo_joe-root-test-double-century-bcci_625x300_06_February_21.jpg?q=60'
                        header={<a>@ECB<Icon name='check circle'/></a>}
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        extra={<a><Icon name='user' />16 Friends</a>}
                    />
                    <Card
                        image='https://c.ndtvimg.com/2021-02/0msbotuo_joe-root-test-double-century-bcci_625x300_06_February_21.jpg?q=60'
                        header={<a>@ECB<Icon name='check circle'/></a>}
                        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                        extra={<a><Icon name='user' />16 Friends</a>}
                    />


                    <Card>
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
            },
            {
              menuItem: 'Verified News',
              render: () => <Tab.Pane attached={false}>
              <Button attached='top'>Top</Button>

              </Tab.Pane>,
            },
          ];
        
        
        return (
            <Layout>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Layout>
        );
    }
}

export default Feed;