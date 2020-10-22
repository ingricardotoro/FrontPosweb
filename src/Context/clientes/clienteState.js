import React, {useReducer} from 'react';

import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';

import {
    LISTAR_CLIENTES,
    AGREGAR_CLIENTE,
    VALIDAR_CLIENTE,
    ACTUAL_CLIENTE,
    ACTUALIZAR_CLIENTE,
    ELIMINAR_CLIENTE,
    BUSCAR_EMPLEADO,
    LIMPIAR_CLIENTE_SELECCIONADO
} from '../../types';

import Axios from '../../config/axios';

const ClienteState = props => {
    const initalState = {
        clientes: [],
        errorcliente: false,
        clienteseleccionado: null
    }

    const [state, dispatch] = useReducer(clienteReducer, initalState);

    const obtenerClientes = async () => {
        try {
            const response = await Axios.get('clients');
            //console.log('obteniendo empleado ',response);
            dispatch({
                type: LISTAR_CLIENTES,
                payload: response.data.clients
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    const agregarCliente = async cliente => {
        console.log(cliente)
        try {
            const response = await Axios.post('clients', cliente);
            console.log('guardando cliente ',response);
            
            dispatch({
                type: AGREGAR_CLIENTE,
                payload: cliente
            })
        } catch (error) {
            console.log(error);
        }
    }

    const actualizarCliente = async cliente => {
        console.log('cliente a actualizar ', cliente)
        try {
            const response = await Axios.put(`employees/update/${cliente._id}`, cliente);
            console.log(response);
            dispatch({
                type: ACTUALIZAR_CLIENTE,
                payload: response.data.clienteactualizado
            })
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarCliente = async cliente => {
        console.log('cliente a eliminar ', cliente)
        try {
            await Axios.delete(`employees/delete/${cliente._id}`);
            dispatch({
                type: ELIMINAR_CLIENTE,
                payload: cliente._id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const buscarCliente = async termino => {
        
        dispatch({
            type: BUSCAR_EMPLEADO,
            payload: termino
        })
    }

    const validarCliente = () =>{
        dispatch({
            type: VALIDAR_CLIENTE
        })
    }

    const guardarClienteActual = cliente => {
        dispatch({
            type: ACTUAL_CLIENTE,
            payload: cliente
        })
    }

    const limpiarClienteSeleccionado = () =>{
        dispatch({
            type: LIMPIAR_CLIENTE_SELECCIONADO
        })
    }

    return(
        <clienteContext.Provider
            value={{
                clientes: state.clientes,
                errorcliente: state.errorcliente,
                clienteseleccionado: state.clienteseleccionado,
                obtenerClientes,
                agregarCliente,
                actualizarCliente,
                eliminarCliente,
                buscarCliente,
                validarCliente,
                guardarClienteActual,
                limpiarClienteSeleccionado
            }}
        >
            {props.children}
        </clienteContext.Provider>
    )
}

export default ClienteState;