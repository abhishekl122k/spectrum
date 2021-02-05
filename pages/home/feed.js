import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'
import Layout from '../../components/Layout';

class Posts extends Component{
    render(){
        const extra = (
            <a>
              <Icon name='user' />
              16 Friends
            </a>
          )

        return(
            <Layout>
            <Card
                image='https://spider.nitt.edu/images/Members/Arvinth%20Saravanan.jpg'
                header='Immortal Arvinth'
                meta='Friend'
                description='I am sexy and I know it xD.'
                extra={extra}
            />
            </Layout>
        );
    }
}

export default Posts;