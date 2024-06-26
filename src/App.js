import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';


function App() {
  const [mostrarFormulario, actualizarMostrar]=useState(false)
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista equipos
  const Equipos=[
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSEcundario:"#D9F7E9"
    },
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
  ]

  return (
    <div className="App">
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header/>
      {/*{mostrarFormulario===true ? : <></>}*/}
      {mostrarFormulario && <Formulario/> }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      <Equipo equipo="Programación"/>
      <Equipo equipo="Front End"/>
      <Equipo equipo="Data Science"/>
      <Equipo equipo="Devops"/>
      <Equipo equipo="UX y Diseño"/>
      <Equipo equipo="Móvil"/>
      <Equipo equipo="Innovación y Gestión"/>
      
    </div>
  );
}

export default App;
