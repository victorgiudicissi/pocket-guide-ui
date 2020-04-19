import React from 'react';
import { Segment, Header } from 'semantic-ui-react'
import PocketGuideMenu from '../../components/Menu';

interface Props {
}

export default class OutgoError extends React.Component<Props> {

  render() {
    return (
      <PocketGuideMenu>
        <Segment
          basic
          padded>
            <Header size="large" textAlign="left">
                        Ooopss... Ocorreu algo de errado
                        <Header size="medium" subheader={"Tente novamente em instantes."} />
                    </Header>
        </Segment>
      </PocketGuideMenu>
    );
  }
}
