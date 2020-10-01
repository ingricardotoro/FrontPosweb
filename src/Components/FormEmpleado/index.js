import React from 'react'

export default function FormularioEmpleado(){
    return(
        <>
        <div className="row">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Empleados</h4>
                        <hr/>
                        <div className="errores"></div>
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Datos Personales</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Nombre"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Apellido"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="No. Identidad"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="RTN"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Datos de Contacto</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Telefono"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Celular"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Calle, Colonia"/>             
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Ciudad"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Redes Sociales</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-world"></i></div>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="Sitio web"/>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-facebook"></i></div>
                                                    </div>
                                                    <input type="url" className="form-control" placeholder="Facebook"/>
                                                </div>  
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-skype"></i></div>
                                                    </div>
                                                    <input type="url" className="form-control" placeholder="Skype"/>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-linkedin"></i></div>
                                                    </div>
                                                    <input type="url" className="form-control" placeholder="LinkedIn"/>
                                                </div>   
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Datos de Empleado</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Código de Empleado"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Cargo"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input type="text" className="form-control" placeholder="Direccion"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="switch switch-primary d-inline m-r-10">
                                                    <input type="checkbox" id="switch-p-1"/>
                                                    <label htmlFor="switch-p-1" className="cr"></label>
                                                </div>
                                                <label htmlFor="">Activo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>            
                            </div>
                            <div className="form-group row m-b-0">
                                <div className="offset-sm-9 col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="ti-save p-2"></i>
                                        Agregar Empleado
                                    </button>
                                </div>
                            </div>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}