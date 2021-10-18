import Encabezado from "./componentes/Encabezado";
import Pie from "./componentes/Pie";
import {useState} from "react";
import Producto from "./componentes/Producto";
import { Fragment } from 'react';
import Changuito from "./componentes/Changuito";
import "./central.css";

function App() {

const [productos] = useState([
    {id:1, articulo:"Yerba Mate", precio:550},
    {id:2, articulo:"Tomate Triturado", precio:420},
    {id:3, articulo:"Lentejas x kilo", precio:349},
    {id:4, articulo:"Arroz Integral x kilo", precio:525},
    {id:5, articulo:"Harina Integral x kilo", precio:180},
    {id:6, articulo:"Hongos de Pino x 100gr.", precio:525},
    {id:7, articulo:"Tomates secos x 100gr.", precio:490},
    {id:8, articulo:"Azúcar mascabo x kilo", precio:525}
]);

const [changuito, agregarProducto, eliminarProducto] = useState([]);

  return (
    <Fragment>
        <Encabezado />
        <div className="lista_productos">
        <Changuito
            productos={productos}
            changuito={changuito}
            agregarProducto={agregarProducto}
            eliminarProducto={eliminarProducto}
        />
        {productos.map( producto =>
        <Producto
            key={ Date.now() + producto.id }
            productos={productos}
            producto={producto}
            changuito={changuito}
            agregarProducto={agregarProducto}
            eliminarProducto={eliminarProducto}
        />
        )}
        </div>
        <Pie fecha={2021}/>
    </Fragment>
  );
}

export default App;
