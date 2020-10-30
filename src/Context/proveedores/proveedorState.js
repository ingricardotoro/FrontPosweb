import React, {useReducer} from 'react';

import proveedorContext from './proveedorContext';
import proveedorReducer from './proveedorReducer';

import {
    LISTAR_PROVEEDORES,
    AGREGAR_PROVEEDOR,
    VALIDAR_PROVEEDOR,
    ACTUAL_PROVEEDOR,
    ACTUALIZAR_PROVEEDOR,
    LIMPIAR_PROVEEDOR_SELECCIONADO,
    ELIMINAR_PROVEEDOR
} from '../../types';

import Axios from '../../config/axios';

const ProveedorState = props => {
    const initalState = {
        proveedores: [],
        errorproveedor: false,
        proveedorseleccionado: null
    }

    const [state, dispatch] = useReducer(proveedorReducer, initalState);

    const obtenerProveedores = async () => {
        try {
            const response = await Axios.get('suppliers');
            //console.log('obteniendo proveedores ',response);
            
            dispatch({
                type: LISTAR_PROVEEDORES,
                payload: response.data.suppliers
            })
            
            
        } catch (error) {
            console.log(error);
        }
    }
    
    const agregarProveedor = async proveedor => {
        //console.log('proveedor form ', proveedor)
        try {
            const response = await Axios.post('suppliers', proveedor);
            //console.log('guardando proveedor ',response);
            if(response.ok){
                dispatch({
                    type: AGREGAR_PROVEEDOR,
                    payload: proveedor
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const actualizarProveedor = async proveedor => {
        //console.log('proveedor a actualizar ', proveedor)
        try {
            const response = await Axios.put(`suppliers/update/${proveedor._id}`, proveedor);
            //console.log(response);
            if(response.ok){
                dispatch({
                    type: ACTUALIZAR_PROVEEDOR,
                    payload: response.data.proveedorActualizado
                })
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarProveedor = async proveedor => {
        //console.log('proveedor a eliminar ', proveedor)
        try {
            await Axios.delete(`suppliers/delete/${proveedor._id}`);
            dispatch({
                type: ELIMINAR_PROVEEDOR,
                payload: proveedor._id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const validarProveedor = () =>{
        dispatch({
            type: VALIDAR_PROVEEDOR
        })
    }

    const guardarProveedorActual = proveedor => {
        dispatch({
            type: ACTUAL_PROVEEDOR,
            payload: proveedor
        })
    }

    const limpiarProveedorSeleccionado = () =>{
        dispatch({
            type: LIMPIAR_PROVEEDOR_SELECCIONADO
        })
    }

    return(
        <proveedorContext.Provider
            value={{
                proveedores: state.proveedores,
                errorproveedor: state.errorproveedor,
                proveedorseleccionado: state.proveedorseleccionado,
                obtenerProveedores,
                agregarProveedor,
                actualizarProveedor,
                eliminarProveedor,
                validarProveedor,
                guardarProveedorActual,
                limpiarProveedorSeleccionado
            }}
        >
            {props.children}
        </proveedorContext.Provider>
    )
}

export default ProveedorState;