import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import DBimg from './DBimagenes';

function ResumenSer () {
    return (
        <ConteinerPrin>
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                Servicios Especializados
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
            >
                Gustavo Hernandez, fotógrafo profesional, he trabajado para diferentes 
                empresas del sector de la comunicación y la imagen, así como para 
                particulares, realizando trabajos de fotografía 
                <a href="#publicitaria" > publicitaria </a> 
                en diferentes áreas, fotografía 
                <a href="#gastronomica" > gastronómica</a>, de 
                <a href="#productos" > productos</a>, 
                <a href="#eventos" > eventos </a> de distintos tipos y fotografía de 
                <a href="#retrato" > retrato </a> para profesionales de cualquier sector, 
                así como grabación y edición de vídeo profesional. Realizamos también 
                Tours Virtuales de instalaciones de empresas y para el sector 
                inmobiliario.
                <br/>
                <br/>
                Con más de 15 años de experiencia trabajando en el sector de la 
                publicidad, sus trabajo está orientado para que los clientes 
                queden satisfechos y consigan su principal objetivo, vender. 
                Para esto es necesario adaptarse a las necesidades de cada 
                cliente, y realizar un trabajo a medida.
                <br/>
                <br/>
                Precios razonables y asequibles que incluyen el trabajo de 
                edición, retoque y post-producción teniendo amplios conocimientos 
                en este campo, y que abaratan las producciones en precio y tiempo.
                <br/>
                <br/>
                La imagen en una empresa es una inversión rentable que repercute en 
                ventas y éxito, unas buenas fotografías ayudan a destacar frente a la 
                competencia y a tener una mayor importancia en el mercado.
            </motion.p>

            <section id="publicitaria">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Fotografía Publicitaria
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    La Fotografía Publicitaria es uno de los campos más extensos de 
                    nuestro trabajo, en realidad es difícil definir qué es fotografía 
                    publicitaria, y cuál es la diferencia con la fotografía de moda, 
                    fotografía de catálogo, etc. La gran mayoría de nuestro trabajo 
                    está orientado a la publicidad, por eso en esta galería hemos 
                    querido mostrar algunas de las fotografías que se han destinado a 
                    campañas de publicidad de ropa y productos textiles, fotografías 
                    para calendarios, para dossier de empresa, campañas publicitarias 
                    con fotografía de moda, etc.
                </motion.p>

                <div className="galeria" >
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.pubfoto[0]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    ></motion.div>
                    <motion.div className="fotos vertical"
                    style={{background: `url(${DBimg.pubfoto[1]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.pubfoto[2]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.pubfoto[3]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.pubfoto[4]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    ></motion.div>
                </div>
            </section>

            <section id="gastronomica">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Fotografía Gastronómica
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Cómo Fotógrafo de Alimentación (gastronómica) nuestra intención 
                    siempre es conseguir que cada plato y producto que fotografiamos, 
                    inciten al espectador a consumirlos, de esta forma las empresas 
                    de alimentación consiguen llegar a mucho más público y mostrar sus 
                    productos de la forma más atractiva.
                    <br/>
                    <br/>
                    Existen muchas opciones y posibilidades para la fotografía de platos 
                    y alimentación, con diferentes ambientes, decorados, bodegones de varios 
                    productos con decoración, o bien utilizando solo un fondo blanco y una 
                    buena iluminación.
                </motion.p>

                <div className="galeria">
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.gasfoto[0]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    ></motion.div>
                    <motion.div className="fotos vertical"
                    style={{background: `url(${DBimg.gasfoto[1]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.gasfoto[2]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.gasfoto[3]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.gasfoto[4]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    ></motion.div>
                </div>
            </section>

            <section id="productos">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Fotografía de Productos
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Realizamos fotografías de productos de diferentes tipo: Joyería, 
                    productos del sector de la alimentación, para catálogos y tiendas 
                    virtuales, así como fotografías de productos para páginas web y 
                    ecommerce. Fotografiamos en nuestro estudio, o desplazamos el equipo 
                    a las instalaciones de nuestros clientes.
                    <br/>
                    <br/>
                    Podemos realizar las fotografías de los productos sobre fondos 
                    neutros, con la posibilidad de recortar el fondo para catálogos 
                    o páginas de venta online (tiendas online). También existe la posibilidad 
                    de realizar montajes a modo de bodegones de productos, con diferente 
                    estilismo y decoración. Realizamos fotografías de productos de todo 
                    tipo, principalmente de tamaño pequeño o mediano. Para realizar el 
                    diseño de los catálogos, en muchas ocasiones realizamos una sesión 
                    en estudio o en exteriores con modelos, para poder mostrar los productos 
                    de una forma más visual de cara a potenciales compradores.
                </motion.p>

                <div className="galeria">
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.prodfoto[0]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    ></motion.div>
                    <motion.div className="fotos vertical"
                    style={{background: `url(${DBimg.prodfoto[1]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.prodfoto[2]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.prodfoto[3]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.prodfoto[4]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    ></motion.div>
                </div>
            </section>

            <section id="eventos">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Fotografía de Eventos
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Fotógrafo de eventos, espectáculos, congresos, fiestas, reuniones 
                    o celebraciones. Realizamos reportajes fotográficos de cualquier 
                    evento, espectáculo musical, fotografía de obras teatrales o 
                    actuaciones en directo. Reportajes fotográficos de presentaciones 
                    de libros, conferencias, talleres o congresos. Grabación en 
                    vídeo de eventos. Eventos deportivos y competiciones. Fotografías 
                    para Photocall. Eventos de empresa, o fotografía para fiestas privadas.
                </motion.p>

                <div className="galeria">
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.evfoto[0]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    ></motion.div>
                    <motion.div className="fotos vertical"
                    style={{background: `url(${DBimg.evfoto[1]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.evfoto[2]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.evfoto[3]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.evfoto[4]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    ></motion.div>
                </div>
            </section>

            <section id="retrato">
                <motion.h3
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Fotografía de Retrato
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    En la Fotografía de Retrato entrarían varios temas principales 
                    dentro de los que trabajamos, uno de los principales tipos de 
                    retrato fotográfico que realizamos es el de Retrato Corporativo, 
                    es decir, de directivos o trabajadores de una empresa, o bien 
                    autónomos y empresarios que desean disponer de un Retrato 
                    Profesional, algo muy importante como imagen de empresa. Estas 
                    fotografías podemos realizarlas en las propias instalaciones de 
                    la empresa, utilizando como contexto el entorno laboral. También 
                    podemos realizar las fotografías en nuestro estudio de fotografía, 
                    donde normalmente utilizaremos fondos neutros (blanco, negro, 
                    gris) para resaltar el protagonismo del retratado. Aunque hemos 
                    realizado muchos Retratos Profesionales para empresarios y trabajadores, 
                    así como fotografías de equipos de profesionales, también hemos realizado 
                    retratos para escritores, artistas, músicos, médicos, etc. retratos 
                    para páginas web, blogs, para perfiles en redes sociales, retratos para 
                    editoriales, libros de autor, y promociones musicales o artísticas.
                </motion.p>

                <div className="galeria">
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.retfoto[0]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    ></motion.div>
                    <motion.div className="fotos vertical"
                    style={{background: `url(${DBimg.retfoto[1]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.retfoto[2]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.retfoto[3]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                    <motion.div className="fotos"
                    style={{background: `url(${DBimg.retfoto[4]})`}}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    ></motion.div>
                </div>
            </section>
        </ConteinerPrin>
    )
}

export default ResumenSer;

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
        padding-top: 100px;
        padding-bottom: 100px;
        h3{
            font-size: 2rem;
            color: #705000;
        }
        p{
            margin-bottom: 50px;
        }
    }

    .galeria{
        width: 100%;
        margin: 0 auto;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: minmax(250px, auto);
        grid-auto-flow: dense;
        .fotos{
            background-size: cover !important;
            background-position: center center !important;
            background-repeat: no-repeat !important;
        }
        .vertical{
            grid-row: span 2;
        }
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
            p{
                font-size: 1rem;
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
            p{
                font-size: 0.95rem;
            }
        }
    }
`