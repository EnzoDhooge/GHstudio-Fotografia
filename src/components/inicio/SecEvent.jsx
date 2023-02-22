import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";

import DBimg from '../otros/DBimagenes';

function SecEvent() {
    return(
        <ServContainer>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                Eventos
            </motion.h2>
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
                Algunas de las Participaciónes Realizadas
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
                    style={{background: `url(${DBimg.musicales[4]})`}}
                    ></div>
                    <h4>EVENTOS MUSICALES</h4>
                    <p>
                    La participacion a realizar en estos tipos de eventos, busca transmitir 
                    al expectador los sentimientos y emociones vivenciadas en el momento. 
                    Hemos asistido tanto en shows como musicales particulares.
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
                    style={{background: `url(${DBimg.casamientos[5]})`}}
                    ></div>
                    <h4>CASAMIENTOS</h4>
                    <p>
                    Como fotógrafo mi intención es siempre conseguir que cada momento 
                    capturado sea uno inolvidable, y para eso es fundamental poder plasmar 
                    los sentimientos de cada ocasión. Por ello contamos con una amplia 
                    experiencia en el ámbito de las bodas lo que data de nuestra trayectoria.
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
                    style={{background: `url(${DBimg.fiestas[0]})`}}
                    ></div>
                    <h4>FIESTAS PRIVADAS</h4>
                    <p>
                    Realizamos fotografías en eventos de cumpleaños, congresos, 
                    fiestas de 15, reuniones, presentaciones de libros, celebraciones, 
                    talleres, conferencias, festejos de egresados, eventos deportivos, 
                    desfile de moda, etc...
                    </p>
                </motion.div>

                <motion.div className='servicio' 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.1 }}
                whileHover={{ scale: 1.04 }} 
                >
                    <div className="fotos"
                    style={{background: `url(${DBimg.obras[0]})`}}
                    ></div>
                    <h4>OBRAS TEATRALES</h4>
                    <p>
                    La fotografía de eventos teatrales es particularmente muy 
                    atractiva visualmente, permite entrenar al ojo y la rapidez de 
                    ejecución por el dinamismo que concurre encima de las tablas del 
                    escenario. Contamos con el material y equipo necesario para asegurar 
                    un trabajo completo y de calidad.
                    </p>
                </motion.div>
            </div>
            <motion.a href='/eventos' 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}>
                Ver todos los eventos
            </motion.a>
        </ServContainer>
    )
}

export default SecEvent;

const ServContainer = styled.div`
    width: 75%;
    height: auto;
    margin: 170px auto 0px auto; 
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