import React from 'react'
//import {Link, useHistory} from 'react-router-dom'

//import useUser from '../../Hooks/useUser'

import logo from './logo.png'

export default function Login(){
    /*const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const {loginCargando, loginError, login, estaLogeado} = useUser()

    useEffect(()=>{
        if(estaLogeado) return history.push('/home')
    }, [estaLogeado, history])

    const handleSubmit = (e)=>{
        e.preventDefault()
        //console.log(username, password)
        login({username, password})
    }*/

    return (
        <>
        <div className="auth-wrapper">
            <div className="auth-content text-center">
                <img src={logo} alt="LOGO" className="img-fluid mb-4"/>
                <div className="card borderless">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="card-body">
                                <h4 className="mb-3 f-w-400">Iniciar Sesion</h4>
                                <hr/>
                                 
                                <form  /*onSubmit={handleSubmit}*/>
                                    <div className="form-group mb-3">
                                        <input  type="text" 
                                                className="form-control"
                                                /*value={username} 
                                                onChange={e=> setUserName(e.target.value)}*/
                                                placeholder="Nombre de usuario"/>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="password" 
                                               className="form-control" 
                                               /*value={password} 
                                               onChange={e=>setPassword(e.target.value)}*/
                                               placeholder="Contraseña"/>
                                    </div>
                                    <button className="btn btn-block btn-primary mb-4">
                                            Iniciar Sesion
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}