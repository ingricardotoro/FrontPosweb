import React from 'react';
import {Link} from 'react-router-dom';

import logo from './logo.png';
import userImg from '../Header/user_default.png';

export default function Navbar(){
    return (
        <header className="navbar pcoded-header navbar-expand-lg navbar-light headerpos-fixed">
            <div className="m-header">
                <div className="mobile-menu" id="mobile-collapse"><span></span></div>
                <Link to="/" className="b-brand">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
                <Link to="" className="mob-toggler">
                    <i className="feather icon-more-vertical"></i>
                </Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <div className="dropdown-menu dropdown-menu-right profile-notification">
                            <div className="pro-head">
                                <img src={userImg} alt="User-default" className="img-radius"/>
                            QUE PEDO QUE PEDO
                            </div>
                            <ul className="pro-body">
                                <li>
                                    <Link to="" className="dropdown-item">
                                        <i className="fas fa-circle"></i>
                                        Perfil
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="dropdown-item">
                                        <i className="fas fa-circle"></i>
                                        Cerrar Sesion
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}