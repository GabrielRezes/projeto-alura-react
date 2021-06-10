import React, {Component} from 'react';
import './style.css' 

class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {
            categorias: [],
            valorInput: '' 
        }
    }
    
    componentDidMount() {
        this.props.categorias.inscrever(this.novaCategoria.bind(this));
    }    

    novaCategoria(categorias) {
       this.setState({...this.state, categorias})
    }

    handlerCategoriaAdicionada(event){
        this.setState({valorInput: event.target.value})
    }

    handlerKeyUp(event) {        
        if(event.key === 'Enter') {            
            let novaCategoria = event.target.value
            this.props.adicionarCategoria(novaCategoria)  
            this.setState({valorInput:''})                    
        }              
    }

    render() {
       return(
           <section className='categorias'>
                <ul className='lista-categorias'>
                   {this.state.categorias.map((categoria, index) => {
                       return (
                           <li 
                            className='lista-categorias_item'
                            key={index}
                           >
                           {categoria}    
                           </li>   
                       )
                   })}
                </ul>
                <input 
                    className='lista-categorias_input'
                    type='text'
                    value={this.state.valorInput}
                    onChange={this.handlerCategoriaAdicionada.bind(this)}
                    placeholder='Adicionar Categoria' 
                    onKeyUp={this.handlerKeyUp.bind(this)}   
                />
           </section>

       )
    }
}

export default ListaDeCategorias