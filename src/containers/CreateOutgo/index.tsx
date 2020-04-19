import React from 'react';
import { inject, observer } from 'mobx-react';
import PocketGuideMenu from '../../components/Menu';
import { Form, Button, Segment, Header, Icon } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import {
    createOutgo
} from './services';

interface Props {
    CreateOutgoStore: any
}

@inject('CreateOutgoStore')
@observer
export default class CreateOutgo extends React.Component<Props> {
    render() {
        const {
            onChangeHandler,
            requestData,
            options
        } = this.props.CreateOutgoStore;

        return (
            <PocketGuideMenu>
                <Header as='h2'>
                    <Icon name='save' />
                    <Header.Content>Criar gasto</Header.Content>
                </Header>
                <Segment>
                    <Form
                        onSubmit={() => {
                            createOutgo(requestData)
                        }}
                    >
                        <Form.Field>
                            <Form.Input
                                id="description"
                                label="Descrição"
                                placeholder="Descrição"
                                onChange={onChangeHandler}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                id="enterpriseName"
                                label="Lugar"
                                placeholder="Lugar"
                                onChange={onChangeHandler}
                            ></Form.Input>
                        </Form.Field>
                        <Form.Field>
                            <Form.Input
                                id="value"
                                label="Valor"
                                placeholder="0.00"
                                type='number'
                                onChange={onChangeHandler}
                            ></Form.Input>
                        </Form.Field>
                        <Form.Group>
                            <Form.Field>
                                <SemanticDatepicker
                                    id="date"
                                    label="Data"
                                    onChange={onChangeHandler}
                                ></SemanticDatepicker>
                            </Form.Field>
                            <Form.Select
                                id="tag"
                                label='Tag'
                                options={options}
                                placeholder='Tag'
                                onChange={onChangeHandler}
                            />
                        </Form.Group>
                        <Button
                            color='green'
                            type='submit'
                            disabled={
                                !requestData.description ||
                                !requestData.enterpriseName ||
                                !requestData.value ||
                                !requestData.date ||
                                !requestData.tag
                            }
                        >Criar</Button>
                    </Form>
                </Segment>
            </PocketGuideMenu>
        )
    }
}