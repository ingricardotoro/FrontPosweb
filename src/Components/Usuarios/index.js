import React,  { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import usuarioContext from '../../Context/usuarios/usuarioContext';
import alertaContext from '../../Context/alertas/alertaContext';

export default function Usuarios(){

    const UsuarioContext = useContext(usuarioContext);
    const { usuarios, obtenerUsuarios, eliminarUsuario } = UsuarioContext;

    const AlertaContext = useContext(alertaContext);
    const {alerta, mostrarAlerta} = AlertaContext;

    const [termino, setTermino] = useState();
    let confirm;
    
    useEffect(()=>{
        obtenerUsuarios();
    }, [obtenerUsuarios])
   
    const onClickEliminar = usuario => {
        confirm = window.confirm('¿Estas seguro de eliminarlo?');
        
        if(confirm){
            eliminarUsuario(usuario);
            mostrarAlerta('Usuario eliminado exitosamente!', 'alert-success');
            obtenerUsuarios();
            return;
        }       
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
                                        placeholder="Buscar usuario..."
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
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>COD. Empleado</th>
                                            <th>Nombre usuario</th>
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
                                                        <td>{usuario.username}</td>
                                                        <td>{usuario.role}</td>
                                                        <td className="text-nowrap text-center">
                                                            
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-block btn-sm btn-danger sweet-multiple"
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
      </>
    )
}
