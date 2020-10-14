import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Componentes
import Header from '../../Components/Layouts/Header/Header';
import Inicio from '../../Components/Layouts/Inicio';

//CRUD Empleados
import Empleados from '.../../Components/Empleados';
import FormularioEmpleado from '../../Components/Empleados/FormEmpleado';

export default function PanelAdmin() {

    return (
        <>
        <Router>
            <Header/>
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <Route exact path={`/admin/inicio`} component={Inicio}/>                      
                            <Route exact path={`/admin/empleados`} component={Empleados}/>
                            <Route exact path={`/admin/empleados/nuevo`} component={FormularioEmpleado}/>
                        </div>

                    </div>
                </div>
            </div>
        </Router>
        </>
    )
}
