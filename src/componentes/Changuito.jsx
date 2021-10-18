import React from "react";
import { Fragment } from "react";
import "./changuito.css";
import Producto from "./Producto";

const Changuito = ({changuito, agregarProducto, eliminarProducto, producto, productos}) => {

    return (
        <Fragment>
            <div className="changuito">
                <h4>Changuito de compras</h4>
                {
                    changuito.map(
                        producto => (
                            <Producto
                                key = { producto.id }
                                producto = { producto}
                                changuito = { changuito }
                                agregarProducto = {agregarProducto}
                                eliminarProducto = {eliminarProducto}
                            />
                        )
                    )
                }
            </div>
        </Fragment>
    );
}

export default Changuito;
