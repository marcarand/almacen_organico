import React from "react";

const Producto = ({producto}) => {
    return (
        <div>
        {producto.id} | {producto.nombre} | {producto.precio}
        </div>
    );
}

export default Producto;
