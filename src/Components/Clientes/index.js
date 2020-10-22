import React,  { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import clienteContext from '../../Context/clientes/clienteContext';

export default function Empleados(){

    const ClienteContext = useContext(clienteContext);
    const { clientes, obtenerClientes, guardarClienteActual, eliminarCliente, buscarCliente } = ClienteContext;

    const [termino, setTermino] = useState();

    const history = useHistory()

    useEffect(()=>{
        obtenerClientes();
    }, [obtenerClientes])

    const seleccionarCliente = cliente => {
        guardarClienteActual(cliente);
        history.push('clientes/nuevo')
    }

    const onClickEliminar = cliente => {
        alert('vamos a eliminar ayudaaaaaaaaaa!')
        eliminarEmpleado(cliente);
        obtenerClientes();
    }

    const handleSearch = () => {
        
        let clienteBuscar = termino.trim().toLowerCase()

        if(clienteBuscar.length === 0){
            return empleados;
        }

        buscarCliente(clienteBuscar)

    }

    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="input-group">
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
                                    onKeyUp={()=>handleSearch()}
                                />
                            </div>
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
                                    <h4 className="card-title">Clientes( {clientes.length} )</h4>
                                </div>
                                <div className="col-4 mb-2">
                                    <div className="text-right">
                                        <Link className="btn btn-primary" to='/admin/clientes/nuevo'>
                                            <span className="pcoded-micon"><i className="ti-user"></i></span>
                                            <span className="pcoded-mtext p-2">Crear Cliente</span>
                                        </Link>
                                        <button className="btn btn-primary m-2"
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
                                            <th>COD. Cliente</th>
                                            <th>Nombre</th>
                                            <th>No.Identidad</th>
                                            <th>Credito Activo</th>
                                            <th>Limite de Credito</th>
                                            <th>Nivel de precio</th>
                                            <th className="w100 text-nowrap">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            clientes.length === 0
                                            ?
                                            <tr>No hay clientes</tr>
                                            :
                                            (
                                                clientes.map(cliente => {
                                                    return(
                                                    <tr key={cliente._id} >  
                                                        <td>{cliente.customerCode}</td>
                                                        <td>{cliente.personid.name} {cliente.personid.lastname}</td>
                                                        <td>{cliente.creditActive}</td>
                                                        <td>{cliente.creditLimit}</td>
                                                        <td>{cliente.levelprice}</td>
                                                        <td className="text-nowrap text-center">
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-warning"
                                                                data-original-title="Editar"
                                                                onClick={()=> seleccionarCliente(cliente)}
                                                            ><i className="ti-pencil"></i></button>
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-danger"
                                                                data-original-title="Borrar"
                                                                onClick={()=>onClickEliminar(cliente)}
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
                                            clientes.length === 0
                                            ?
                                            <tr>No hay clientes</tr>
                                            :
                                            (
                                                clientes.map((cliente, i) => {
                                                    return(
                                                    <tr key={i} >  
                                                        <td>+504{cliente.personid.phone2}</td>
                                                        <td>{cliente.personid.fec_nac}</td>
                                                        <td>{cliente.personid.email} </td>
                                                        <td>{cliente.personid.country}</td>
                                                        <td>{cliente.personid.city}</td>
                                                        <td>{cliente.personid.location}</td>
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
