import React from 'react';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Componentes
import Header from '../../Components/Layouts/Header/Header';
import Navbar from '../../Components/Layouts/Navbar/Navbar';
import Empleados from '../../Components/Empleados';
//import FormularioEmpleado from '../../Components/FormEmpleado';

export default function PanelAdmin() {
    return (
        <>
            <Header/>
            <Navbar/>
           
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <Empleados/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
