import React from 'react'

import CardGrafica from './CardGrafica'

export default function Inicio(){
    return(
        <>
            <div className="row">
                <CardGrafica index={1} nombre={'Usuarios'} cantidad={6780}/>
                <CardGrafica index={2} nombre={'Empleados'} cantidad={7451}/>
                <CardGrafica index={3} nombre={'Proveedores'} cantidad={5628}/>
            </div>
        </>
    )
}