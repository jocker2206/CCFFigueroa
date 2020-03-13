import React, {Component} from 'react';
 export default class Opiniones extends Component{
     render(){
         return(
        <div class="testimonial_area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7">
                        <div class="testmonial_active owl-carousel owl-loaded owl-drag">
                           
                            <div class="owl-stage-outer"> 
                            <div class="owl-stage" style={{ transform: "translate3d(-1545px, 0px, 0px)",
                             transition: "all 0.8s ease 0s",
                             width: "3605px" }}/>
                            <div class="owl-item cloned" style={{width:  "515px;" }}/> 
                                <div class="single_carousel">
                                    <div class="single_testmonial text-center">
                                        <div class="quote">
                                            <img src="img/svg_icon/quote.svg" alt=""/>
                                            </div>
                                            <p>Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin.
                                            Pellentesque id dolor tempor sapien feugiat ultrices.</p>
                                            <div class="testmonial_author">
                                            <div class="thumb">
                                            <img src="img/case/testmonial.png" alt=""/>
                                    </div>
                                    <h3>Robert Thomson</h3>
                                    <span>Business Owner</span>
                                      </div>
                                    </div>
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