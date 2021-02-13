import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Router from '../../routes';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import { Button, Card, Image } from 'semantic-ui-react';


class X extends Component {
    render() {
        return (
            <Layout>
            <Card>
            <Card.Content>
                <Image
                floated='right'
                size='mini'
                src='/images/avatar/large/molly.png'
                />
                <Card.Header>Molly Thomas</Card.Header>
                <Card.Meta>New User</Card.Meta>
                <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                <Button basic color='green'>
                    Approve
                </Button>
                <Button basic color='red'>
                    Decline
                </Button>
                </div>
            </Card.Content>
            </Card>
            </Layout>
        );
    }
}

export default X;