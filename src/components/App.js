import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList'

//100th video completed
class App extends Component{
    state={
     images:[]
    };
   
   
    onSearchSubmitUser =async (term)=>{
    const response = await unsplash.get('/search/photos',{
      params:{query:term},
     
      });
      this.setState({images:response.data.results});
    }
    


    render(){
    return(
        <div className="ui container" style={{marginTop:'10px'}}>
            <SearchBar onSubmitUser={this.onSearchSubmitUser}/>
            Found:{this.state.images.length} images
          <ImageList images={this.state.images}/>
        </div>
    )
}
}
export default App;



 // // alternative method 
    //  onSearchSubmitUser(term){
    //     await axios.get('https://api.unsplash.com/search/photos',{
    //       params:{query:term},
    //       headers:{
    //         Authorization:'Client-ID 0dT_5kH5zXNC8VIXaBlnqUUF3OcoJYl5G4Ylecx12vo'
    //        } 
    //       }).then((resp)=>{
    //           console.log(resp.data.results)
    //       })
    //     }