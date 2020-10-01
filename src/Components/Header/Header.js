import React from 'react';
//import  {Link} from 'react-router-dom';

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
                                    <div id="more-details"><small>Cargo</small></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </nav>
        </>
    )
}