import React,{ Component } from 'react';
import {Cardimage} from './cards';


const Nav = () => {
    return (
        <div class="owl-nav" style={{ 
            position: "absolute", top: "0px", 
            width: "100%", height: "100%",  
            display: "flex", justifyContent: "space-between"
        }}>
            <div class="owl-prev" style={{ background: "orange", display: "flex", alignItems: "center" }}>
                <i class="ti-angle-left"></i>
            </div>
            <div class="owl-next" style={{ background: "orange", display: "flex", alignItems: "center" }}>
                <i class="ti-angle-right"></i>
            </div>
        </div>
    );
}


const Body = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-around", marginLeft: "0.6em" }}>
            <Cardimage
                style={{ marginLeft: "3em" }}
                titulo="Air Freight"
                descripcion="Listo..."
                image="/img/service/1.png"
            />
            <Cardimage
                image="/img/service/2.png"
            />
            <Cardimage
                image="/img/service/3.png"
            />
        </div>
    )
}


export default class Carousel extends Component
{
    render(){
        return(
            <div class="service_action_area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section_title mb-50 text-center">
                                <h3>
                                    Nuestros Servicios
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="service_active">
                                <Body/>
                                <Nav/>
                                <div class="owl-dots disabled"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}