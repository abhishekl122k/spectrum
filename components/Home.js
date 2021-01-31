import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class Home extends Component {
    render() {
        return(
            <Button animated inverted color='orange'>
                <Button.Content visible>Inga Click Pannu paa</Button.Content>
                    <Button.Content hidden>
                        Arvinth Mutaa Paiya
                </Button.Content>
            </Button>
        );
    }
}

export default Home;