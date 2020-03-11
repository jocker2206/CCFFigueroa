import React,{ Component } from 'React';


export default class Contacto extends Component
{
         render(){
                return(
                    <div class="contact_action_area">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-xl-7 col-md-6">
                                <div class="action_heading">
                                    <h3>{this.props.titulo}</h3>
                                    <p>{this.props.descripcion}</p>
                                </div>
                            </div>
                            <div class="col-xl-5 col-md-6">
                                <div class="call_add_action">
                                <a href="#" class="boxed-btn3">{this.props.numero}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}