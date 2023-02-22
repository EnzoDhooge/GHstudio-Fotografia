import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

import pubfoto1 from '../../media/galeria-publicitaria1.jpg';
import gasfoto1 from '../../media/galeria-gastronomica1.jpg';
import prodfoto3 from '../../media/galeria-productos3.jpg';
import evfoto3 from '../../media/galeria-eventos3.jpg';

function SecServ() {
    return(
        <ServContainer>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                Servicios Especializados
            </motion.h2>
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
                Algunos Servicios a Brindar
            </motion.h3>
            <div className="servicios">
                <motion.div className='servicio' 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.04 }} 
                >
                    <div className="fotos"
                    style={{background: `url(${pubfoto1})`}}
                    ></div>
                    <h4>FOTOGRAFÍA PUBLICITARIA</h4>
                    <p>
                    La Fotografía Publicitaria es uno de los campos más extensos 
                    de nuestro trabajo, en realidad es difícil definir qué es fotografía 
                    publicitaria, y cuál es la diferencia con la fotografía de moda, 
                    fotografía de catálogo, etc. La gran mayoría de nuestro trabajo 
                    está orientado a la publicidad...
                    </p>
                </motion.div>

                <motion.div className='servicio' 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.04 }} 
                >
                    <div className="fotos"
                    style={{background: `url(${gasfoto1})`}}
                    ></div>
                    <h4>FOTOGRAFÍA GASTRONÓMICA</h4>
                    <p>
                    Como Fotógrafo de Gastronomía (o de alimentación) nuestra 
                    intención siempre es conseguir que cada plato y producto que 
                    fotografiamos, inciten al espectador a consumirlos, de esta 
                    forma las empresas de alimentación consiguen llegar a mucho más 
                    público y mostrar sus productos de la forma más atractiva...
                    </p>
                </motion.div>

                <motion.div className='servicio' 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.04 }} 
                >
                    <div className="fotos"
                    style={{background: `url(${prodfoto3})`}}
                    ></div>
                    <h4>FOTOGRAFÍA DE PRODUCTOS</h4>
                    <p>
                    Realizamos fotografías de productos de diferentes tipo: Joyería, 
                    productos del sector de la alimentación, para catálogos y tiendas 
                    virtuales, así como fotografías de productos para páginas web 
                    y ecommerce. Fotografiamos en nuestro estudio, o desplazamos el 
                    equipo a las instalaciones de nuestros clientes...
                    </p>
                </motion.div>

                <motion.div className='servicio' 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ scale: 1.04 }} >
                    <div className="fotos"
                    style={{background: `url(${evfoto3})`}}
                    ></div>
                    <h4>FOTOGRAFÍA DE EVENTOS</h4>
                    <p>
                    Fotógrafo de eventos, espectáculos, congresos, fiestas, 
                    reuniones o celebraciones. Realizamos reportajes fotográficos 
                    de cualquier evento, espectáculo musical, fotografía de obras 
                    teatrales o actuaciones en directo. Reportajes fotográficos de 
                    presentaciones de libros, conferencias, talleres o congresos...
                    </p>
                </motion.div>
            </div>
                <motion.a href='/servicios' 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }}>
                    Ver todos los servicios
                </motion.a>
        </ServContainer>
    )
}

export default SecServ;

const ServContainer = styled.div`
    width: 75%;
    height: auto;
    margin: 170px auto;
    text-align: center;

    h2{
        font-size: 2.3rem;
    }

    h3{
        font-size: 1.5rem;
        padding: 0;
        margin-bottom: 80px;
        color: #705000;
    }

    a{
        color: #fff;
        background: #BF8810;
        text-decoration: none;
        display: inline-block;
        margin: 50px 20px;
        padding: 10px 30px;
        border-radius: 5px;
    }

    .servicios{
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-gap: 40px;
        grid-template-columns: repeat(4, minmax(200px, 1fr));
        grid-auto-rows: minmax(250px, auto);
        grid-auto-flow: dense;

        .servicio{
            border-radius: 5px;
            text-align: left;
            background: #EAEAEA;
            filter: drop-shadow(0px 0px 15px #CFCFCF);
            overflow: hidden;
            .fotos{
                background-size: cover !important;
                background-position: center center !important;
                background-repeat: no-repeat !important;
                width: 100%;
                height: 150px;
            }
            h4{
                color: #705000;
                padding: 0 8px;
                margin-top: 35px;
                margin-bottom: -5px;
            }
            p{
                color: #474B4E;
                padding: 0 8px 10px 8px;
            }
        }
    }

    @media (min-width: 1600px) {
        width: 70%;
    }

    @media (min-width: 1700px) {
        width: 60%;
    }

    @media (max-width: 1400px) {
        width: 90%;
    }

    @media (max-width: 1100px){
        .servicios{
            grid-template-columns: repeat(2, minmax(200px, 1fr));
        }
    }

    @media (max-width: 1000px){
        width: 80%;
    }

    @media (max-width: 600px){
        h2{
            font-size: 1.8rem;
        }
        h3{
            font-size: 1.3rem;
            margin-bottom: 70px;
        }
        .servicios{
            grid-template-columns: repeat(1, minmax(200px, 1fr));
            .servicio{
                h4{
                    font-size: 1.1rem;
                    margin-top: 35px;
                    margin-bottom: -5px;
                }
                p{
                    font-size: 1rem;
                }
            }
        }
    }

    @media (max-width: 420px){
        width: 90%;
        h2{
            font-size: 1.5rem;
        }
        h3{
            font-size: 1.1rem;
            margin-bottom: 70px;
        }
        .servicios{
            grid-template-columns: repeat(1, minmax(200px, 1fr));
            .servicio{
                h4{
                    font-size: 1rem;
                    margin-top: 35px;
                    margin-bottom: -5px;
                }
                p{
                    font-size: 0.95rem;
                }
            }
        }
    }
`