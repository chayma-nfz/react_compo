import React, { Component } from 'react';
import './App.css';
import Adress from './Components/Profil/Adress';
import FullName from './Components/Profil/FullName';
import ProfilPhoto from './Components/Profil/ProfilPhoto';
import ReactDOM from 'react-dom';



class App extends Component {
  render() {

    return (

      <div className="App">

    
    <ProfilPhoto/> 
    <FullName/>
    <Adress/> 
    
      </div>
    );
  }
}






export default App;
ReactDOM.render(<App />, document.getElementById('root'));