import './Excelencia.scss';
import React from 'react';
import { motion } from "framer-motion";


function Excelencia () {
    return(
        <div className='background-excelencia'>
            <motion.div className='contenedor-principal'
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2>Excelencia</h2>
                <p>
                    Nos enfocamos en la coherencia comunicativa debido a que 
                    es clave para que tu mensaje impacte en el consumidor y 
                    para que al mismo tiempo, mejore la identidad y el 
                    posicionamiento de tu marca en el mundo online.
                </p>
            </motion.div>
        </div>
    )
}

export default Excelencia;