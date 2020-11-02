import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authContext from '../../Context/autenticacion/authContext';

const RutaPrivada = ({ component: Component, ...props  }) => {

    const AuthContext = useContext(authContext);
    const { autenticado, cargando } = AuthContext;

    return ( 
        <Route { ...props } render={ props => !autenticado && !cargando ?  (
            <Redirect to="/" />
        )  : (
            <Component {...props} />
        ) } />

     );
}
 
export default RutaPrivada;
