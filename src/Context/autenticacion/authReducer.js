import {LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION} from '../../types';

export default (state, action) =>{
    switch(action.type){
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return{
                ...state,
                autenticado: true,
                mensaje: action.payload.msj,
                usuarioAuth: action.payload.userDB,
                role: action.payload.userDB.role,
                cargando: false
            }
            
        case LOGIN_ERROR:
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                usuarioAuth: null,
                mensaje: action.payload,
                cargando: false
            }
        default:
            return state;
    }
}