import React from "react";
import Servicios from '../components/inicio/Slider';
import Presentacion from '../components/inicio/Presentacion';
import SecServ from "../components/inicio/SecServ";
import Excelencia from "../components/otros/Excelencia/Excelencia";
import SecEvent from "../components/inicio/SecEvent";
import SecContact from "../components/inicio/SecContact";


export default function Inicio() {
    return (
        <>
            <Servicios/>
            <Presentacion/>
            <SecServ/>
            <Excelencia/>
            <SecEvent/>
            <SecContact/>
        </>
    )
}