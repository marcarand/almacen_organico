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
                {
                    productos
                    ?
                    <div className="container px-2 py-1">
                    <div className="row mb-3">
                          <div className="col-md-4 themed-grid-col">{articulo}</div>
                          <div className="col-md-2 themed-grid-col">$ {precio}</div>
                          <div className="col-md-2 themed-grid-col">
                              <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={()=>seleccionarProducto({id})}
                            >Comprar</button>
                          </div>
                    </div>
                    </div>
                    :
                    <div className="container px-2 py-1">
                    <div className="row mb-3">
                          <div className="col-md-6 themed-grid-col">{articulo}</div>
                          <div className="col-md-2 themed-grid-col">$ {precio}</div>
                          <div className="col-md-2 themed-grid-col">
                            <button
                                type="button"
                                className="btn btn-outline-success"
                                onClick={()=>eliminarProducto({id})}
                            >Eliminar</button>
                          </div>
                    </div>
                    </div>
                }
        </Fragment>
    );
}

export default Producto;
