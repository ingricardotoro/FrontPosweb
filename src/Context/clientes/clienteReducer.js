import {
    LISTAR_CLIENTES,
    AGREGAR_CLIENTE,
    VALIDAR_CLIENTE,
    ACTUAL_CLIENTE,
    ACTUALIZAR_CLIENTE,
    LIMPIAR_CLIENTE_SELECCIONADO,
    ELIMINAR_CLIENTE
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case LISTAR_CLIENTES:
            return {
                ...state,
                clientes: action.payload
            }
        case AGREGAR_CLIENTE:
            return {
                ...state,
                clientes: [...state.clientes, action.payload],
                errorempleado: false
            }
        case VALIDAR_CLIENTE:
            return {
                ...state,
                errorcliente:true
            }
        case ACTUAL_CLIENTE:
            return {
                ...state,
                clienteseleccionado: action.payload
            }
        case ACTUALIZAR_CLIENTE:
            return {
                ...state,
                cliente: state.clientes.map(cliente=>cliente._id === action.payload._id ? action.payload : cliente)
            }
        
        case LIMPIAR_CLIENTE_SELECCIONADO:
            return {
                ...state,
                clienteseleccionado: null
            }
        case ELIMINAR_CLIENTE:
            return {
                ...state,
                clientes: state.clientes.filter(cliente => cliente._id !== action.payload)
            }

        default:
            return state;
    }
}