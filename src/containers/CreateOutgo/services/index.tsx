import Axios from 'axios';
import CreateOutgoStore from '../store'
import history from '../../../routes/history';

export const createOutgo = (requestData: any) => {
    Axios
    .post(`${process.env.REACT_APP_API_URL}/spent`,
    requestData)
    .then(() => {
        CreateOutgoStore.cleanRequestData()
        history.push('/');
    })
    .catch((error) => {
        history.push('/error');
    });
}