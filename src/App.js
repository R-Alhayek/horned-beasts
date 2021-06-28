import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
render (){
  return (
    <div id='mainDiv'>
     <Header/> 
     <Main/>
     <Footer/>
    </div>
  )
}
}

export default App;