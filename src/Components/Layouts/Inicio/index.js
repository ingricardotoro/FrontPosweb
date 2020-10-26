import React, {useContext} from 'react';

import empleadoContext from '../../../Context/empleados/empleadoContext';
import clienteContext from '../../../Context/clientes/clienteContext';
import proveedorContext from '../../../Context/proveedores/proveedorContext';

import CardGrafica from './CardGrafica';

export default function Inicio(){

    const EmpleadoContext = useContext(empleadoContext);
    const { empleados } = EmpleadoContext;

    const ClienteContext = useContext(clienteContext);
    const { clientes } = ClienteContext;

    const ProveedorContext = useContext(proveedorContext);
    const { proveedores } = ProveedorContext;

    return(
        <>
            <div className="row">
                <CardGrafica index={1} nombre={'Clientes'} cantidad={clientes.length}/>
                <CardGrafica index={2} nombre={'Empleados'} cantidad={empleados.length}/>
                <CardGrafica index={3} nombre={'Proveedores'} cantidad={proveedores.length}/>
            </div>
        </>
    )
}