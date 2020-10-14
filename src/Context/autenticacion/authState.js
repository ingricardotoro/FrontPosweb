import React, { userReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import Axios from '../../config/axios';

import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const iniciarSesion = async data =>{
        try {
            const response = await Axios.post('auth/login', data);
            console.log(response);

            dispatch({
                type: LOGIN_EXITOSO,
                payload: response
            });

        } catch (error) {
            console.error(error);

            const alerta = {
                msg: error,
                tipoAlerta: 'alert-danger alert-dismissible fade show'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }

    const cerrarSesion = () =>{
        dispatch({
            type: CERRAR_SESION
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                cargando: state.cargando,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.childen}

        </AuthContext.Provider>
    )
}

export default AuthState;
