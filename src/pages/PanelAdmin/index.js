import React from 'react';
import {Route, Switch} from 'react-router-dom';

//Componentes
import Header from '../../Components/Layouts/Header/Header';
import Navbar from '../../Components/Layouts/Navbar/Navbar';
import Inicio from '../../Components/Layouts/Inicio';
import Empleados from '.../../Components/Empleados';

//import FormularioEmpleado from '../../Components/FormEmpleado';

/*
<Router>
    <Route exact path="panel-admin/empleados" render={{Empleados}}/>
</Router>
*/

export default function PanelAdmin() {
    
    return (
        <>
            <Header/>
            <Navbar/>
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="row">
                        <div className="col-sm-12">
                        <Switch>
                            <Route path={`/inicio`}><Inicio/></Route>                      
                            <Route path={`/empleados`}><Empleados/></Route>
                        </Switch>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
