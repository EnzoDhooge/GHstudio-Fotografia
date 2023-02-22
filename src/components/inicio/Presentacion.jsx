import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import fotopersonal from '../../media/img-personal.jpg';

function Presentacion () {
    return(
        <PresConteiner>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                Gustavo Hernandez · Fotógrafo Profesional
            </motion.h2>
            <motion.h4
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
                Estudio Fotografía y Video
            </motion.h4>
            <div className="container-presentacion">
                <motion.p
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                >
                    Mi nombre es <b>Gustavo Hernandez</b> (Córdoba, 1978), estudié 
                    Bellas Artes en Sevilla y actualmente resido en Córdoba donde 
                    desarrollo mi trabajo como <b>fotógrafo, videógrafo y diseñador 
                    gráfico freelance</b>. He impartido multitud de cursos y 
                    talleres de Diseño Gráfico, Retoque Fotográfico y Fotografía 
                    Digital para diferentes centros y escuelas de formación. He 
                    realizado exposiciones en diferentes salas del territorio español, 
                    incluso extranjero, exponiendo mis obras por Córdoba, Sevilla, 
                    Málaga, Barcelona, Canarias, Argentina…
                    <br/>
                    <br/>
                    He recibido diferentes premios y publicado en revistas especializadas 
                    en <b>fotografía artística</b>. Mi trabajo actualmente se centra en el 
                    mundo de la comunicación y la publicidad, donde principalmente ofrezco 
                    mis servicios de fotografía y vídeo a profesionales del sector, como agencias 
                    de publicidad, marketing, particulares, o empresas que buscan un producto muy 
                    determinado y personalizado. 
                    <br/>
                    <br/>
                    <b>Fotografía publicitaria de productos, alimentación, eventos, instalaciones, 
                    retratos profesionales, Vídeos publicitarios, y diseño gráfico</b>, llevando 
                    más de 15 años trabajando para empresas y particulares de toda España. Me siento 
                    muy afortunado de trabajar en lo que me apasiona, la imagen y la comunicación, un 
                    mundo complicado pero en el que cada día supone un nuevo reto, y eso me divierte y 
                    motiva para seguir luchando día a día. Puedes contactar conmigo a través del 
                    formulario de CONTACTO, por teléfono, o a través de las Redes Sociales.
                </motion.p>
                <motion.img src={fotopersonal} className="img-fotografo" alt="Imagen fotografo"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
                />
            </div>
        </PresConteiner>
    )
}

export default Presentacion;

const PresConteiner = styled.div`
    width: 75%;
    height: auto;
    margin: 170px auto;
    text-align: center;

    h2{
        font-size: 2.3rem;
    }

    h4{
        font-size: 1.5rem;
        padding: 0;
        margin-bottom: 80px;
        color: #705000;
        line-height: 0;
    }

    .container-presentacion{
        display: flex;

        p{
            color: #474B4E;
            font-size: 1.1rem;
            width: 100%;
            text-align: justify;
            margin-right: 0px;
        }

        .img-fotografo{
            width: 40%;
            height: auto;
            margin: 0 0 0 120px;
            border-radius: 2px;
        }
    }

    @media (min-width: 1600px) {
        width: 70%;
    }

    @media (min-width: 1700px) {
        width: 60%;
        .container-presentacion{
            p{margin-right: 20px;}
        }
    }

    @media (max-width: 1400px) {
        width: 90%;
        .container-presentacion{
            .img-fotografo{
                margin: 0 0 0 80px;
            }
        }
    }

    @media (max-width: 1200px){
        .container-presentacion{
            .img-fotografo{
                margin: 0 0 0 20px;
            }
        }
    }

    @media (max-width: 1100px){
        width: 98%;
        .container-presentacion{
            .img-fotografo{
                margin: 0 0 0 20px;
            }
        }
    }

    @media (max-width: 1000px){
        width: 80%;
        .container-presentacion{
            display: inline;
            .img-fotografo{
                width: 60%;
                margin: 0 auto;
            }
        }
    }

    @media (max-width: 600px){
        margin: 80px auto;
        h2{
            font-size: 1.8rem;
        }
        h4{
            font-size: 1.3rem;
            margin-bottom: 70px;
        }
        .container-presentacion{
            p{
                font-size: 1rem;
            }
            .img-fotografo{
                width: 70%;
            }
        }
    }

    @media (max-width: 420px){
        width: 90%;
        margin: 60px auto;
        h2{
            font-size: 1.5rem;
        }
        h4{
            font-size: 1.1rem;
            margin-bottom: 60px;
        }
        .container-presentacion{
            p{
                font-size: 0.95rem;
                margin-bottom: 40px;
            }
            .img-fotografo{
                width: 70%;
            }
        }
    }
`