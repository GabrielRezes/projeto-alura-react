import React, {Component} from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import ArrayDeNotas from './dados/Notas'
import Categorias from './dados/Categorias'
import './assets/App.css'
import './assets/index.css';


class App extends Component {
  constructor (){
    super();
    this.notas = new ArrayDeNotas();
    this.categorias = new Categorias()
  }

  render () { 
    return (
      <section className='conteudo'>
        <FormularioCadastro 
          categorias={this.categorias}
          criaNotaFormAtrib={this.notas.adicionarNota.bind(this.notas)} 
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias
            categorias={this.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />  
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />  
        </main>
      </section>  
    );
  }    
}

export default App;
