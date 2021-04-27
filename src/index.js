import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
class index extends Component{
    render(){
        return(
        <App />
        )
    }
}
ReactDOM.render(<App />,
    document.querySelector('#root')
      )