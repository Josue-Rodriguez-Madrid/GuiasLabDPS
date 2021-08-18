
import { object } from 'prop-types';
import React, {Fragment, useState} from 'react';

const Formulario = () => {

const [listas, setListas] = useState({
    producto: '',
    cantidad: ''
})

const handleInputChange = (event) =>{
//console.log(event.target.value)
setListas({
    ...listas,
    [event.target.name] : event.target.value
})
}

const enviarListas = (event) =>{
event.preventDefault();
console.log(listas.cantidad + ' ' + listas.producto )
}


    return (
       <Fragment>
 <h1 >Lista de Compras</h1>

 <form className ="row" onSubmit ={enviarListas}>
     <div className="col-md-3">
     <input 
     placeholder="Ingrese el producto"
     className="form-control"
     type="text"
     name="producto"
     onChange={handleInputChange}
     >
     
     </input>
     </div>

     <div className="col-md-3">
     <input 
     placeholder="Ingrese la cantidad"
     className="form-control"
     type="number"
     name="cantidad"
     onChange={handleInputChange}
     >
     
     </input>
     </div>

     <div className="col-md-3">
     <button
     className="btn btn-success"
     type="submit">
     Agregar
     </button>
     </div>
     <div className="col-md-3">
     <button
     className="btn btn-danger"
     type="reset">
     Reiniciar 
     </button>
     </div>

 </form>
 <h3>{listas.cantidad} - {listas.producto}</h3>
       </Fragment>
           
            
    );
}

export default Formulario;