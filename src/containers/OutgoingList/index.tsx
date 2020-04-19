import React from 'react';
import { Segment, Grid, Header, Icon } from 'semantic-ui-react'
import PocketGuideMenu from '../../components/Menu';
import { observer, inject } from 'mobx-react';
import {
  findAll
} from './services'
import OutgoItem from './components';

interface Props {
  OutgoingListStore: any;
}

@inject("OutgoingListStore")
@observer
export default class OutgoingList extends React.Component<Props> {
  componentWillMount() {
    findAll();
  }

  render() {
    const {
      outgoingData
    } = this.props.OutgoingListStore;

    return (
      <PocketGuideMenu>
        <Header as='h2'>
          <Icon name='clipboard list' />
          <Header.Content>Listagem de gastos</Header.Content>
        </Header>
        <Segment
          basic
          padded
          >
          <Grid divided>
            <Grid.Row>
              <Grid.Column>
                <OutgoItem {...outgoingData[0]} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </PocketGuideMenu>
    );
  }
}
