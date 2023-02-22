import './SlideWelcomeSer.scss';
import React from 'react';
import { motion } from "framer-motion";

function SlideWelcomeSer () {
    return(

        <div className="contenedor-principal-WelSer">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
                <h2>Servicios a Brindar</h2>
            </motion.div>
        </div>
    )
}

export default SlideWelcomeSer;