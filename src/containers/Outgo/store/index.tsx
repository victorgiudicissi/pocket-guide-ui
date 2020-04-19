import { observable } from "mobx";

class OutgoStore {
    @observable outgoData: any = {};
}

export default new OutgoStore();