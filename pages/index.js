import React, { Component } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';

class Index extends Component {
  render() {
    return(
      <Layout>
        <Home/>
      </Layout>
    );
  }
}

export default Index;