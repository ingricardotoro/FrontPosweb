import {
    LISTAR_PROVEEDORES,
    AGREGAR_PROVEEDOR,
    VALIDAR_PROVEEDOR,
    ACTUAL_PROVEEDOR,
    ACTUALIZAR_PROVEEDOR,
    LIMPIAR_PROVEEDOR_SELECCIONADO,
    ELIMINAR_PROVEEDOR
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case LISTAR_PROVEEDORES:
            return {
                ...state,
                proveedores: action.payload
            }
        case AGREGAR_PROVEEDOR:
            return {
                ...state,
                proveedores: [...state.proveedores, action.payload],
                errorproveedor: false
            }
        case VALIDAR_PROVEEDOR:
            return {
                ...state,
                errorproveedor:true
            }
        case ACTUAL_PROVEEDOR:
            return {
                ...state,
                proveedorseleccionado: action.payload
            }
        case ACTUALIZAR_PROVEEDOR:
            return {
                ...state,
                proveedor: state.proveedores.map(proveedor=>proveedor._id === action.payload._id ? action.payload : proveedor)
            }
        
        case LIMPIAR_PROVEEDOR_SELECCIONADO:
            return {
                ...state,
                proveedorseleccionado: null
            }
        case ELIMINAR_PROVEEDOR:
            return {
                ...state,
                proveedores: state.proveedores.filter(proveedor => proveedor._id !== action.payload)
            }

        default:
            return state;
    }
}