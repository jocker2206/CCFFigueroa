import React, { Fragment } from 'react'
import Head from 'next/head'
import App from 'next/app';
import Navbar from '../components/navbar';
import Pie from '../components/pie';

class MyApp extends App {

  constructor(props) {
    super(props);
  }

  render() {
    const { Component, pageProps } = this.props

    return ( 
      <Fragment>
          <Head>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <title>Consultores y Constructores F Figueroa</title>
            <link rel="shortcut icon" href="/img/logo-unu.png"/>
 
           <link rel="stylesheet" href="css/bootstrap.min.css"/>
            <link rel="stylesheet" href="css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="css/magnific-popup.css"/>
            <link rel="stylesheet" href="css/font-awesome.min.css"/>
            <link rel="stylesheet" href="css/themify-icons.css"/>
            <link rel="stylesheet" href="css/nice-select.css"/>
            <link rel="stylesheet" href="css/flaticon.css"/>
            <link rel="stylesheet" href="css/gijgo.css"/>
            <link rel="stylesheet" href="css/animate.css"/>
            <link rel="stylesheet" href="css/slick.css"/>
            <link rel="stylesheet" href="css/slicknav.css"/>
            <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css"/>

            <link rel="stylesheet" href="css/style.css"/>
            <link rel="stylesheet" href="css/responsive.css"/>
            
          </Head>

          <Navbar/>

          <Component {...pageProps}/>


          <Pie/>

          

      </Fragment>)
  }
}

export default MyApp;