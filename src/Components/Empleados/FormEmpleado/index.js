import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import empleadoContext from '../../../Context/empleados/empleadoContext';
import AlertaContext from '../../../Context/alertas/alertaContext';

export default function FormularioEmpleado(){
    const history = useHistory()

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const [empleado, setEmpleado] = useState({
        personid: -1,
        name: '',
        lastname: '',
        identidad: '',
        gender: '',
        rtn: '',
        fec_nac: '',
        phone1: '',
        phone2: '',
        email: '',
        country: '',
        city: '',
        location:'',
        website: '',
        facebook: '',
        twitter: '',
        linkedin: '',
        skype: '',
        codeEmployee: '',
        workLocation: '',
        workPosition: '',
        active: true
    })

    const EmpleadoContext = useContext(empleadoContext);
    const { empleadoseleccionado, errorempleado, agregarEmpleado, actualizarEmpleado, validarEmpleado} = EmpleadoContext;

    useEffect(()=>{
        if(empleadoseleccionado !== null){
            //console.log('empleado seleccionado ',empleadoseleccionado)
            const empleadoActualizar = {
                _id: empleadoseleccionado._id,
                personid: '',
                name: '',
                lastname: '',
                identidad: '',
                gender: '',
                rtn: '',
                fec_nac: '',
                phone1: '',
                phone2: '',
                email: '',
                country: '',
                city: '',
                location:'',
                website: '',
                facebook: '',
                twitter: '',
                linkedin: '',
                skype: '',
                codeEmployee: '',
                workLocation: '',
                workPosition: '',
                active: true
            };
            const {_id, name, lastname, identidad, gender, rtn, fec_nac, phone1, phone2, email, country, city, location, 
                    website, facebook, twitter, linkedin,skype} = empleadoseleccionado.personid;
            const {codeEmployee, workLocation, workPosition, active} = empleadoseleccionado;
            
            empleadoActualizar.personid = _id
            empleadoActualizar.name = name
            empleadoActualizar.lastname = lastname
            empleadoActualizar.identidad = identidad
            empleadoActualizar.gender = gender
            empleadoActualizar.rtn = rtn
            empleadoActualizar.fec_nac = fec_nac
            empleadoActualizar.phone1 = phone1
            empleadoActualizar.phone2 = phone2
            empleadoActualizar.email = email
            empleadoActualizar.country = country
            empleadoActualizar.city = city
            empleadoActualizar.location = location
            empleadoActualizar.website = website
            empleadoActualizar.facebook = facebook
            empleadoActualizar.twitter = twitter
            empleadoActualizar.linkedin = linkedin
            empleadoActualizar.skype = skype
            empleadoActualizar.codeEmployee = codeEmployee
            empleadoActualizar.workLocation = workLocation
            empleadoActualizar.workPosition = workPosition
            empleadoActualizar.active = active

            setEmpleado(empleadoActualizar)
        }else{
            setEmpleado({
                personid: -1,
                name: '',
                lastname: '',
                identidad: '',
                gender: '',
                rtn: '',
                fec_nac: '',
                phone1: '',
                phone2: '',
                email: '',
                country: '',
                city: '',
                location:'',
                website: '',
                facebook: '',
                twitter: '',
                linkedin: '',
                skype: '',
                codeEmployee: '',
                workLocation: '',
                workPosition: '',
                active: true
            })
        }
    }, [empleadoseleccionado])

    const {name, lastname, identidad, gender, rtn, fec_nac, phone1, phone2, email, country, city,
           location, website, facebook, twitter, linkedin, skype, codeEmployee, workLocation, 
           workPosition, active} = empleado

    
    const onChange = e =>{
        setEmpleado({
            ...empleado,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //Validaciones
        if(name.trim()==='' || lastname.trim()==='' || identidad.trim()==='' || gender.trim()==='' || rtn.trim()===''||
           fec_nac.trim()==='' || phone1.trim()==='' || email.trim()==='' || country.trim()==='' || city.trim()==='' ||
           location.trim()==='' || codeEmployee.trim()==='' || workLocation.trim()==='' || workPosition.trim()==='')
        {
            validarEmpleado();
            return;
        }

        alert(active)

        //Comprobamos si es agregar o editar
        if(empleadoseleccionado === null){
            //console.log('empleado form ',empleado);
            agregarEmpleado(empleado);
            mostrarAlerta('Empleado agregado exitosamente!', 'alert-success');
            //Redirigimos a la tabla de ver empleados
            history.push('/admin/empleados');
        }else{
            actualizarEmpleado(empleado);
            mostrarAlerta('Empleado actualizado exitosamente!', 'alert-success');
            //Redirigimos a tabla de ver empleados
            history.push('/admin/empleados');
        }
        
        //Reiniciamos el formulario
        setEmpleado({
            personid: -1,
            name: '',
            lastname: '',
            identidad: '',
            gender: '',
            rtn: '',
            fec_nac: '',
            phone1: '',
            phone2: '',
            email: '',
            country: '',
            city: '',
            location:'',
            website: '',
            facebook: '',
            twitter: '',
            linkedin: '',
            skype: '',
            codeEmployee: '',
            workLocation: '',
            workPosition: '',
            active: false
        })
    }

    return(
        <>
        <div className="row">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{empleadoseleccionado ? 'Editar Empleado': 'Agregar Empleado'}</h4>
                        <hr/>
                        <div className="errores">                
                        {errorempleado ? ( <small className="text-danger">Todos los campos son obligatorio</small>) : null}
                        </div>
                        <div>
                        {alerta ? 
                        (
                            <div className={`alert ${alerta.tipoAlerta}`}>
                                {alerta.msg}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </div>
                        ): null}

                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Datos Personales</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="name">Nombre</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="name"
                                                    value={name}
                                                    onChange={onChange}
                                                    placeholder="Nombre"/>
                                                
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="lastname">Apellido</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="lastname"
                                                    value={lastname}
                                                    onChange={onChange} 
                                                    placeholder="Apellido"
                                                />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="identidad">No Identidad</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="identidad"
                                                    value={identidad}
                                                    onChange={onChange} 
                                                    placeholder="No. Identidad"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="email">Correo</label>
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email"
                                                    value={email}
                                                    onChange={onChange}
                                                    placeholder="Correo"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="rtn">RTN</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="rtn"
                                                    value={rtn}
                                                    onChange={onChange}
                                                    placeholder="RTN"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="row">
                                                    <label htmlFor="" className="col-sm-3 col-form-label">Genero</label>
                                                    <div className="col-sm-9">
                                                        <div className="form-check">
                                                            <input 
                                                                type="radio" 
                                                                className="form-check-label"
                                                                name="gender"
                                                                value="masculino"
                                                                checked={empleado.gender ==='masculino'}
                                                                onChange={onChange}
                                                                id="gridRadios1"
                                                            />
                                                            <label htmlFor="" className="form-check-label">Masculino</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input 
                                                                type="radio" 
                                                                className="form-check-label"
                                                                name="gender"
                                                                value="femenino"
                                                                checked={empleado.gender ==='femenino'}
                                                                onChange={onChange}
                                                                id="gridRadios2"
                                                            />
                                                            <label htmlFor="" className="form-check-label">Femenino</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input 
                                                                type="radio" 
                                                                className="form-check-label"
                                                                name="gender"
                                                                value="otro"
                                                                checked={empleado.gender ==='otro'}
                                                                onChange={onChange}
                                                                id="gridRadios3"
                                                            />
                                                            <label htmlFor="" className="form-check-label">Otro</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="">Fecha Nacimiento</label>
                                                <input 
                                                    type="date" 
                                                    className="form-control"
                                                    name="fec_nac"
                                                    value={fec_nac}
                                                    onChange={onChange} 
                                                    placeholder="Fecha de Nacimiento"/>
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
                                                <label htmlFor="phone1">Telefono</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="phone1"
                                                    value={phone1}
                                                    onChange={onChange} 
                                                    placeholder="Telefono"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="phone2">Celular</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="phone2"
                                                    value={phone2}
                                                    onChange={onChange}
                                                    placeholder="Celular"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="country">País</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="country"
                                                    value={country}
                                                    onChange={onChange}
                                                    placeholder="País"/>             
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="location">Residencia</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="location"
                                                    value={location}
                                                    onChange={onChange}
                                                    placeholder="Residencia, Colonia"/>             
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="city">Ciudad</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="city"
                                                    value={city}
                                                    onChange={onChange} 
                                                    placeholder="Ciudad"/>
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
                                                    <input 
                                                        type="url" 
                                                        className="form-control"
                                                        name="website"
                                                        value={website}
                                                        onChange={onChange} 
                                                        placeholder="Sitio web"/>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-facebook"></i></div>
                                                    </div>
                                                    <input 
                                                        type="url" 
                                                        className="form-control"
                                                        name="facebook"
                                                        value={facebook}
                                                        onChange={onChange} 
                                                        placeholder="Facebook"/>
                                                </div>  
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-twitter"></i></div>
                                                    </div>
                                                    <input 
                                                        type="url" 
                                                        className="form-control"
                                                        name="twitter"
                                                        value={twitter}
                                                        onChange={onChange} 
                                                        placeholder="Facebook"/>
                                                </div>  
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-skype"></i></div>
                                                    </div>
                                                    <input 
                                                        type="url" 
                                                        className="form-control" 
                                                        name="skype"
                                                        value={skype}
                                                        onChange={onChange}
                                                        placeholder="Skype"/>
                                                </div>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"><i className="ti-linkedin"></i></div>
                                                    </div>
                                                    <input 
                                                        type="url" 
                                                        className="form-control"
                                                        name="linkedin" 
                                                        value={linkedin}
                                                        onChange={onChange}
                                                        placeholder="LinkedIn"/>
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
                                                <label htmlFor="codeEmployee">Código de Empleado</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="codeEmployee"
                                                    value={codeEmployee}
                                                    onChange={onChange}
                                                    placeholder="Código de Empleado"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="workPosition">Cargo</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="workPosition"
                                                    value={workPosition}
                                                    onChange={onChange}
                                                    placeholder="Cargo, Posición de trabajo"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="workLocation">Direccion</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="workLocation"
                                                    value={workLocation}
                                                    onChange={onChange} 
                                                    placeholder="Direccion"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="switch switch-primary d-inline m-r-10">
                                                    <input type="checkbox" id="switch-p-1" name="active" value={active} onChange={onChange}/>
                                                    <label htmlFor="switch-p-1" className="cr"></label>
                                                </div>
                                                <label htmlFor="">Activo</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>            
                            </div>
                            <div className="form-group row m-b-0">
                                <div className="offset-sm-8 col-sm-10">
                                    <button type="submit" className="btn btn-primary">
                                        <i className="ti-save p-2"></i>
                                        {empleadoseleccionado ? 'Editar Empleado': 'Agregar Empleado'}
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