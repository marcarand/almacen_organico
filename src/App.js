import Encabezado from "./componentes/Encabezado.jsx";
import Pie from "./componentes/Pie.jsx";
import {useState} from "react";
import Producto from "./componentes/Producto.jsx";
/*
    revisar la importación
*/


function App() {

const [productos, guardarProductos] = useState([
    {id:1, nombre:"Yerba Mate", precio:550},
    {id:2, nombre:"Tomate Triturado", precio:420},
    {id:3, nombre:"Lentejas x kilo", precio:349},
    {id:4, nombre:"Arroz Integral x kilo", precio:525},
]);

  return (
    <fragment>
        <Encabezado />
        Almacén Orgánico - compra online
        {productos.map( producto =>
        <Producto producto={producto} />
        )}
        <Pie fecha={2021}/>
    </fragment>
  );
}

export default App;
