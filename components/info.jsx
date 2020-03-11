import React, { Component } from 'react';
import { CardSimple } from './cards';



export default class Info extends Component
{

    render(){
        return(
            <div class="transportaion_area">
               <div class="container">
                    <div class="row">   
                        <CardSimple
                            titulo="inserte titulo"
                            icon="/img/svg_icon/live.png"
                        />
                        <CardSimple
                            icon="/img/svg_icon/quote.png"
                            titulo="inserte titulo"
                        />
                        <CardSimple
                            icon="/img/svg_icon/airplane.png"
                            titulo="inserte titulo"
                        />
                    </div>
                </div>
            </div>
        );
    }

}