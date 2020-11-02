import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import usuarioContext from '../../../Context/usuarios/usuarioContext';
import AlertaContext from '../../../Context/alertas/alertaContext';

export default function FormularioUsuario(){
    const history = useHistory()

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const [usuario, setUsuario] = useState({
        employeeid: '',
        username: '',
        password: '',
        passwordRepeat: '',
        role: ''
    })

    const UsuarioContext = useContext(usuarioContext);
    const { errorusuario, empleados, obtenerEmpleados,  agregarUsuario, validarUsuario } = UsuarioContext;

    const { employeeid, username, password, passwordRepeat, role } = usuario

    useEffect(()=>{
        obtenerEmpleados();
    },[obtenerEmpleados])
    
    const onChange = e =>{
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //Validaciones
        if(username.trim()==='' || password.trim()==='' || role.trim()==='')
        {
            validarUsuario();
            return;
        }

        if(password.trim() !== passwordRepeat.trim()){
            mostrarAlerta('Contraseñas no coinciden', 'alert-danger alert-dismissible fade show');
            return;
        }

        //console.log('usuario form ',usuario);
        agregarUsuario({username, password, role, employeeid});
        //Redirigimos a la tabla de ver empleados
        history.push('/admin/usuarios');
        
        //Reiniciamos el formulario
        setUsuario({
            employeeid: '',
            username: '',
            password: '',
            passwordRepeat,
            role: ''
        })
    }

    return(
        <>
        <div className="row">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Agregar Usuario</h4>
                        <hr/>
                        <div className="errores">
                        {errorusuario ? ( <small className="text-danger">Todos los campos son obligatorio</small>) : null}
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Datos Usuario</h4>
                                            <hr/>
                                            <div className="form-group col-md-8">
                                                <label htmlFor="empleado">Empleado</label>
                                                <select name="employeeid" onChange={onChange} className="form-control">
                                                    <option value="">Seleccione el empleado</option>
                                                    {empleados.map(empleado=>(
                                                        <option
                                                            key={empleado._id}
                                                            value={empleado._id}
                                                        >
                                                            {` ${empleado.personid.name} ${empleado.personid.lastname}`} 
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label htmlFor="username">Nombre de Usuario</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="username"
                                                    value={username}
                                                    onChange={onChange} 
                                                    placeholder="Nombre de Usuario"
                                                />
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label htmlFor="password">Contraseña</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="password"
                                                    value={password}
                                                    onChange={onChange} 
                                                    placeholder="Contraseña"/>
                                                {alerta ? (<small className={`alerta ${alerta.tipoAlerta}`}> {alerta.msg} </small>): null}
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label htmlFor="passwordRepeat">Repita su Contraseña</label>
                                                <input 
                                                    type="password" 
                                                    className="form-control"
                                                    name="passwordRepeat"
                                                    value={passwordRepeat}
                                                    onChange={onChange} 
                                                    placeholder="Repita la Contraseña"/>
                                            </div>
                                            <div className="form-group col-md-8">
                                                <label htmlFor="role">Rol de Usuario</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="role"
                                                    value={role}
                                                    onChange={onChange}
                                                    placeholder="Rol de Usuario"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                           <div className="form-group row m-b-0">
                                <div className="offset-sm-8 col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="ti-save p-2"></i>
                                       Agregar Usuario
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