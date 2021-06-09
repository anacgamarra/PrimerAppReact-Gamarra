import React from 'react';
import './Cart.css';



const Form = ({onChangeDatos,handleCompra,user,email2}) => {
     return(
      
             <form style={{display:'flex',flexDirection:'column'}}>
                     <span>  <label>Nombre:</label>
                    <input type='Text' placeholder='Nombre' name='name'  onChange={evt => onChangeDatos(evt)} required/></span>
                    <span><label>Apellido:</label>
                    <input type='Text' placeholder='Apellido' name='surname'  onChange={evt => onChangeDatos(evt)}required/></span> 
                    <span><label>Telefono:</label>
                    <input type='Tel' placeholder='Telefono' name='phone' onChange={evt => onChangeDatos(evt)} required/></span> 
                    <span><label>Email:</label>
                    <input type='Email' placeholder='Email' name='email' onChange={evt => onChangeDatos(evt)}  required/></span>
                    <span><label>Confirme su Email:</label>
                    <input type='Email' placeholder='Email' name='email2' onChange={evt => onChangeDatos(evt)} required/></span>
                    <input type='button' className={user.email!='undefined' & user.email!='' & email2!='' & user.email===email2?'btn btnCompra':'oculta'}  disabled={user.email===email2?false:true} id='confirmarCompra' onClick={handleCompra} value='Confirmar Compra'/>
                 
            </form>
      
     )
}


export default Form;