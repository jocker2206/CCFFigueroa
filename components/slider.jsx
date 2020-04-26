import React, { Component } from 'react';


export default class slider extends Component
{

    constructor(props)
    {
        super(props);
    }

    render (){

        let { style } = this.props;

        return(
            <div class="slider_area">
                <div class="single_slider  d-flex align-items-center slider_bg_1"
                    style={style}
                >
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-xl-8">
                                <div class="slider_text text-center justify-content-center">
                                    <p>{this.props.descripcion}</p>
                                    <h3>{this.props.titulo}</h3>
                                    {this.props.button ? <a class="boxed-btn3" href="service.html">{this.props.button}</a> : null}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }


}