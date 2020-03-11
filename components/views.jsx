import React, { Component} from 'react';

export default class Views extends Component{

    render(){
        return(
            <div class="counter_area">
            <div class="container">
                <div class="offcan_bg">
                    <div class="row">
                        <div class="col-xl-3 col-md-3">
                            <div class="single_counter text-center">
                                <h3> <span class="counter">42</span> <span>+</span> </h3>
                                <p>Countries Covered</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-3">
                            <div class="single_counter text-center">
                                <h3> <span class="counter">97</span> <span>+</span> </h3>
                                <p>Business Success</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-3">
                            <div class="single_counter text-center">
                                <h3> <span class="counter">2342</span></h3>
                                <p>Happy Client</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-3">
                            <div class="single_counter text-center">
                                <h3> <span class="counter">3245</span></h3>
                                <p>Business Done</p>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        );
    }
 } 