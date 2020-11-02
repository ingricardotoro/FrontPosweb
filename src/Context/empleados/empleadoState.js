import React, {useReducer} from 'react';

import empleadoContext from './empleadoContext';
import empleadoReducer from './empleadoReducer';

import {
    LISTAR_EMPLEADOS,
    AGREGAR_EMPLEADO,
    VALIDAR_EMPLEADO,
    ACTUAL_EMPLEADO,
    ACTUALIZAR_EMPLEADO,
    ELIMINAR_EMPLEADO,
    LIMPIAR_EMPLEADO_SELECCIONADO
} from '../../types';

import Axios from '../../config/axios';

const EmpleadoState = props => {
    const initalState = {
        empleados: [],
        errorempleado: false,
        empleadoseleccionado: null
    }

    const [state, dispatch] = useReducer(empleadoReducer, initalState);

    const obtenerEmpleados = async () => {
        try {
            const response = await Axios.get('employees');
            //console.log('obteniendo empleado ',response);
            dispatch({
                type: LISTAR_EMPLEADOS,
                payload: response.data.employees
            })
            

        } catch (error) {
            console.log(error);
            
        }
    }
    
    const agregarEmpleado = async empleado => {
        //console.log(empleado)
        try {
            const response = await Axios.post('employees', empleado);
            //console.log('guardando empleado ',response);
            if(response.ok){
                dispatch({
                    type: AGREGAR_EMPLEADO,
                    payload: empleado
                })
            }
            
        } catch (error) {
            console.log(error);
            dispatch({
                type: VALIDAR_EMPLEADO
            })
        }
    }

    const actualizarEmpleado = async empleado => {
        //console.log('empleado a actualizar ', empleado)
        try {
            const response = await Axios.put(`employees/update/${empleado._id}`, empleado);
            //console.log(response);
            if(response.ok){
                dispatch({
                    type: ACTUALIZAR_EMPLEADO,
                    payload: response.data.empleadoActualizado
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarEmpleado = async empleado => {
        //console.log('empleado a actualizar ', empleado)
        try {
            await Axios.delete(`employees/delete/${empleado._id}`);
            dispatch({
                type: ELIMINAR_EMPLEADO,
                payload: empleado._id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const validarEmpleado = () =>{
        dispatch({
            type: VALIDAR_EMPLEADO
        })
    }

    const guardarEmpleadoActual = empleado => {
        dispatch({
            type: ACTUAL_EMPLEADO,
            payload: empleado
        })
    }

    const limpiarEmpleadoSeleccionado = () =>{
        dispatch({
            type: LIMPIAR_EMPLEADO_SELECCIONADO
        })
    }

    return(
        <empleadoContext.Provider
            value={{
                empleados: state.empleados,
                errorempleado: state.errorempleado,
                empleadoseleccionado: state.empleadoseleccionado,
                obtenerEmpleados,
                agregarEmpleado,
                actualizarEmpleado,
                eliminarEmpleado,
                validarEmpleado,
                guardarEmpleadoActual,
                limpiarEmpleadoSeleccionado,
            }}
        >
            {props.children}
        </empleadoContext.Provider>
    )
}

export default EmpleadoState;