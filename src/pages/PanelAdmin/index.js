import React from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';

//Componentes
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import FormularioEmpleado from '../../Components/FormEmpleado';

export default function PanelAdmin() {
    return (
        <>
            <Header/>
            <Navbar/>
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <FormularioEmpleado/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
