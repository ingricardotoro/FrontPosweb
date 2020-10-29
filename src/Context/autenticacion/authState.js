import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import Axios from '../../config/axios';

import { LOGIN_EXITOSO, LOGIN_ERROR, CERRAR_SESION } from '../../types';

const AuthState = props =>{
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuarioAuth: null,
        role:null,
        mensaje: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const iniciarSesion = async data =>{
        try {
            const response = await Axios.post('auth/login', data);
            console.log(response.data);

            if(response.data.ok===false){
                const alerta = {
                    msg: response.data.errors,
                    tipoAlerta: 'alert-danger alert-dismissible fade show'
                }
                
                dispatch({
                    type: LOGIN_ERROR,
                    payload: alerta
                })
            }

            if(response.data.userDB){
                dispatch({
                    type: LOGIN_EXITOSO,
                    payload: response.data
                });
            }

        } catch (error) {
            console.error('error login ',error);

            const alerta = {
                msg: error.response.data.errors,
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
                usuarioAuth: state.usuarioAuth,
                role: state.role,
                cargando: state.cargando,
                mensaje: state.mensaje,
                iniciarSesion,
                cerrarSesion
            }}
        >
            {props.children}

        </AuthContext.Provider>
    )
}

export default AuthState;
