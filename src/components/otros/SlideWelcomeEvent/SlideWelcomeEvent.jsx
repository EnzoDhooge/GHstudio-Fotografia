import './SlideWelcomeEvent.scss';
import React from 'react';
import { motion } from "framer-motion";

function SlideWelcomeEvent () {
    return(

        <div className="contenedor-principal-WelEvent">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
            >
                <h2>Participaciones Realizadas</h2>
            </motion.div>
        </div>
    )
}

export default SlideWelcomeEvent;