import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRed = React.createRef();
    obtenerDatos = (e) => {
       e.preventDefault();
       const termino = this.busquedaRed.current.value;
       this.props.datosBusqueda(termino)
    }


    render() {
        return(
            <form className="bg-secondary" onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRed} type="text" className="form-control form-control-lg bordered" placeholder="Busca tu Imagen EJ: Futbol"/>

                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-primary btn-block" value="Buscar"/>

                    </div>

                </div>

            </form>

        )
    }
}



export default Buscador; 