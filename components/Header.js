import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import { Link } from '../routes';

class Header extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
             <Menu stackable inverted>
                
                <Link route="/home/feed">
                <a>
                <Menu.Item
                name='SPECTRUM'
                />
                </a>
                </Link>
                
                <Link route="/">
                <a>
                <Menu.Item
                position='right'
                name='Sign out'
                active={activeItem === 'Logout'}
                onClick={this.handleItemClick}
                />
                </a>
                </Link>
                <Link route="/home/account">
                <a>
                <Menu.Item position='right' active={activeItem === 'Arvinth'}>
                <Icon name='user'/> Arvinth
                </Menu.Item>
                </a>
                </Link>
               
            </Menu>
           
        );
    }
}

export default Header;