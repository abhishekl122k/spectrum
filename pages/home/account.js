import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Router from '../../routes';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

class X extends Component {
    render() {
        return (
            <Layout>
            <center>
            <Card>
            <Card.Content>
                
                <Card.Header>Arvinth<Icon name='check circle'/></Card.Header>
                <Card.Meta>Verified User</Card.Meta>
                <Card.Description>
                User Account ID <strong>0x3F9A811230Ad796D3D2Cf8604</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button disabled basic color='green'>
                    10,213 Subscribers
                </Button>
                <Button disabled basic color='red'>
                    124 Subscribed
                </Button>
                </div>
            </Card.Content>
            </Card>
            </center>
            </Layout>
        );
    }
}

export default X;