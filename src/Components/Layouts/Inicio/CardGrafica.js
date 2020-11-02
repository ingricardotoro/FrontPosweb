import React from 'react'

export default function CardGrafica({nombre, cantidad, index}){
    //const {nombre, cantidad} = props;
    return(
        <div className="col-xl-4 col-md-6">
            <div className="card flat-card widget-primary-card bg-success-dark">
                <div className="row-table">
                    <div className="col-sm-6 card-body bg-white">
                        <h6 className="text-dark m-b-5">{nombre}</h6>
                        <h4 className="text-dark mb-0">{cantidad}</h4>
                    </div>
                    <div className="col-sm-6">
                        <div id={"resource-barchart"+index} stylehtml="min-height:60px;">
                            <div className="apexcharts-canvas apexchartstq23cih1 light" id="apexchartstq23cih1"></div>
                            <div className="resize-triggers">
                                <div className="expand-trigger">
                                    <div stylehtml='width: 220px; height: 61px;'></div>
                                </div>
                                <div className="contract-trigger"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}