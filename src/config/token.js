import Axios from './axios';

const tokenAuth = token => {
    if(token) {
        Axios.defaults.headers.common['x-token'] = token;
    } else {
        delete Axios.defaults.headers.common['x-token'];
    }
}

export default tokenAuth;