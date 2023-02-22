import React, { useState } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Visualizador from './Visualizador';
import DBimg from './DBimagenes';

function ResumenEvent () {

    const [obras, setobras] = useState(true);
    const [musicales, setmusicales] = useState(true);
    const [casamientos, setcasamientos] = useState(true);
    const [fiestasprivadas, setfiestasprivadas] = useState(true);

    return(
        <ConteinerPrin>
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                Eventos
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                La fotografía es un arte que busca reinterpretar la realidad, como también captar 
                la belleza de un determinado momento y lugar. El marketing basado en la fotografía 
                está hoy a la orden del día: atraer gente, generar tráfico y emociones, conceptos que 
                se tienen muy presente a la hora de fotografiar 
                <a href="#obras"> obras teatrales</a>, 
                <a href="#musicales"> eventos musicales</a>, entre otros más.
                <br/>
                <br/>
                Pero, por encima de cualquier otro motivo, hacemos fotos porque queremos 
                conservar los momentos vividos. Conservar el rostro de nuestros seres queridos, 
                las imágenes de aquellos lugares en los que disfrutamos o aquellos detalles 
                que marcaron parte de nuestra vida, como 
                <a href="#casamientos"> casamientos</a>, 
                <a href="#fiestasprivadas"> fiestas privadas</a>, etc. 
                A continuación paso a mostrarles algunos de los eventos más destacables en 
                los que he formado parte.
            </motion.p>

            {/* Secciones */}
            <section id="obras">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Obras Teatrales
                </motion.h3>
                <motion.div className={`contenedor-eventos ${obras ? 'mostrarMenos' : ''}`}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Visualizador images={DBimg.obras}/>
                </motion.div>
                <>
                    <motion.button
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {
                        setobras(!obras);
                        }}
                    >
                        Mostrar {obras ? 'Mas' : 'Menos'}
                    </motion.button>
                </>
            </section>
            <section id="musicales">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Musicales
                </motion.h3>
                <motion.div className={`contenedor-eventos ${musicales ? 'mostrarMenos' : ''}`}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Visualizador images={DBimg.musicales}/>
                </motion.div>
                <>
                    <motion.button
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {
                        setmusicales(!musicales);
                        }}
                    >
                        Mostrar {musicales ? 'Mas' : 'Menos'}
                    </motion.button>
                </>
            </section>
            <section id="casamientos">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Casamientos
                </motion.h3>
                <motion.div className={`contenedor-eventos ${casamientos ? 'mostrarMenos' : ''}`}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Visualizador images={DBimg.casamientos}/>
                </motion.div>
                <>
                    <motion.button
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {
                        setcasamientos(!casamientos);
                        }}
                    >
                        Mostrar {casamientos ? 'Mas' : 'Menos'}
                    </motion.button>
                </>
            </section>
            <section id="fiestasprivadas">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Fiestas Privadas
                </motion.h3>
                <motion.div className={`contenedor-eventos ${fiestasprivadas ? 'mostrarMenos' : ''}`}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Visualizador images={DBimg.fiestas}/>
                </motion.div>
                <>
                    <motion.button
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        type="button"
                        onClick={() => {
                        setfiestasprivadas(!fiestasprivadas);
                        }}
                    >
                        Mostrar {fiestasprivadas ? 'Mas' : 'Menos'}
                    </motion.button>
                </>
            </section>
        </ConteinerPrin>
    )
}

export default ResumenEvent;

const ConteinerPrin = styled.div`
    padding-top: 0px;
    @media (max-width: 580px){padding-top: 98px;}
    @media (max-width: 451px){padding-top: 72px;}
    width: 75%;
    height: auto;
    margin: 0 auto;

    h2{
        font-size: 2.3rem;
        text-align: center;
        margin-top: 120px;
        margin-bottom: 50px;
    }

    p{
        color: #474B4E;
        font-size: 1.1rem;
        width: 100%;
        text-align: justify;
        a{
            color: #705000;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            &:hover{
                transition: all .3s ease;
                color: #BF8810;
                font-size: 1.14rem;
            }
        }
    }

    section{
        padding-top: 80px;
        h3{
            font-size: 2rem;
            color: #705000;
        }
        button{
            font-size: 1rem;
            color: #fff;
            background: #BF8810;
            display: block;
            margin: auto;
            padding: 10px 40px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
        }
    }

    #fiestasprivadas{
        margin-bottom: 100px;
    }

    .contenedor-eventos{
        width: 100%;
        margin: 50px auto;
        overflow: hidden;
    }

    .mostrarMenos{
        max-height: 800px;
    }

    @media (min-width: 1600px) {
        width: 70%;
    }

    @media (min-width: 1700px) {
        width: 60%;
    }

    @media (max-width: 600px){
        h2{
            font-size: 1.8rem;
        }
        p{
            font-size: 1rem;
        }
        section{
            h3{
                font-size: 1.4rem;
            }
        }
    }

    @media (max-width: 420px){
        width: 90%;
        h2{
            font-size: 1.5rem;
        }
        p{
            font-size: 0.95rem;
        }
        section{
            h3{
                font-size: 1.2rem;
            }
        }
    }
`