import { observable } from "mobx";

class OutgoingListStore {
    @observable outgoingData: any = {};
}

export default new OutgoingListStore();