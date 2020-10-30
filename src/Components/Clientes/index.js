import React,  { useContext, useEffect, useMemo } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import alertaContext from '../../Context/alertas/alertaContext';
import clienteContext from '../../Context/clientes/clienteContext';

export default function Empleados(){
    const history = useHistory();

    const ClienteContext = useContext(clienteContext);
    const { clientes, obtenerClientes, guardarClienteActual, eliminarCliente } = ClienteContext;

    const AlertaContext = useContext(alertaContext);
    const {alerta, mostrarAlerta} = AlertaContext;

    let confirm;

    const [consulta, setConsulta] = useState('');
    const [filterClientes, setFilterClientes] = useState(clientes);

    useEffect(()=>{
        obtenerClientes();
    }, [obtenerClientes]);

    useMemo(()=>{
        const result = clientes.filter(cliente=>{
            return `${cliente.personid.name} 
                    ${cliente.personid.lastname}`
                    .toLowerCase()
                    .includes(consulta.toLowerCase())
        })
        setFilterClientes(result);
    },[consulta, clientes])

    const seleccionarCliente = cliente => {
        guardarClienteActual(cliente);
        history.push('clientes/nuevo');
    }

    const onClickEliminar = cliente => {
        confirm = window.confirm('¿Estas seguro de eliminarlo?');
        if(confirm){
            eliminarCliente(cliente);
            mostrarAlerta('Cliente eliminado exitosamente!', 'alert-success');
            obtenerClientes();
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
                            (    
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text"><i className="ti-search"></i></div>
                                    </div>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar cliente..."
                                        name="consulta"
                                        value={consulta}
                                        onChange={e=> setConsulta(e.target.value)}
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
                                    <h4 className="card-title">Clientes( {clientes.length} )</h4>
                                </div>
                                <div className="col-4 mb-2">
                                    <div className="text-right">
                                        <Link className="btn btn-sm btn-primary m-2" to='/admin/clientes/nuevo'>
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
                                            <th>COD. Cliente</th>
                                            <th>Nombre</th>
                                            <th>No.Identidad</th>
                                            <th>Limite de Credito</th>
                                            <th>Nivel de precio</th>
                                            <th className="w100 text-nowrap">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterClientes.length === 0
                                            ?
                                            <tr>No hay clientes</tr>
                                            :
                                            (
                                                filterClientes.map(cliente => {
                                                    return(
                                                    <tr key={cliente._id} >  
                                                        <td>{cliente.codeCustomer}</td>
                                                        <td>{cliente.personid.name} {cliente.personid.lastname}</td>
                                                        <td>{cliente.personid.identidad}</td>
                                                        <td>{cliente.creditLimit} LPS.</td>
                                                        <td>{cliente.levelPrice}</td>
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
                                            <th>Telefono</th>
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
