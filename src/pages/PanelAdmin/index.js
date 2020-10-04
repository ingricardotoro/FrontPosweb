import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Componentes
import Header from '../../Components/Layouts/Header/Header';
import Inicio from '../../Components/Layouts/Inicio';

import Empleados from '.../../Components/Empleados';
/*
import FormularioEmpleado from '../../Components/FormEmpleado';
<Route exact parh={`/panel-admin/empleados/nuevo`} component={FormularioEmpleado}/>
*/
export default function PanelAdmin() {

    return (
        <>
        <Router>
            <Header/>
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <Route exact path={`/panel-admin/inicio`} component={Inicio}/>                      
                            <Route exact path={`/panel-admin/empleados`} component={Empleados}/>
                        </div>

                    </div>
                </div>
            </div>
        </Router>
        </>
    )
}
