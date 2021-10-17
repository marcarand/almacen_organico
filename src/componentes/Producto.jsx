import React from "react";
import { Fragment } from "react";

const Producto = ({producto, productos, changuito, agregarProducto}) => {
    const {id, articulo, precio} = producto;
    const seleccionarProducto = ({id}) => {
        let producto = productos.filter(
            producto => producto.id === id
        )[0];
        let nuevo_producto = Object.assign({}, producto);
        nuevo_producto.id = Date.now()
        agregarProducto([...changuito, nuevo_producto]);
    }
    const eliminarProducto = ({id}) => {
        const nuevo_changuito = changuito.filter(
            producto => producto.id !== id
        );
        agregarProducto(nuevo_changuito)
    }

    return (
        <Fragment>
            <div>
               {id} | {articulo} | $ {precio}
                {
                    productos
                    ?
                        <button
                            type="button"
                            onClick={()=>seleccionarProducto({id})}
                        >Comprar</button>
                    :
                        <button
                            type="button"
                            onClick={()=>eliminarProducto({id})}
                        >Eliminar</button>
                }
            </div>
        </Fragment>
    );
}

export default Producto;
