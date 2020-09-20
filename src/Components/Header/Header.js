import React from 'react';
import  {Link} from 'react-router-dom';

import userImg from './user_default.png'

export default function Header(){
    return (
        <>
            <nav className="pcoded-navbar menupos-fixed">
                <div className="navbar-wrapper">
                    <div className="navbar-content scroll-div">
                        <div className="">
                            <div className="main-menu-header">
                                <img src={userImg} alt="User default" className="img-radius"/>
                                <div className="user-details">
                                    <span className="mb-0 font-weight-bold">Nombre del empleado</span>
                                    <div id="more-details"><small>Cargo<i className="fa fa-chevron-down m-l-5"></i></small></div>
                                </div>
                            </div>
                            <ul className="nav pcoded-inner-navbar">
                                <li className="nav-item pcoded-menu-caption">
                                    <label>Usuarios</label>
                                </li>
                                <li className="nav-item pcoded-hasmenu">
                                    <a className="nav-link">
                                        <span className="pcoded-micon">
                                            <i className="feather icon-home"></i>
                                        </span>
                                        <span className="pcoded-mtext">Empleados</span>
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li><Link to="">Crear Empleado</Link></li>
                                        <li><Link to="">Editar Empleado</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item pcoded-hasmenu">
                                    <a href={null} className="nav-link">
                                        <span className="pcoded-micon">
                                            <i className="feather icon-home"></i>
                                        </span>
                                        <span className="pcoded-mtext">Proveedores</span>
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li><Link to="">Crear Proveedor</Link></li>
                                        <li><Link to="">Editar Proveedor</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item pcoded-hasmenu">
                                    <a href={null} className="nav-link">
                                        <span className="pcoded-micon">
                                            <i className="feather icon-home"></i>
                                        </span>
                                        <span className="pcoded-mtext">Clientes</span>
                                    </a>
                                    <ul className="pcoded-submenu">
                                        <li><Link to="">Crear Clientes</Link></li>
                                        <li><Link to="">Editar Clientes</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}