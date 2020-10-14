import {LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION} from '../../types';

export default (state, action) =>{
    switch(action.type){
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
            
        case LOGIN_ERROR:
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                usuario: null,
                mensaje: action.payload,
                cargando: false
            }
        default:
            return state;
    }
}