import Axios from 'axios';
import OutgoingListStore from '../store';
import history from '../../../routes/history';

export const findAll = () => {
    Axios
    .get(`${process.env.REACT_APP_API_URL}/spent`)
    .then((response) => {
        OutgoingListStore.outgoingData = response.data;
    })
    .catch((error) => {
        history.push('/error');
    });
}

export const deleteById = (outgoId: number) => {
    Axios
    .delete(`${process.env.REACT_APP_API_URL}/spent/${outgoId}`)
    .then(() => {
        findAll()
    })
    .catch((error) => {
        history.push('/error');
    });
}

export const showDetails = (outgoId: number) => {
    history.push(`/show/${outgoId}`);
}