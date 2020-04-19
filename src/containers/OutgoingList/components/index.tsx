import React from 'react';
import { Table, Button, ButtonGroup, ButtonOr } from 'semantic-ui-react';
import * as _ from 'lodash';
import {
    deleteById,
    showDetails
} from '../services'

interface Props {
    id: any
    enterpriseName: any
    description: any
    date: any
    value: any
    tag: any
}

export default class OutgoItem extends React.Component<Props> {
    render() {
        return (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Descrição</Table.HeaderCell>
                            <Table.HeaderCell>Lugar</Table.HeaderCell>
                            <Table.HeaderCell>Tipo</Table.HeaderCell>
                            <Table.HeaderCell width="1" />
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {_.map(
                            this.props,
                            (outgo) => {
                                return <Table.Row
                                    key={outgo.id}
                                >
                                    <Table.Cell>{outgo.description}</Table.Cell>
                                    <Table.Cell>{outgo.enterpriseName}</Table.Cell>
                                    <Table.Cell>{outgo.tag}</Table.Cell>
                                    <Table.Cell>
                                        <ButtonGroup>
                                        <Button
                                            icon="content"
                                            onClick={() => { showDetails(outgo.id) }}
                                        >
                                        </Button>
                                        <ButtonOr></ButtonOr>
                                        <Button
                                            color='red'
                                            icon="delete"
                                            onClick={() => { deleteById(outgo.id) }}
                                        >
                                        </Button>
                                        </ButtonGroup>
                                    </Table.Cell>
                                </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>
        );
    }
}