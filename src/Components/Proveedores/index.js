import React,  { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import proveedorContext from '../../Context/proveedores/proveedorContext';

export default function Proveedores(){

    const ProveedorContext = useContext(proveedorContext);
    const { proveedores, obtenerProveedores, guardarProveedorActual, eliminarProveedor, buscarProveedor } = ProveedorContext;

    const [termino, setTermino] = useState();

    const history = useHistory()

    useEffect(()=>{
        obtenerProveedores();
    }, [obtenerProveedores])

    const seleccionarProveedor = proveedor => {
        guardarProveedorActual(proveedor);
        history.push('proveedores/nuevo')
    }

    const onClickEliminar = proveedor => {
        alert('vamos a eliminar ayudaaaaaaaaaa!')
        eliminarProveedor(proveedor);
        obtenerProveedores();
    }

    const handleSearch = () => {
        
        let proveedorBuscar = termino.trim().toLowerCase()

        if(proveedorBuscar.length === 0){
            return proveedores;
        }

        buscarProveedor(proveedorBuscar)

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
                                    placeholder="Buscar proveedor..."
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
                                    <h4 className="card-title">Proveedores( {proveedores.length} )</h4>
                                </div>
                                <div className="col-4 mb-2">
                                    <div className="text-right">
                                        <Link className="btn btn-sm btn-primary m-2" to='/admin/proveedores/nuevo'>
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
                                            <th>COD. Proveedor</th>
                                            <th>Nombre de la Empresa</th>
                                            <th>No.Identidad</th>
                                            <th>Nombre Proveedor</th>
                                            <th>RTN de Proveedor</th>
                                            <th>Télefono de Proveedor</th>
                                            <th className="w100 text-nowrap">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            proveedores.length === 0
                                            ?
                                            <tr>No hay proveedores</tr>
                                            :
                                            (
                                                proveedores.map(proveedor => {
                                                    return(
                                                    <tr key={proveedor._id} >  
                                                        <td>{proveedor.codeSupplier}</td>
                                                        <td>{proveedor.companyName}</td>
                                                        <td>{proveedor.personid.identidad}</td>
                                                        <td>{proveedor.personid.name} {proveedor.personid.lastname}</td>
                                                        <td>{proveedor.personid.rtn}</td>
                                                        <td>{proveedor.companyPhone1}</td>
                                                        <td className="text-nowrap text-center">
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-warning"
                                                                data-original-title="Editar"
                                                                onClick={()=> seleccionarProveedor(proveedor)}
                                                            ><i className="ti-pencil"></i></button>
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-danger"
                                                                data-original-title="Borrar"
                                                                onClick={()=>onClickEliminar(proveedor)}
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
                                            <th>RTN de la Empresa</th>
                                            <th>Ubicación de la Empresa</th>
                                            <th>Email</th>
                                            <th>País</th>
                                            <th>Ciudad</th>
                                            <th>Colonia</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            proveedores.length === 0
                                            ?
                                            <tr>No hay proveedores</tr>
                                            :
                                            (
                                                proveedores.map((proveedor, i) => {
                                                    return(
                                                    <tr key={i} >  
                                                        <td>{proveedor.companyRtn}</td>
                                                        <td>{proveedor.companyLocation}</td>
                                                        <td>{proveedor.personid.email} </td>
                                                        <td>{proveedor.personid.country}</td>
                                                        <td>{proveedor.personid.city}</td>
                                                        <td>{proveedor.personid.location}</td>
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
