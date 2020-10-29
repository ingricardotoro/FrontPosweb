import React, {useReducer} from 'react';

import usuarioContext from './usuarioContext';
import usuarioReducer from './usuarioReducer';

import {
    LISTAR_USUARIOS,
    SELECT_EMPLEADOS,
    AGREGAR_USUARIO,
    VALIDAR_USUARIO,
    ACTUAL_USUARIO,
    ELIMINAR_USUARIO,
    LIMPIAR_USUARIO_SELECCIONADO
} from '../../types';

import Axios from '../../config/axios';
import tokenAuth from '../../config/token';

const UsuarioState = props => {
    const initalState = {
        usuarios: [],
        errorusuario: false,
        usuarioseleccionado: null,
        empleados: []
    }

    const [state, dispatch] = useReducer(usuarioReducer, initalState);

    const obtenerEmpleados = async () => {
        try {
            const response = await Axios.get('employees');
            console.log('obteniendo empleados');
            dispatch({
                type: SELECT_EMPLEADOS,
                payload: response.data.employees
            })
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerUsuarios = async () => {
        try {
            const token = localStorage.getItem('token');
            if(token){
                tokenAuth(token);
            }

            const response = await Axios.get('users');
            console.log('obteniendo usuarios ',response);
            dispatch({
                type: LISTAR_USUARIOS,
                payload: response.data.users
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    const agregarUsuario = async usuario => {
        console.log('usuario form ', usuario)
        try {
            const response = await Axios.post('users', usuario);
            console.log('guardando usuario ',response);
            
            dispatch({
                type: AGREGAR_USUARIO,
                payload: usuario
            })
        } catch (error) {
            
            console.log(error);
        }
    }

    
    const eliminarUsuario = async usuario => {
        console.log('usuario a eliminar ', usuario)
        try {
            await Axios.delete(`users/delete/${usuario._id}`);
            dispatch({
                type: ELIMINAR_USUARIO,
                payload: usuario._id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const validarUsuario = () =>{
        dispatch({
            type: VALIDAR_USUARIO
        })
    }

    const guardarUsuarioActual = usuario => {
        dispatch({
            type: ACTUAL_USUARIO,
            payload: usuario
        })
    }

    const limpiarUsuarioSeleccionado = () =>{
        dispatch({
            type: LIMPIAR_USUARIO_SELECCIONADO
        })
    }

    return(
        <usuarioContext.Provider
            value={{
                usuarios: state.usuarios,
                empleados: state.empleados,
                errorusuario: state.errorusuario,
                usuarioseleccionado: state.usuarioseleccionado,
                mensaje: state.mensaje,
                obtenerUsuarios,
                obtenerEmpleados,
                agregarUsuario,
                eliminarUsuario,
                validarUsuario,
                guardarUsuarioActual,
                limpiarUsuarioSeleccionado
            }}
        >
            {props.children}
        </usuarioContext.Provider>
    )
}

export default UsuarioState;