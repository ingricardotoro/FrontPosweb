import React,  { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import empleadoContext from '../../Context/empleados/empleadoContext';

export default function Empleados(){

    const EmpleadoContext = useContext(empleadoContext);
    const { empleados, obtenerEmpleados, guardarEmpleadoActual, eliminarEmpleado } = EmpleadoContext;

    const [termino, setTermino] = useState();

    const history = useHistory()

    useEffect(()=>{
        obtenerEmpleados();
    }, [obtenerEmpleados])

    const seleccionarEmpleado = empleado => {
        guardarEmpleadoActual(empleado);
        history.push('empleados/nuevo')
    }

    const onClickEliminar = empleado => {
        alert('vamos a eliminar ayudaaaaaaaaaa!')
        eliminarEmpleado(empleado);
        obtenerEmpleados()
    }

    /*
    if(termino!==undefined && termino.length > 0){
        empleados = empleados.filter(empleado=>
            //console.log(empleado)
            empleado.name.toLowerCase().indexOf(termino.toLowerCase()) > -1
        )
    }
    */

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
                                    <h4 className="card-title">Empleados( {empleados.length} )</h4>
                                </div>
                                <div className="col-4 mb-2">
                                    <div className="text-right">
                                        <Link className="btn btn-sm btn-primary" to='/admin/empleados/nuevo'>
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
                                            <th>Cargo</th>
                                            <th>No.Identidad</th>
                                            <th>RTN</th>
                                            <th>Telefono</th>
                                            <th className="w100 text-nowrap">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            empleados.length === 0
                                            ?
                                            <tr>No hay empleados</tr>
                                            :
                                            (
                                                empleados.map(empleado => {
                                                    return(
                                                    <tr key={empleado._id} >  
                                                        <td>{empleado.codeEmployee}</td>
                                                        <td>{empleado.personid.name} {empleado.personid.lastname}</td>
                                                        <td>{empleado.workPosition}</td>
                                                        <td>{empleado.personid.identidad}</td>
                                                        <td>{empleado.personid.rtn}</td>
                                                        <td>{empleado.personid.phone1}</td>
                                                        <td className="text-nowrap text-center">
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-warning"
                                                                data-original-title="Editar"
                                                                onClick={()=> seleccionarEmpleado(empleado)}
                                                            ><i className="ti-pencil"></i></button>
                                                            <button
                                                                data-toggle="tooltip" 
                                                                className="btn btn-sm btn-danger"
                                                                data-original-title="Borrar"
                                                                onClick={()=>onClickEliminar(empleado)}
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
                                            empleados.length === 0
                                            ?
                                            <tr>No hay empleados</tr>
                                            :
                                            (
                                                empleados.map((empleado, i) => {
                                                    return(
                                                    <tr key={i} >  
                                                        <td>+504{empleado.personid.phone2}</td>
                                                        <td>{empleado.personid.fec_nac}</td>
                                                        <td>{empleado.personid.email} </td>
                                                        <td>{empleado.personid.country}</td>
                                                        <td>{empleado.personid.city}</td>
                                                        <td>{empleado.personid.location}</td>
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
