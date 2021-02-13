import React from 'react';
import Header from './Header';
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

export default (props) => {
    return(
        <Container style={{ width: '80vw', margin: 'auto', marginTop: '10px' }}>
            <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/1.11.8/semantic.min.css"/>
            </Head>
            <Header style={{position: 'fixed'}}/><br/>
            {props.children}
        </Container>
    );
};