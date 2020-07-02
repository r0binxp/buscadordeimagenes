import React from 'react';
import './App.css';
import Buscador from './components/Buscador'
import Resultados from './components/Resultados'

class App extends React.Component {
  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }
  paginaAnterior = (event) => {
    let pagina = parseInt(this.state.pagina);
    pagina -= 1;
    this.setState({
      pagina
    },() => {
      this.consultarApi();
      this.scroll();
    });

   
  }
  paginaSiguiente = (event) => {
    
    // leer state de pagina actual
    let pagina = parseInt(this.state.pagina);
    // sumar 1 a la pagina actual
    pagina += 1;
    // agregar el cambio al state
    this.setState({
      pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });
  }
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start')
  }
  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
    console.log(url)

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes: resultado.hits}))
  
  }

  datosBusqueda = (termino) =>{
    this.setState({
      termino: termino,
      pagina: 1
    },() =>{
      this.consultarApi()
    })
  }
  
  render(){
    return (
      <div className="app container">
        <div className="jumbotron bg-secondary">
          <h1 className="lead text-center mb-5">Buscador de Imágenes <small>By r0bin</small></h1>
                      
              <Buscador 
                datosBusqueda={this.datosBusqueda}
              />
        </div>
        <Resultados
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
        />
        
      </div>
    );

  }
}

export default App;
