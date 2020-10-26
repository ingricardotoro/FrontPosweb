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
        mensaje: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const iniciarSesion = async data =>{
        try {
            const response = await Axios.post('auth/login', data);
            console.log(response);

            if(response.status===400){
                alert(response.errors)
                const alerta = {
                    msg: response.data.errors.password.msg,
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
                usuarioAuth: state.usuarioAuth,
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
