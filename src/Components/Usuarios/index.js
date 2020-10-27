import React,  { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import usuarioContext from '../../Context/usuarios/usuarioContext';
import alertaContext from '../../Context/alertas/alertaContext';

export default function Usuarios(){

    const UsuarioContext = useContext(usuarioContext);
    const { usuarios, obtenerUsuarios, guardarUsuarioActual, eliminarUsuario, eliminado } = UsuarioContext;

    const AlertaContext = useContext(alertaContext);
    const {alerta, mostrarAlerta} = AlertaContext;

    const [termino, setTermino] = useState();

    const history = useHistory()

    useEffect(()=>{
        obtenerUsuarios();
    }, [obtenerUsuarios])

    const seleccionarUsuario = usuario => {
        guardarUsuarioActual(usuario);
        history.push('usuarios/nuevo')
    }

    const onClickEliminar = usuario => {
        alert(`${eliminado} vamos a eliminar!`)
        eliminarUsuario(usuario);
        if(eliminado){
            mostrarAlerta('Usuario eliminado exitosamente!', 'alert-success')
        }
        obtenerUsuarios();
    }

    

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            {alerta ?
                            (
                                <div className={`alert ${alerta.tipoAlerta}`}>
                                    {alerta.msg}
                                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </div>
                            )
                            : 
                            (    <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="ti-search"></i></div>
                                    </div>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar empleado..."
                                        name="termino"
                                        value={termino}
                                        onChange={e=> setTermino(e.target.value)}
                                    />
                                </div>
                            )
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="card-title">Usuarios( {usuarios.length} )</h4>
                                </div>
                                <div className="col-4 mb-2">
                                    <div className="text-right">
                                        <Link className="btn btn-sm btn-primary" to='/admin/usuarios/nuevo'>
                                            <span className="pcoded-micon"><i className="ti-user"></i></span>
                                            <span className="pcoded-mtext p-2">Agregar</span>
                                        </Link>
                                        <button className="btn btn-sm btn-primary m-2"
                                                data-toggle="modal"
                                                data-target="#modalVerMas"
                                        >
                                            <span className="pcoded-micon"><i className="ti-plus"></i></span>
                                            <span className="pcoded-mtext p-2">Ver mas..</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>COD. Empleado</th>
                                            <th>Nombre</th>
                                            <th>Nombre usuario</th>
                                            <th>No.Identidad</th>
                                            <th>Cargo</th>
                                            <th>Rol de usuario</th>
                                            <th className="w100 text-nowrap">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usuarios.length === 0
                                            ?
                                            <tr>No hay usuarios</tr>
                                            :
                                            (
                                                usuarios.map(usuario => {
                                                    return(
                                                    <tr key={usuario._id} >  
                                                        <td>{usuario.employeeid.codeEmployee}</td>
                                                        <td>{usuario.employeeid.personid.name} {usuario.employeeid.personid.lastname}</td>
                                                        <td>{usuario.username}</td>
                                                        <td>{usuario.employeeid.personid.identidad}</td>
                                                        <td>{usuario.employeeid.workPosition}</td>
                                                        <td>{usuario.role}</td>
                                                        <td className="text-nowrap text-center">
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-warning"
                                                                data-original-title="Editar"
                                                                onClick={()=> seleccionarUsuario(usuario)}
                                                            ><i className="ti-pencil"></i></button>
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-danger"
                                                                data-original-title="Borrar"
                                                                onClick={()=>onClickEliminar(usuario)}
                                                            ><i className="ti-trash"></i></button>
                                                        </td>
                                                    </tr> 
                                                    )
                                                })
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modalVerMas" 
                 className="modal fade"
                 tabIndex="-1"
                 role="dialog"
                 aria-modal="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Más datos...</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="close">
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                            <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Telefono 2</th>
                                            <th>Fecha Nacimiento</th>
                                            <th>Email</th>
                                            <th>País</th>
                                            <th>Ciudad</th>
                                            <th>Colonia</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usuarios.length === 0
                                            ?
                                            <tr>No hay usuarios</tr>
                                            :
                                            (
                                                usuarios.map((usuario, i) => {
                                                    return(
                                                    <tr key={i} >  
                                                        <td>+504{usuario.employeeid.personid.phone2}</td>
                                                        <td>{usuario.employeeid.personid.fec_nac}</td>
                                                        <td>{usuario.employeeid.personid.email} </td>
                                                        <td>{usuario.employeeid.personid.country}</td>
                                                        <td>{usuario.employeeid.personid.city}</td>
                                                        <td>{usuario.employeeid.personid.location}</td>
                                                    </tr> 
                                                    )
                                                })
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="close">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>    
            </div>     
        </>
    )
}
