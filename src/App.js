import Encabezado from "./componentes/Encabezado.jsx";
import Pie from "./componentes/Pie.jsx";
import {useState} from "react";
import Producto from "./componentes/Producto.jsx";
/*
    revisar la importación
*/


function App() {

const [productos, guardarProductos] = useState([
    {id:1, nombre:"Diccionario Inglés-Español", precio:550},
    {id:2, nombre:"Recetas de Cocina Peruana", precio:1220},
    {id:3, nombre:"El señor de los anillos", precio:3499},
    {id:4, nombre:"Python Cookbook", precio:5250},
]);

  return (
    <fragment>
        <Encabezado />
        Editorial BitBooks - Compra online
        {productos.map( libro =>
        <Producto producto={libro} />
        )}
        <Pie fecha={2021}/>
    </fragment>
  );
}

export default App;
