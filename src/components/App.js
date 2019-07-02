import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from './SearchBar';
import ImageList from '../components/ImageList';

class App extends React.Component {

    state={images: []}; //para guardar los resultados de la busqueda

    onSearchSubmit=async (term)=>{ //async es para poder tomar la respuesta del buscador con las imagenes; es una funcion flecha por el error "this.serState is not a function"
        const response=await unsplash.get('/search/photos',{//async nos permite usar await
            params: {query: term}, //tendra las busquedas que quiere hacer el usuario
        });
        
        this.setState({images: response.data.results}); //guardamos los resultados de la busqueda
    }
    render(){
    return(
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            Found: {this.state.images.length} images
            <ImageList images= {this.state.images}/>
        </div>);
    }
}

export default App;