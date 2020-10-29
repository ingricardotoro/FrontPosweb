import React, {useContext} from 'react';
import {Link, useHistory } from 'react-router-dom';

import logo from './logo.png';
import userImg from '../Header/user_default.png';

import AuthContext from '../../../Context/autenticacion/authContext';

export default function Navbar(){
    
    const authContext = useContext(AuthContext);
    const {autenticado, usuarioAuth, cerrarSesion} = authContext;

    const history = useHistory();

    const cerrarSesionNav = ()=>{
        cerrarSesion();
        history.push('/')
    }

    return (
        <header className="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
            <div className="m-header">
                <div className="mobile-menu" id="mobile-collapse"><span></span></div>
                <Link to="#!" className="b-brand">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <Link to={`#!`} className="mob-toggler">
                    <i className="ti-more-alt"></i>
                </Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <div className="dropdown drp-user">
                            <Link to="#!" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <i className="ti-user"></i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right profile-notification">
                                <div className="pro-head">
                                    {
                                    autenticado ?
                                    (
                                        <>
                                        <img src={userImg} alt="user-default" className="rounded-circle"/>
                                        <span>{usuarioAuth.username}</span>
                                        <Link to="#!" className="dud-logout" title="Logout"><i className="ti-lock"></i></Link>
                                        </>
                                    )
                                    : 
                                    null
                                    }
                                    </div>
                                <ul className="pro-body">
                                    <li><Link to="#!" className="dropdown-item"><i className="ti-user"></i>Perfil</Link></li>
                                    <li><button onClick={()=> cerrarSesionNav()} className="dropdown-item">
                                        <i className="ti-lock"></i>Cerrar Sesion
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}