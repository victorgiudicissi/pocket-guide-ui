import Axios from 'axios';
import OutgoStore from '../store'
import history from '../../../routes/history';

export const findOutgoById = (outgoId: number) => {
    Axios
    .get(`${process.env.REACT_APP_API_URL}/spent/${outgoId}`)
    .then((response) => {
        console.log(response)
        OutgoStore.outgoData = response.data
    })
    .catch((error) => {
        history.push('/error');
    });
}