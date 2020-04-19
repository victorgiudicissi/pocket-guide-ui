import React from 'react';
import {
    Segment,
    Sidebar,
    Menu,
    Icon,
    Header,
} from 'semantic-ui-react';
import './style/index.css'
import { Link } from 'react-router-dom';

export default class PocketGuideMenu extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='push'
                    icon='labeled'
                    inverted
                    vertical
                    visible={true}
                    width='thin'
                >
                    <Menu.Item as={Link} to='/'>
                    <Icon name='clipboard list' />
                            Listar Gastos
                    </Menu.Item>
                    <Menu.Item as={Link} to='/create'>
                    <Icon name='pencil alternate' />
                        Criar Gasto
                    </Menu.Item>
                    <Header color="grey">Pocket Guide</Header>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment
                        basic
                        padded
                        style={{
                            overflow: 'auto',
                            maxHeight: '100%'
                          }}
                        >
                        {children}
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}