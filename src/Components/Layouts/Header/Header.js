import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
//import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import userImg from './user_default.png';

/*
import Empleados from '../../Empleados';
<Router>
<Route exact path="panel-admin/empleados" component={Empleados}/>
</Router>
*/

export default function Header(){
    const {url} = useRouteMatch();
    return (
        <>
            <nav className="pcoded-navbar menupos-fixed">
                <div className="navbar-wrapper">
                    <div className="navbar-content scroll-div">
                        <div>
                            <div className="main-menu-header">
                                <img src={userImg} alt="User default" className="img-radius"/>
                                <div className="user-details">
                                    <span className="mb-0 font-weight-bold">Nombre del Usuario</span>
                                    <div id="more-details"><small>Rol</small></div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption"><label htmlFor="">Inicio</label></li>
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to={`${url}/inicio`}>
                                    <span className="pcoded-micon"><i className="ti-home"></i></span>
                                    <span className="pcoded-mtext">Inicio</span>
                                </Link>
                            </li>
                            <li className="nav-item pcoded-menu-caption"><label htmlFor="">Usuarios</label></li>
                            
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to={`${url}/empleados`}>
                                    <span className="pcoded-micon"><i className="ti-user"></i></span>
                                    <span className="pcoded-mtext">Empleados</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to="#!">
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