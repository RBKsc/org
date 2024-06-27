import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
     //Desestructuración
     const { colorPrimario, colorSecundario, titulo, id} = props.datos
     const {colaboradores, eliminarColaborador, actualizarColor, like}= props

     let obj = {
         borderColor:colorPrimario
     }
 
 
     return <> 
     { colaboradores.length > 0 &&
     <section className="equipo" style={{backgroundColor:hexToRgba (colorPrimario, 0.6)}}>
         <input
         type="color"
         className="input-color"
         value={colorPrimario}
         onChange={(evento)=>{
            actualizarColor(evento.target.value, id)
         }}
         />
         <h3 style={obj}>{titulo}</h3>
         <div className="colaboradores">
         {
         colaboradores.map((colaborador, index)=> <Colaborador 
            datos={colaborador} 
            key={index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            like={like}
         />)
         }
         </div>
         </section>
        }
        </>
}

export default Equipo