import React, { useState, useCallback } from "react";
import ImageViewer from 'react-simple-image-viewer';
import { motion } from "framer-motion";

function Visualizador (props) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };
    
    return(
            <div style={{width: '100%',
                columns: '4 320px',
                overflow: 'hidden',
                position: 'relative',
                zIndex: `${isViewerOpen ? '3' : '0'}`}}>
                {props.images.map((src, index) => (
                    <motion.img
                    whileHover={{ scale: 0.92 }}
                    src={ src }
                    onClick={ () => openImageViewer(index) }
                    width='100%'
                    key={ index }
                    style={{ 
                        margin: 'auto', display: 'block', cursor: 'pointer', marginBottom: '1em' 
                    }}
                    alt=""
                    />
                ))}

                {isViewerOpen && (
                    <ImageViewer
                    src={ props.images }
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                    />
                )}
            </div>
    )
};

export default Visualizador;
