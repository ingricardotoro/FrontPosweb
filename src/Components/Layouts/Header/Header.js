import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import userImg from './user_default.png';
import Navbar from '../Navbar/Navbar';

import AuthContext from '../../../Context/autenticacion/authContext';

export default function Header(){
    const authContext = useContext(AuthContext);
    const {autenticado, usuario} = authContext;

    return (
        <>
            <Navbar/>
            <nav className="pcoded-navbar menupos-fixed">
                <div className="navbar-wrapper">
                    <div className="navbar-content scroll-div">
                        <div>
                        {
                            autenticado ?
                            (
                                <>
                                <div className="main-menu-header">
                                    <img src={userImg} alt="User default" className="img-radius"/>
                                    <div className="user-details">
                            <span className="mb-0 font-weight-bold">{usuario.username}</span>
                            <div id="more-details"><small>{usuario.role}</small></div>
                                    </div>
                                </div>
                                </>
                            )
                            : 
                            null
                            }
                            
                        </div>
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption"><label htmlFor="">Inicio</label></li>
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to={`/admin/inicio`}>
                                    <span className="pcoded-micon"><i className="ti-home"></i></span>
                                    <span className="pcoded-mtext">Inicio</span>
                                </Link>
                            </li>
                            <li className="nav-item pcoded-menu-caption"><label htmlFor="">Usuarios</label></li>
                            
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to={'/admin/empleados'}>
                                    <span className="pcoded-micon"><i className="ti-user"></i></span>
                                    <span className="pcoded-mtext">Empleados</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to={'/admin/clientes'}>
                                    <span className="pcoded-micon"><i className="ti-user"></i></span>
                                    <span className="pcoded-mtext">Clientes</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to="#!">
                                    <span className="pcoded-micon"><i className="ti-truck"></i></span>
                                    <span className="pcoded-mtext">Proveedores</span>
                                </Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>       
        </>
    )
}