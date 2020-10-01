import React from 'react';
import {Link} from 'react-router-dom';

export default function Empleados(){
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-8">
                                    <h4 className="card-title">Empleados( 4 )</h4>
                                </div>
                                <div className="col-4 mb-2">
                                    <div className="text-right">
                                        <Link className="btn btn-primary" to={'panel-admin/empleados'}>
                                            <span className="pcoded-micon"><i className="ti-user"></i></span>
                                            <span className="pcoded-mtext p-2">Crear Empleado</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Codigo Empleado</th>
                                            <th>Nombre</th>
                                            <th>Cargo</th>
                                            <th>RTN</th>
                                            <th className="w100 text-nowrap">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>001</td>
                                            <td>Nombre</td>
                                            <td>Cargo</td>
                                            <td>RTN</td>
                                            <td className="text-nowrap text-center">
                                                <Link
                                                    data-toggle="tooltip" 
                                                    className="btn btn-sm btn-warning"
                                                    data-original-title="Editar"
                                                ><i className="ti-pencil"></i></Link>

                                                <Link
                                                    data-toggle="tooltip" 
                                                    className="btn btn-sm btn-danger"
                                                    data-original-title="Borrar"
                                                ><i className="ti-trash"></i></Link>
                                            </td>

                                        </tr>
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
