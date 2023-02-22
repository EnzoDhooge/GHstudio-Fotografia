import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import gasfoto5 from '../../media/galeria-productos1.jpg';

function SecContact () {
    return(
        <ServContainer>
            <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                Contacto
            </motion.h2>
            <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            >
                ¿Tiene una consulta? Tenemos respuestas
            </motion.h3>
            <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            >
                Si le gusta mi trabajo y tiene una propuesta, no dude en contactarme
            </motion.p>
            <motion.a href='/contacto' 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
            >
                Contactame
            </motion.a>
        </ServContainer>
    )
};

export default SecContact;

const ServContainer = styled.div`
    width: 100%;
    height: auto;
    margin: 0px auto;
    padding-bottom: 70px;
    text-align: center;
    background-image: url(${gasfoto5});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.75);

    h2{
        color: #fff;
        padding-top: 100px;
        font-size: 2.3rem;
    }

    h3{
        color: #e0c070;
        font-size: 1.5rem;
        padding-top: 10px;
        margin-bottom: 80px;
        line-height: 0;
    }

    p{
        color: #fff;
        font-size: 1.2rem;
    }

    a{
        font-weight: bold;
        color: #fff;
        background: #BF8810;
        text-decoration: none;
        display: inline-block;
        margin: 50px 20px;
        padding: 10px 50px;
        border-radius: 5px;
    }

    @media (max-width: 600px){
        h2{
            font-size: 1.5rem;
        }
        h3{
            font-size: 1.1rem;
            margin-bottom: 70px;
        }
        
        p{
            font-size: 0.95rem;
        }
    }
`;