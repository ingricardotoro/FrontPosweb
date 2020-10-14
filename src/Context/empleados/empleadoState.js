import React, {useReducer} from 'react';

import empleadoContext from './empleadoContext';
import empleadoReducer from './empleadoReducer';

import {
    LISTAR_EMPLEADOS,
    AGREGAR_EMPLEADO,
    VALIDAR_EMPLEADO,
    ACTUAL_EMPLEADO,
    ACTUALIZAR_EMPLEADO,
    ELIMINAR_EMPLEADO
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
            console.log(response);
            dispatch({
                type: LISTAR_EMPLEADOS,
                payload: response.data.employees
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    const agregarEmpleado = async empleado => {
        console.log(empleado)
        try {
            const response = await Axios.post('employees', empleado);
            console.log(response);
            dispatch({
                type: AGREGAR_EMPLEADO,
                payload: empleado
            })
        } catch (error) {
            console.log(error);
        }
    }

    const guardarEmpleadoActual = empleado => {
        dispatch({
            type: ACTUAL_EMPLEADO,
            payload: empleado
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
                guardarEmpleadoActual
            }}
        >
            {props.children}
        </empleadoContext.Provider>
    )
}

export default EmpleadoState;