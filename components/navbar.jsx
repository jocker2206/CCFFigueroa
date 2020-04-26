import React, { Component } from 'react';


export default class NavBar extends Component
{

    render() {
        return (
            <header>
                <div class="header-area ">
                    <div class="header-top_area d-none d-lg-block">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-xl-4 col-lg-4">
                                    <div class="logo">
                                        <a href="index.html">
                                            <img src="img/logo.png" alt="" width="150px"/>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-md-8">
                                    <div class="header_right d-flex align-items-center">
                                        <div class="short_contact_list">
                                            <ul>
                                                <li><a href="#"> <i class="fa fa-envelope"></i> info@docmed.com</a></li>
                                                <li><a href="#"> <i class="fa fa-phone"></i> 1601-609 6780</a></li>
                                            </ul>
                                        </div>

                                        <div class="book_btn d-none d-lg-block">
                                            <a class="boxed-btn3-line" href="#">Get Free Quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sticky-header" class="main-header-area">
                        <div class="container">
                            <div class="header_bottom_border">
                                <div class="row align-items-center">
                                    <div class="col-12 d-block d-lg-none">
                                        <div class="logo">
                                            <a href="index.html">
                                                <img src="img/logo.png" alt="" width="50px"/>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xl-9 col-lg-9">
                                        <div class="main-menu  d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li><a  href="/">INICIO</a></li>
                                                    <li><a  href="/servicios">SERVICIOS</a></li>
                                                    <li><a href="/acerca">ACERCA DE</a></li>
                                                    <li><a href="#">PAGINAS <i class="ti-angle-down"></i></a>
                                                        <ul class="submenu">
                                                            <li><a href="/detalles_servicios">DETALLES DE SERVICIOS</a></li>
                                                            <li><a href="elementos">ELEMENTOS</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">BLOG <i class="ti-angle-down"></i></a>
                                                        <ul class="submenu">
                                                            <li><a href="/perfil">BLOG</a></li>
                                                            <li><a href="/blog_personal">BLOG PERSONAL</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="contact.html">CONTACTO</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="col-xl-3 col-lg-3 d-none d-lg-block">
                                        <div class="Appointment justify-content-end">
                                            <div class="search_btn">
                                                <a data-toggle="modal" data-target="#exampleModalCenter" href="#">
                                                    <i class="ti-search"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        );
    }

}