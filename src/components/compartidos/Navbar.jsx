import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BurguerButton from "./BurguerButton";

function NavBar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }

    const resProblemBar = () => {
        if (clicked) {
            handleClick()
        }
    }

    return (
        <>
            <NavContainer>
                <div className="div-logo">
                    <motion.h2 className="arriba"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        GUSTAVO
                    </motion.h2>
                    <motion.h2 className="abajo"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        HERNANDEZ
                    </motion.h2>
                    <motion.p 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        FOTOGRAFIA
                    </motion.p>
                </div>
                
                <motion.div className={`links ${clicked ? 'active' : ''}`} 
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <a onClick={resProblemBar} href="/" >
                        Inicio
                    </a>
                    <a onClick={resProblemBar} href="/servicios" >
                        Servicios
                    </a>
                    <a onClick={resProblemBar} href="/eventos" >
                        Eventos
                    </a>
                    <a onClick={resProblemBar} href="/contacto" >
                        Contacto
                    </a>
                </motion.div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
            </NavContainer>
        </>
    )
}

export default NavBar;

const NavContainer = styled.nav`
    background-color: #111;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    box-shadow: 0px 0px 100px rgb(81, 81, 81);

    .div-logo{
        text-align: center;
    }

    h2{
        color: #fff;
        font-size: 37px;
        font-family: 'Bebas Neue', cursive;
        font-family: 'Open Sans', sans-serif;
        padding: 0px 80px;
        margin: 5px 0 0 0;
        z-index: -1;
        @media(max-width: 1100px){font-size: 30px;}
        @media(max-width: 580px){
            padding: 0 40px;
            font-size: 25px;
        }
        @media(max-width: 450px){
            font-size: 20px;
            padding: 0 20px;
        }
    }
    .arriba{
        margin-bottom: 0;
    }
    .abajo{
        margin-top: 5px;
        margin-bottom: 15px;
        line-height: 0;
        @media(max-width: 450px) {margin-bottom: 8px;}
    }

    p{
        color: #bbb;
        font-size: 17px;
        pading: 0 ;
        margin-top: 0;
        @media(max-width: 580px){
            font-size: 14px;
        }
        @media(max-width: 450px){
            font-size: 12px;
        }
    }

    a{
        color: #fff;
        text-decoration: none;
        margin-right: 2rem;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        a{
            color: #fff !important;
            display: block;

            &:hover{
                color: #BF8810 !important;
                font-weight: bold;
                font-size: 1.05rem;
                transition: all .2s ease;
            }
        }
        @media(min-width: 768px){
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: #fff;
                display: inline
            }
        }
    }

    .links.active{
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 24vh;
        left: 0;
        right: 0;
        text-align: center;
        a{
            font-size: 2rem;
            margin-top: 1rem;
            color: #fff;
        }
    }

    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
`;

const BgDiv = styled.div`
    background-color: #222;
    position: absolute;
    top: -700px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease;
    &.active{
        border-radius: 0 0 70% 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }
`;