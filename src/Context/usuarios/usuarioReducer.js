import {
    LISTAR_USUARIOS,
    SELECT_EMPLEADOS,
    AGREGAR_USUARIO,
    VALIDAR_USUARIO,
    ACTUAL_USUARIO,
    ELIMINAR_USUARIO,
    LIMPIAR_USUARIO_SELECCIONADO
} from '../../types';

export default (state, action) => {
    switch(action.type){
        case LISTAR_USUARIOS:
            return {
                ...state,
                usuarios: action.payload
            }
        case SELECT_EMPLEADOS:
            return {
                ...state,
                empleados: action.payload
            }
        case AGREGAR_USUARIO:
            return {
                ...state,
                usuarios: [...state.usuarios, action.payload],
                errorempleado: false
            }
        case VALIDAR_USUARIO:
            return {
                ...state,
                errorusuario:true
            }
        case ACTUAL_USUARIO:
            return {
                ...state,
                usuarioseleccionado: action.payload
            }
        
        case LIMPIAR_USUARIO_SELECCIONADO:
            return {
                ...state,
                usuarioseleccionado: null
            }
        case ELIMINAR_USUARIO:
            return {
                ...state,
                usuarios: state.usuarios.filter(usuario => usuario._id !== action.payload),
                eliminado:true
            }

        default:
            return state;
    }
}