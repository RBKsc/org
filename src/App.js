import { useState } from 'react';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/miOrg';


function App() {
  const [mostrarFormulario, actualizarMostrar]=useState(true)
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div className="App">
      {/* {Header()} */}
      {/* <Header></Header> */}
      <Header/>
      {/*{mostrarFormulario===true ? : <></>}*/}
      {mostrarFormulario && <Formulario/> }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
    </div>
  );
}

export default App;
