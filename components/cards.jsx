import React, { Component } from 'react';


export const CardSimple = ({ titulo, descripcion, icon }) => {
    return (
        <div class="col-xl-4 col-lg-4 col-md-6">
            <div class="single_transport">
                <div class="icon">
                    <img src={icon} alt=""/>
                </div>
                {titulo}
                <p>{descripcion}</p>
            </div>
        </div>
    )
}


export const Cardimage = ({ titulo, descripcion, image }) => {
    return (
        <div className="owl-item" style={{ width: "350px" }}>
            <div class="single_service">
                <div class="thumb">
                    <img src={image}/>
                </div>
                <div class="service_info">
                    <h3>
                        <a href="service_details.html">{titulo}</a>
                    </h3>
                    <p>{descripcion}</p>
                </div>
            </div>
        </div>
    );
}
