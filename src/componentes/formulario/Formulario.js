import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto/CampoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = ()=>{

    const [nombre, actualizarNombre]=useState("")
    const [puesto, actualizarPuesto]=useState("")
    const [foto, actualizarFoto]=useState("")
    const [equipo, actualizarEquipo]=useState("")

    const manejarEnvio = (evento)=>{
        evento.preventDefault();
        console.log("Manejar ENvio")
        let datosEnviar={
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log (datosEnviar)
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required 
            valor={nombre} 
            setValor={actualizarNombre}
            />

            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required={true}
            valor={puesto} 
            setValor={actualizarPuesto}
            />

            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto} 
            setValor={actualizarFoto}
            />
            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo}
            />

            <Boton>Crear</Boton>
        </form>
    </section>
}

export default Formulario