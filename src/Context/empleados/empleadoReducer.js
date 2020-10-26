import {
    LISTAR_EMPLEADOS,
    AGREGAR_EMPLEADO,
    VALIDAR_EMPLEADO,
    ACTUAL_EMPLEADO,
    ACTUALIZAR_EMPLEADO,
    ELIMINAR_EMPLEADO,
    BUSCAR_EMPLEADO,
    LIMPIAR_EMPLEADO_SELECCIONADO
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case LISTAR_EMPLEADOS:
            return {
                ...state,
                empleados: action.payload
            }
        
        case BUSCAR_EMPLEADO:
            return {
                ...state,
                empleados: action.payload
            }
        case AGREGAR_EMPLEADO:
            return {
                ...state,
                empleados: [...state.empleados, action.payload],
                errorempleado: false,
                agregado: true
            }
        case VALIDAR_EMPLEADO:
            return {
                ...state,
                errorempleado:true
            }
        
        case ACTUAL_EMPLEADO:
            return {
                ...state,
                empleadoseleccionado: action.payload
            }
        case ACTUALIZAR_EMPLEADO:
            return {
                ...state,
                empleado: state.empleados.map(empleado=>empleado._id === action.payload._id ? action.payload : empleado),
                editado: true
            }
        
        case LIMPIAR_EMPLEADO_SELECCIONADO:
            return {
                ...state,
                empleadoseleccionado: null
            }
        case ELIMINAR_EMPLEADO:
            return {
                ...state,
                empleados: state.empleados.filter(empleado => empleado._id !== action.payload),
                eliminado: true
            }

        default:
            return state;
    }
}