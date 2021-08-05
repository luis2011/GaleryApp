import React, { useEffect, useReducer, useState } from 'react'
import { ContactosReducer } from '../reducers/ContactosReducer'
import FromularioAdd from './FromularioAdd'
import TablaContactos from './TablaContactos'


const init = ()=>{
    const contactos = localStorage.getItem("contactos")
   
    return contactos ? JSON.parse(contactos): [];
    // si contactos existe en localStorage pasa con parse a js, y sino devuelve un [ ] vacio
};

const Contactos = () => {
    
   const [state, dispatch] = useReducer(ContactosReducer, [], init)
   
   // seteamos el localStorage
   useEffect(() => {
      localStorage.setItem("contactos", JSON.stringify(state))
   }, [state])
  //JSON.stringify() : convierte todo a string

   const [formView, setFormView] = useState(false)

    return (
        <div className="container mt-3">
            
            <button onClick={()=> {setFormView(!formView)}} 
            className="btn btn-success">
              {formView ? " - Cerrar Formulario" : "+ Agregar Contacto"}
               </button>
                 
            {
              
                formView && <FromularioAdd dispatch={dispatch}/>
            }

            
            <TablaContactos contactos={state} dispatch={dispatch}/>

        </div>
    )
}

export default Contactos
