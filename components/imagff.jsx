import React, { Component } from 'react';

export default class Imagff extends Component
{
    render(){
        return(
                 <div class="chose_area ">
                     <div class="container">
            <div class="features_main_wrap">
                <div class="row  align-items-center">
                    <div class="col-xl-5 col-lg-5 col-md-6">
                        <div class="about_image">
                            <img src="img/about/about.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="features_info">
                            <h3>{this.props.titulo}</h3>
                            <p>{this.props.descripcion}
                            </p>
                            <ul>
                                <li> {this.props.descripcion} </li>
                                <li> {this.props.descripcion} </li>
                                <li> {this.props.descripcion}.</li>
                            </ul>

                            <div class="about_btn">
                                <a class="boxed-btn3-line" href="about.html">{this.props.btn}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        );

    }
}