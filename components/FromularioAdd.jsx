import React, { useState } from 'react'
import {v4 as uuid} from "uuid"

const FromularioAdd = ({dispatch}) => {
    
   const [data, setData] = useState({nombre:"", numero:""}) // deber llamarse de la misma manera del name del input

   const {nombre, numero} = data;
   
   const handlerChange = (e)=>{
       setData({
           ...data,
           [e.target.name]: e.target.value
          
       })
         
   };

    const actionAdd = {
        type: "add",
        payload:{
            id: uuid(),
            nombre,
            numero,
        },
       
    };

    const handlerAdd = ()=>{
        dispatch(actionAdd)
       setData({nombre:"", numero:""}) // limpio los campos de carga cambiando el setData
    }
    
    return (
        <>
        <div className="container">
            <label className="mx-1 d-grid gap-2">
                Nombre:{" "} 
                  <input 
                  onChange={handlerChange} 
                  name="nombre" 
                  value={nombre}
                  type="text" 
                  className="form-control" 
                  autoComplete="off"/>
            </label>
            <label className="mx-1 d-grid gap-2">
                Número:{" "}
                  <input 
                  onChange={handlerChange} 
                  name="numero" 
                  value={numero}
                  type="text" 
                  className="form-control" 
                  autoComplete="off"/>
            </label>
            <div className="mx-1 d-grid gap-2">
                <button onClick={handlerAdd} className="btn btn-info mt-2">Agregar</button>
            </div>
        </div>
        </>
    )
}

export default FromularioAdd
