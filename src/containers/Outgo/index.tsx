import React from 'react';
import { inject, observer } from 'mobx-react';
import PocketGuideMenu from '../../components/Menu';
import {
    findOutgoById
} from './services';
import { Segment, Divider, Header, Icon } from 'semantic-ui-react';

interface Props {
    match: any
    OutgoStore: any
}

@inject("OutgoStore")
@observer
export default class Outgo extends React.Component<Props> {
    componentWillMount() {
        findOutgoById(this.props.match.params.outgoId);
    }

    render() {
        const {
            outgoData: {
                enterpriseName,
                description,
                date,
                value,
                tag
            }
        } = this.props.OutgoStore;

        return (
            <PocketGuideMenu>
                <Header as='h2'>
                    <Icon name='file text' />
                    <Header.Content>Detalhes de gasto</Header.Content>
                </Header>
                <Segment>
                    <Header size="large" textAlign="left">
                        #Tipo
                        <Header size="medium" subheader={tag} />
                    </Header>
                    <Header size="large" textAlign="left">
                        Lugar
                        <Header size="medium" subheader={enterpriseName} />
                    </Header>
                    <Header size="large" textAlign="left">
                        Descrição
                        <Header size="medium" subheader={description} />
                    </Header>
                    <Header size="large" textAlign="left">
                        Valor
                        <Header size="medium" subheader={value} />
                    </Header>
                    <Header size="large" textAlign="left">
                        Data
                        <Header size="medium" subheader={date} />
                    </Header>
                    <Divider hidden />
                </Segment>
            </PocketGuideMenu>
        )
    }
}