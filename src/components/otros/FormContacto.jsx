import React, {useState} from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { Formik } from 'formik';
import axios from 'axios';


function FormContacto() {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return(
        <ContactoContainer id='contacto'>
            <section className="contacto-container">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Contactanos!
                </motion.h2>
                <motion.div className='met-contacto'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <div className='wsp'>
                        <h3>Envíanos un mensaje vía Whatsapp</h3>
                        <p>Tenés preguntas? Tenemos respuestas! Dejanos tus consultas sin compromiso.</p>
                        <motion.a href="https://wa.me/5493516517794?text=Hola!%20Quería%20realizar%20la%20siguiente%20consulta..." target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}>
                            Enviar Whatsapp
                            {/* <WspLogo/> */}
                        </motion.a>
                    </div>
                    <div className='mail'>
                        <h3>También nos podes dejar un mail</h3>

                        <Formik

                            initialValues={{
                                nombre: '',
                                correo: '',
                                descripcion: ''
                            }}

                            validate={(valores) => {
                                let errores = {};

                                // Validacion nombre
                                if(!valores.nombre){
                                    errores.nombre = 'Por favor ingresa un nombre.'
                                } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                                    errores.nombre = 'El nombre solo puede contener letras y espacios, no debe tener más de 40 caracteres.'
                                }

                                // Validacion correo
                                if(!valores.correo){
                                    errores.correo = 'Por favor ingresa un correo electrónico.'
                                } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                                    errores.correo = 'El correo solo puede contener letras, números, puntos, guiones y guión bajo.'
                                }

                                // Validacion descripcion
                                if(!valores.descripcion){
                                    errores.descripcion = 'Por favor ingresa un mensaje.'
                                }

                                return errores;
                            }}

                            onSubmit={ async(valores, {resetForm}) => {
                                const url = 'https://fotografia.ga/mail';
                                const data = {
                                    nombre: valores.nombre,
                                    correo: valores.correo,
                                    descripcion: valores.descripcion
                                };

                                await axios.post(url, data)
                                    .then(function(response) {
                                        console.log('success');
                                    })
                                    .catch(function (error) {
                                        console.log(error);
                                    });

                                resetForm();
                                cambiarFormularioEnviado(true);
                                setTimeout(() => cambiarFormularioEnviado(false), 10000);
                            }}
                        >

                            {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (
                                <form className='formulario' onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor='nombre'>Nombre</label>
                                        <input 
                                            type="text" 
                                            id='nombre' 
                                            name='nombre' 
                                            placeholder='Escribe tu nombre' 
                                            value={values.nombre}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor='correo'>Correo</label>
                                        <input 
                                            type="email" 
                                            id='correo' 
                                            name='correo' 
                                            placeholder='Escribe tu dirección de correo' 
                                            value={values.correo}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor='descripcion'>Mensaje</label>
                                        <textarea 
                                            id='descripcion' 
                                            name='descripcion' 
                                            placeholder='Escribe tu mensaje' 
                                            value={values.descripcion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}>
                                        </textarea>
                                        {touched.descripcion && errors.descripcion && <div className="error">{errors.descripcion}</div>}
                                    </div>
                                    <motion.button type='submit' 
                                        whileHover={{ scale: 1.1 }} 
                                        whileTap={{ scale: 0.9 }}>
                                        Enviar</motion.button>
                                    {formularioEnviado && <p className="exito">Enviado con éxito!</p>}
                                </form>
                            )}
                        </Formik>

                    </div>
                </motion.div>
            </section>
        </ContactoContainer>
    )
}

export default FormContacto;

const ContactoContainer = styled.div`
    color: #333;
    padding: 0;
    margin-bottom: 100px;
    .contacto-container{
        width: 80%;
        margin: 0 auto;
        h2{
            text-align: center;
            font-size: 2.4rem;
            margin-bottom: 40px;
            margin-top: 120px;
        }
    }
    .met-contacto{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .wsp{
            width: 50%;
            margin-right: 20px;
            h3{
                color: #705000;
                font-size: 1.9rem;
                margin-bottom: 20px;
            }
            p{
                color: #474B4E;
                font-size: 1.2rem;
                width: 70%;
                margin-bottom: 50px;
            }
            a{
                font-size: 1.3rem;
                color: #fff;
                background: #BF8810;
                text-decoration: none;
                padding: 20px;
                display: flex;
                width: 80%;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                filter: drop-shadow(5px 5px 8px #9F9F9F);
            }
        }
        .mail{
            width: 50%;
            h3{
                color: #705000;
                font-size: 1.9rem;
                margin-bottom: 20px;
            }
            .formulario{
                overflow: hidden;
                div{
                    margin-bottom: 20px;
                }
                label{
                    color: #474B4E;
                    font-weight: bold;
                    font-size: 1.07rem;
                }
                input, textarea{
                    background: #e0e0e0;
                    font-size: 1rem;
                    font-family: open sans;
                    padding: 10px;
                    display: block;
                    width: 100%;
                    min-height: 40px;
                    border: none;
                    border-radius: 4px;
                }
                textarea{
                    min-width: 100px;
                    min-height: 80px;
                }
                button{
                    color: #fff;
                    background: #BF8810;
                    padding: 10px 20px;
                    margin-bottom: 20px;
                    margin-left: 10px;
                    font-size: 1.3rem;
                    border: none;
                    border-radius: 4px;
                    filter: drop-shadow(5px 5px 8px #9F9F9F);
                    cursor: pointer;
                }
            }
        }
    }
    .error{
        color: red;
    }
    .exito{
        color: green;
    }
    @media (max-width: 800px){
        .contacto-container{
            width: 95%;
            h2{
                font-size: 2.3rem;
            }
        }
        .met-contacto{
            .wsp{
                h3{
                    font-size: 1.5rem;
                    margin-bottom: 5px;
                }
                p{
                    font-size: 1.05rem;
                }
                a{
                    font-size: 1.2rem;
                    padding: 15px;
                }
            }
            .mail{
                h3{
                    font-size: 1.5rem;
                }
                .formulario{
                    label{
                        font-size: 1.03rem;
                    }
                    input, textarea{
                        font-size: 0.9rem;
                        padding: 7px 10px;
                        min-height: 30px;
                    }
                    button{
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }
    @media (max-width: 500px){
        .contacto-container{
            width: 90%;
            h2{
                font-size: 2.2rem;
                margin-bottom: 35px;
            }
        }
        .met-contacto{
            flex-direction: column;
            
            .wsp{
                width: 100%;
                margin-right: 0;
                text-align: center;
                h3{
                    font-size: 1.3rem;
                }
                p{
                    font-size: 1.1rem;
                    width: 90%;
                    margin: 0 auto;
                    margin-bottom: 20px;
                }
                a{
                    font-size: 1.2rem;
                    padding: 14px;
                    width: 90%;
                    margin: 0 auto;
                    margin-bottom: 80px;
                    filter: drop-shadow(5px 5px 8px #909090);
                }
            }
            .mail{
                width: 100%;
                
                h3{
                    text-align: center;
                    font-size: 1.3rem;
                    margin-bottom: 30px;
                }
                .formulario{
                    div{
                        width: 90%;
                        margin: 0 auto;
                        margin-bottom: 7px;
                    }
                    label{
                        color: #575B5E;
                        font-size: 1.02rem;
                        text-align: left;
                    }
                    input, textarea{
                        font-size: 0.9rem;
                        padding: 8px;
                    }
                    textarea{
                        max-width: 100%;
                    }
                    button{
                        width: 90%;
                        margin: 0 auto;
                        margin-bottom: 20px;
                        display: block;
                        padding: 10px 20px;
                        font-size: 1.15rem;
                        filter: drop-shadow(5px 5px 8px #909090);
                    }
                }
            }
        }
    }
`;