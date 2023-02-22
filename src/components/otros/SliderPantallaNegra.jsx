import React, { useRef } from "react";
import styled from 'styled-components';

import {ReactComponent as FlechaIzquierda} from '../../media/iconmonstr-arrow-64.svg';
import {ReactComponent as FlechaDerecha} from '../../media/iconmonstr-arrow-63.svg';



function SliderPantallaNegra (props) {
    
    const slideshow = useRef(null);

    const siguiente = () => {

        // Comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){

            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0];

            // Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `1500ms ease-out all`;

            // Obtenemos el tamaño del slide
            const tamañoSlide = slideshow.current.children[0].offsetWidth;

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
            
            const transicion = () => {
                // Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;

                // Tomamos el primer elemento y lo mandamos al final
                slideshow.current.appendChild(primerElemento);

                slideshow.current.removeEventListener('transitionend', transicion);
            }
            
            // Eventlistener para cuando termina la animacion
            slideshow.current.addEventListener('transitionend', transicion);
        }
    }
    
    const anterior = () => {

        // Comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0){

            // Obtenemos el ultimo elemento del slideshow
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);

            slideshow.current.style.transition = 'none';
            const tamañoSlide = slideshow.current.children[0].offsetWidth;
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = '1500ms ease-out all';
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    }

    return(
        <Visualizador>
            {/* Pantalla negra y slider */}
            <div className={`${props.clicked ? 'prueba' : 'mientras'}`}>
                <button onClick={props.resProblemBar}>Cerrar</button>
                <SliderContainer>
                    <ContenedorPrincipal>
                        <ContenedorSlideshow ref={slideshow}>
                            <Slide>
                                <img src={props.fotos[0]} alt="Img1"/>
                            </Slide>
                            <Slide>
                                <img src={props.fotos[1]} alt="Img2"/>
                            </Slide>
                            <Slide>
                                <img src={props.fotos[2]} alt="Img3"/>
                            </Slide>
                            <Slide>
                                <img src={props.fotos[3]} alt="Img4"/>
                            </Slide>
                            <Slide>
                                <img src={props.fotos[4]} alt="Img5"/>
                            </Slide>
                        </ContenedorSlideshow>
                        <Controles>
                            <Boton onClick={anterior}>
                                <FlechaIzquierda/>
                            </Boton>
                            <Boton derecho onClick={siguiente}>
                                <FlechaDerecha/>
                            </Boton>
                        </Controles>
                    </ContenedorPrincipal>
                </SliderContainer>
            </div>
        </Visualizador>
    )
}

export default SliderPantallaNegra;

const Visualizador = styled.div``;

const SliderContainer = styled.div`
    max-width: 70%;
    height: 95%;
    margin: auto;
    @media (max-width: 580px){padding-top: 98px;}
    @media (max-width: 451px){padding-top: 72px;}
    
`;

const ContenedorPrincipal = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    width: 100%;
`;

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    min-height: auto;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 1;
    position: relative;
    img{
        width: auto;
        height: auto;
    }
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;

    &:hover {
        // background: rgba(0, 0, 0, .2);
        path{
            fill: #fff;
        }
    }

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'}
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
`;