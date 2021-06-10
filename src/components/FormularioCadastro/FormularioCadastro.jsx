import React, {Component} from 'react';
import './style.css'

class FormularioCadastro extends Component {
    constructor (props) {
        super(props);
        this.titulo = '';
        this.texto = '';
        this.categoria = '';
        this.state = {
            categorias:[],  
            valorTitulo: '', 
            valorTexto: '' ,

        }
    }   

    componentDidMount() {
        this.props.categorias.inscrever(this.novasCategorias.bind(this))
    }

    novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    handleMudancaTitulo (event) {  
        event.stopPropagation();      
        this.setState({valorTitulo: event.target.value})               
    }   

    handlerMudancaTexto (event) {  
        event.stopPropagation();      
        this.setState({valorTexto: event.target.value})              
    }

    handlerMudancaCategoria (event) { 
        event.stopPropagation();              
        this.categoria = event.target.value                                          
    }

    criaNotaForm (event) {
        event.preventDefault();
        event.stopPropagation();
        this.props.criaNotaFormAtrib(this.state.valorTitulo, this.state.valorTexto, this.categoria)
        this.setState({valorTitulo:'', valorTexto: ''})            
    }
    render () {
        return (          
            <form 
                className='form-cadastro'
                onSubmit = {this.criaNotaForm.bind(this)}        
            >               
            <select 
                onChange={this.handlerMudancaCategoria.bind(this)}
                className='form-categorias'
            >    
                <option>Sem Categoria</option>                         
                {this.state.categorias.map((categoria, index) => {
                    return(
                        <option key={index}>{categoria}</option>
                    )
                })}
            </select>               
            <input                
                type="text"  
                value={this.state.valorTitulo}              
                placeholder="Título"
                className='form-cadastro_input'
                onChange = {this.handleMudancaTitulo.bind(this)}
            />
            <textarea
                rows={15}  
                value={this.state.valorTexto}              
                placeholder="Escreva sua nota..."
                className='form-cadastro_input'
                onChange = {this.handlerMudancaTexto.bind(this)}
            ></textarea>
            <button className='form-cadastro_input form-cadastro_submit'>
                Criar Nota
            </button>
          </form>   
        )
    }
}
export default FormularioCadastro;