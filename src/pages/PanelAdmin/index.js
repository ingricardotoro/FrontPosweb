import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';

//Componentes
import Header from '../../Components/Layouts/Header/Header';
import Inicio from '../../Components/Layouts/Inicio';
import Empleados from '.../../Components/Empleados';

//import FormularioEmpleado from '../../Components/FormEmpleado';

/*
<Router>
    <Route exact path="panel-admin/empleados" render={{Empleados}}/>
</Router>
*/

export default function PanelAdmin() {
    const match = useRouteMatch();
    return (
        <>
        <Switch>
            <Header/>
            <div className="pcoded-main-container">
                <div className="pcoded-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <Route path={`${match.url}/inicio`} ><Inicio/></Route>                      
                            <Route path={`${match.url}/empleados`}><Empleados/></Route>
                        </div>
                    </div>
                </div>
            </div>
        </Switch>
        </>
    )
}
