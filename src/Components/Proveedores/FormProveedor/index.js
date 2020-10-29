import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import proveedorContext from '../../../Context/proveedores/proveedorContext';
import AlertaContext from '../../../Context/alertas/alertaContext';

export default function FormularioProveedor(){
    const history = useHistory()

    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;

    const [proveedor, setProveedor] = useState({
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
        codeSupplier:'',
        companyName:'',
        companyLocation:'',
        companyPhone1:'',
        companyPhone2:'',
        companyRtn:'',
        companyWebsite:'',
        companyLogo:'',
        title:'',
        workPosition:'',
        active:true
    })

    const ProveedorContext = useContext(proveedorContext);
    const {proveedorseleccionado, errorproveedor, agregarProveedor, actualizarProveedor, validarProveedor} = ProveedorContext;

    useEffect(()=>{
        if(proveedorseleccionado !== null){
            //console.log('proveedor seleccionado ',proveedorseleccionado)
            const proveedorActualizar = {
                _id: proveedorseleccionado._id,
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
                codeSupplier:'',
                companyName:'',
                companyLocation:'',
                companyPhone1:'',
                companyPhone2:'',
                companyRtn:'',
                companyWebsite:'',
                companyLogo:'',
                title:'',
                workPosition:'',
                active:true
            };
            const {_id, name, lastname, identidad, gender, rtn, fec_nac, phone1, phone2, email, country, city, location, 
                    website, facebook, twitter, linkedin,skype} = proveedorseleccionado.personid;
            const {codeSupplier,companyName,companyLocation,companyPhone1,companyPhone2,companyRtn,companyWebsite,
                   companyLogo,title,workPosition,active} = proveedorseleccionado;
            
            proveedorActualizar.personid = _id
            proveedorActualizar.name = name
            proveedorActualizar.lastname = lastname
            proveedorActualizar.identidad = identidad
            proveedorActualizar.gender = gender
            proveedorActualizar.rtn = rtn
            proveedorActualizar.fec_nac = fec_nac
            proveedorActualizar.phone1 = phone1
            proveedorActualizar.phone2 = phone2
            proveedorActualizar.email = email
            proveedorActualizar.country = country
            proveedorActualizar.city = city
            proveedorActualizar.location = location
            proveedorActualizar.website = website
            proveedorActualizar.facebook = facebook
            proveedorActualizar.twitter = twitter
            proveedorActualizar.linkedin = linkedin
            proveedorActualizar.skype = skype
            proveedorActualizar.codeSupplier = codeSupplier
            proveedorActualizar.companyName = companyName
            proveedorActualizar.companyLocation = companyLocation
            proveedorActualizar.companyPhone1 = companyPhone1
            proveedorActualizar.companyPhone2 = companyPhone2
            proveedorActualizar.companyRtn = companyRtn
            proveedorActualizar.companyWebsite = companyWebsite
            proveedorActualizar.companyLogo = companyLogo
            proveedorActualizar.title = title
            proveedorActualizar.workPosition = workPosition
            proveedorActualizar.active = active
            setProveedor(proveedorActualizar)
        }else{
            setProveedor({
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
                codeSupplier:'',
                companyName:'',
                companyLocation:'',
                companyPhone1:'',
                companyPhone2:'',
                companyRtn:'',
                companyWebsite:'',
                companyLogo:'',
                title:'',
                workPosition:'',
                active:true
            })
        }
    }, [proveedorseleccionado])

    let {name, lastname, identidad, gender, rtn, fec_nac, phone1, phone2, email, country, city,
           location, website, facebook, twitter, linkedin, skype, codeSupplier,companyName,
           companyLocation,companyPhone1,companyPhone2,companyRtn,companyWebsite,companyLogo,title,
           workPosition,active} = proveedor

    
    const onChange = e =>{
        setProveedor({
            ...proveedor,
            [e.target.name]: e.target.value
        })
    }

    
    const handleSubmit = e =>{
        e.preventDefault();
        //Validaciones
        if(name.trim()==='' || lastname.trim()==='' || identidad.trim()==='' || gender.trim()==='' ||
           rtn.trim()===''|| fec_nac.trim()==='' || phone1.trim()==='' || email.trim()==='' || 
           country.trim()==='' || city.trim()==='' || location.trim()==='' || codeSupplier.trim()==='' ||
           companyName.trim()==='' || companyLocation.trim()==='' || 
           companyPhone1.trim()==='' || title.trim()==='' || workPosition.trim()==='')
        {
            validarProveedor();
            return;
        }

        //Comprobamos si es agregar o editar
        if(proveedorseleccionado === null){
            //console.log('proveedor form ',proveedor);
            agregarProveedor(proveedor);
            mostrarAlerta('Proveedor agregado exitosamente!', 'alert-success');
            //Redirigimos a la tabla de ver proveedores
            history.push('/admin/proveedores');
            
        }else{
            actualizarProveedor(proveedor);
            mostrarAlerta('Proveedor actualizado exitosamente!');
            //Redirigimos a la tabla de ver proveedores
            history.push('/admin/proveedores');
        }

        //Reiniciamos el formulario
        setProveedor({
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
            codeSupplier:'',
            companyName:'',
            companyLocation:'',
            companyPhone1:'',
            companyPhone2:'',
            companyRtn:'',
            companyWebsite:'',
            companyLogo:'',
            title:'',
            workPosition:'',
            active:true
        })
    }

    return(
        <>
        <div className="row">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{proveedorseleccionado ? 'Editar Proveedor': 'Agregar Proveedor'}</h4>
                        <hr/>
                        <div className="errores">
                            {errorproveedor ? ( <small className="text-danger">Todos los campos son obligatorio</small>) : null}
                        </div>
                        {alerta ? 
                        (
                            <div className={`alert ${alerta.tipoAlerta}`}>
                                {alerta.msg}
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </div>
                        ): null}
                        
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
                                                    placeholder="Correo electronico"/>
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
                                                                checked={proveedor.gender ==='masculino'}
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
                                                                checked={proveedor.gender ==='femenino'}
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
                                                                checked={proveedor.gender ==='otro'}
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
                                                    placeholder="Telefono fijo"/>
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
                                                <label htmlFor="companyPhone1">Telefono de empresa</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="companyPhone1"
                                                    value={companyPhone1}
                                                    onChange={onChange}
                                                    placeholder="Telefono fijo de la empresa"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyPhone2">Celular de Empresa</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="companyPhone2"
                                                    value={companyPhone2}
                                                    onChange={onChange}
                                                    placeholder="Telefono celular de la empresa"/>
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
                                                        <div className="input-group-text"><i className="ti-world"></i></div>
                                                    </div>
                                                    <input 
                                                        type="url" 
                                                        className="form-control"
                                                        name="companyWebsite"
                                                        value={companyWebsite}
                                                        onChange={onChange} 
                                                        placeholder="Sitio web de la empresa"/>
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
                                            <h4 className="card-title">Datos de Proveedor</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="codeSupplier">Código de Proveedor</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="codeSupplier"
                                                    value={codeSupplier}
                                                    onChange={onChange}
                                                    placeholder="Código de Proveedor"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyName">Nombre de Empresa</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="companyName"
                                                    value={companyName}
                                                    onChange={onChange}
                                                    placeholder="Nombre de la empresa"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyRtn">RTN Empresa</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="companyRtn"
                                                    value={companyRtn}
                                                    onChange={onChange}
                                                    placeholder="RTN de la empresa"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="companyLocation">Ubicacion de Empresa</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="companyLocation"
                                                    value={companyLocation}
                                                    onChange={onChange}
                                                    placeholder="Ubicacion de la empresa"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="title">Título</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="title"
                                                    value={title}
                                                    onChange={onChange}
                                                    placeholder="Grado academico de Proveedor"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label htmlFor="workPosition">Cargo</label>
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="workPosition"
                                                    value={workPosition}
                                                    onChange={onChange} 
                                                    placeholder="Cargo del proveedor"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="switch switch-primary d-inline m-r-10">
                                                    <input type="checkbox" id="switch-p-2" name="active" value={active} onChange={onChange}/>
                                                    <label htmlFor="switch-p-2" className="cr"></label>
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
                                        {proveedorseleccionado ? 'Editar Proveedor': 'Agregar Proveedor'}
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