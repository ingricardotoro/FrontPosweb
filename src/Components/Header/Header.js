import React from 'react';
import {Link} from 'react-router-dom';

import userImg from './user_default.png'

export default function Header(){
    return (
        <>
            <nav className="pcoded-navbar menupos-fixed">
                <div className="navbar-wrapper">
                    <div className="navbar-content scroll-div">
                        <div>
                            <div className="main-menu-header">
                                <img src={userImg} alt="User default" className="img-radius"/>
                                <div className="user-details">
                                    <span className="mb-0 font-weight-bold">Nombre del empleado</span>
                                    <div id="more-details"><small>Cargo</small></div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav pcoded-inner-navbar">
                            <li className="nav-item pcoded-menu-caption"><label htmlFor="">Usuarios</label></li>
                            <li className="nav-item">
                                <Link className="nav-link pcoded-hasmenu" to="#!">
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