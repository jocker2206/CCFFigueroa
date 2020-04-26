import React, { Component, Fragment } from 'react';
import Slider from '../components/slider';
import Info from '../components/info';
import Carousel from '../components/carousel';
import Contacto from '../components/contacto';
import Imagff from '../components/imagff';
import Views from '../components/views';
import Opiniones from '../components/opiniones';
import Registro from '../components/registro';

export default class Elementos extends Component 
{
    render ()
    {
        return(
            <Fragment>

            <Slider descripcion="Todos los elementos" 
            style={{ height: "300px" }}/>
              <Info/>
                <Carousel/>
                <Contacto 
                    titulo="titulo"
                    descripcion="descripcion"
                    numero="cel"
                />
                <Imagff
                     titulo="oruehfuiwhr"
                     descripcion="ekfuhvoeh"
                     btn="krgr"
                />
                <Views/>
                <Opiniones/>
                <Registro/>
            </Fragment>
        );
    }
}