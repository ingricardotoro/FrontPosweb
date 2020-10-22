import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import clienteContext from '../../../Context/clientes/clienteContext';
//import AlertaContext from '../../../Context/alertas/alertaContext';

export default function FormularioEmpleado(){
    const history = useHistory()

    //const alertaContext = useContext(AlertaContext);
    //const {alerta, mostrarAlerta} = alertaContext;

    const [cliente, setCliente] = useState({
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
        customerCode: '',
        payIVA: '',
        creditActive: '',
        creditLimit: '',
        levelPrice: '',
        active: ''
    })

    const ClienteContext = useContext(clienteContext);
    const {clienteseleccionado, errorcliente, agregarCliente, actualizarCliente, validarCliente} = ClienteContext;

    useEffect(()=>{
        if(clienteseleccionado !== null){
            console.log('cliente seleccionado ',clienteseleccionado)
            const clienteActualizar = {
                _id: clienteseleccionado._id,
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
                customerCode: '',
                payIVA: '',
                creditActive: '',
                creditLimit: '',
                levelPrice: '',
                active: ''
            };
            const {_id, name, lastname, identidad, gender, rtn, fec_nac, phone1, phone2, email, country, city, location, 
                    website, facebook, twitter, linkedin,skype} = clienteseleccionado.personid;
            const {customerCode, payIVA, creditActive, creditLimit, levelPrice, active} = clienteseleccionado;
            
            clienteActualizar.personid = _id
            clienteActualizar.name = name
            clienteActualizar.lastname = lastname
            clienteActualizar.identidad = identidad
            clienteActualizar.gender = gender
            clienteActualizar.rtn = rtn
            clienteActualizar.fec_nac = fec_nac
            clienteActualizar.phone1 = phone1
            clienteActualizar.phone2 = phone2
            clienteActualizar.email = email
            clienteActualizar.country = country
            clienteActualizar.city = city
            clienteActualizar.location = location
            clienteActualizar.website = website
            clienteActualizar.facebook = facebook
            clienteActualizar.twitter = twitter
            clienteActualizar.linkedin = linkedin
            clienteActualizar.skype = skype
            clienteActualizar.customerCode = customerCode
            clienteActualizar.payIVA = payIVA
            clienteActualizar.creditActive = creditActive
            clienteActualizar.creditLimit = creditLimit
            clienteActualizar.levelPrice = levelPrice
            clienteActualizar.active = active

            setCliente(clienteActualizar)
        }else{
            setCliente({
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
                customerCode: '',
                payIVA: '',
                creditActive: '',
                creditLimit: '',
                levelPrice: '',
                active: ''
            })
        }
    }, [clienteseleccionado])

    const {name, lastname, identidad, gender, rtn, fec_nac, phone1, phone2, email, country, city,
           location, website, facebook, twitter, linkedin, skype, customerCode, payIVA, creditActive,
           creditLimit,levelPrice, active} = cliente

    
    const onChange = e =>{
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //Validaciones
        if(name.trim()==='' || lastname.trim()==='' || identidad.trim()==='' || gender.trim()==='' || rtn.trim()===''||
           fec_nac.trim()==='' || phone1.trim()==='' || email.trim()==='' || country.trim()==='' || city.trim()==='' ||
           location.trim()==='' || customerCode.trim()==='' || creditLimit.trim()==='' || levelPrice.trim()==='')
        {
            validarCliente();
            return;
        }

        if(payIVA){
            validarCliente();
            return;
        }
        if(creditActive){
            validarCliente();
            return;
        }
        
        console.log(active)

        //Comprobamos si es agregar o editar
        if(clienteseleccionado === null){
            console.log('cliente form ',cliente);
            agregarCliente(cliente);
            //Redirigimos a la tabla de ver empleados
            /*setTimeout(()=>{
                mostrarAlerta('Empleado agrega exitosamente!', 'alert-info alert-dismissible fade show');
                
            },3000)*/
            history.push('/admin/clientes');
            
        }else{
            actualizarCliente(cliente);
            history.push('/admin/clientes');
        }

        //Reiniciamos el formulario
        setCliente({
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
            customerCode: '',
            payIVA: '',
            creditActive: '',
            creditLimit: '',
            levelPrice: '',
            active: ''
        })
    }

    return(
        <>
        <div className="row">
            <div className="col-md-10">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{clienteseleccionado ? 'Editar Cliente': 'Agregar Cliente'}</h4>
                        <hr/>
                        <div className="errores">
                            {errorcliente ? ( <small className="text-danger">Todos los campos son obligatorio</small>) : null}
                        </div>
                        
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Datos Personales</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="name"
                                                    value={name}
                                                    onChange={onChange}
                                                    placeholder="Nombre"/>
                                                
                                            </div>
                                            <div className="form-group col-md-12">
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
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="identidad"
                                                    value={identidad}
                                                    onChange={onChange} 
                                                    placeholder="No. Identidad"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="email" 
                                                    className="form-control" 
                                                    name="email"
                                                    value={email}
                                                    onChange={onChange}
                                                    placeholder="Email"/>
                                            </div>
                                            <div className="form-group col-md-12">
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
                                                                checked={cliente.gender ==='masculino'}
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
                                                                checked={cliente.gender ==='femenino'}
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
                                                                checked={cliente.gender ==='otro'}
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
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="phone1"
                                                    value={phone1}
                                                    onChange={onChange} 
                                                    placeholder="Telefono"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="phone2"
                                                    value={phone2}
                                                    onChange={onChange}
                                                    placeholder="Celular"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="country"
                                                    value={country}
                                                    onChange={onChange}
                                                    placeholder="País"/>             
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="location"
                                                    value={location}
                                                    onChange={onChange}
                                                    placeholder="Calle, Colonia"/>             
                                            </div>
                                            <div className="form-group col-md-12">
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
                                            <h4 className="card-title">Datos de Cliente</h4>
                                            <hr/>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="codeEmployee"
                                                    value={customerCode}
                                                    onChange={onChange}
                                                    placeholder="Código de Cliente"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control" 
                                                    name="creditActive"
                                                    value={creditActive}
                                                    onChange={onChange}
                                                    placeholder="Credito Activo"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <input 
                                                    type="text" 
                                                    className="form-control"
                                                    name="creditLimit"
                                                    value={creditLimit}
                                                    onChange={onChange} 
                                                    placeholder="Credito Limite"/>
                                            </div>
                                            <div className="form-group col-md-12">
                                                <div className="switch switch-primary d-inline m-r-10">
                                                    <input type="checkbox" id="switch-p-1" name="active" value="true" onChange={onChange}/>
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
                                        {clienteseleccionado ? 'Editar Cliente': 'Agregar Cliente'}
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