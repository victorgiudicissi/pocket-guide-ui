import { observable, action } from "mobx";

class CreateOutgoStore {
    @observable requestData: any = {};

    options = [
        { key: 'ALIMENTO', text: 'Alimento', value: 'ALIMENTO' },
        { key: 'LAZER', text: 'Lazer', value: 'LAZER' },
        { key: 'TRANSPORTE', text: 'Transporte', value: 'TRANSPORTE' },
        { key: 'CASA', text: 'Casa', value: 'CASA' },
        { key: 'OUTROS', text: 'Outros', value: 'OUTROS' },
    ]

    @action
    onChangeHandler = (_: any, data: any) => {
        this.requestData[data.id] = data.value;
    }

    @action
    cleanRequestData = () => {
        this.requestData = {}
    }
}

export default new CreateOutgoStore();