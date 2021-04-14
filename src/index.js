import React from 'react';   //importafuncion React desde la libreria React
import ReactDOM from 'react-dom';  //importa funcion React-dom desde la libreria react-dom
import './index.css';   // 'importa todo el codigo css que esta dentro de index.css'
import App from './App';   //archivo  app dentro del archivo app que esta a la misma altura de este archivo
import reportWebVitals from './reportWebVitals';
 //ReactDOM.render()que quiero renderizar  (en este caso el contenido de app.js)
  //    <App />  Todo lo que importo  de APP.js lo pondra aca
ReactDOM.render(
  <React.StrictMode>  
    <App />   
  </React.StrictMode>,
  document.getElementById('root')  //donde lo quiero renderizar
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
