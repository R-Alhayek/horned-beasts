import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Data from './component/data.json';


class App extends React.Component {

  constructor(props)  {
    super (props);
    this.state = {
        dataArr : Data,
    }
}
    
updateOriginalArr = (dataArr) =>{
    this.setState({
        dataArr 
    });

}

render (){
  return (
    <div id='mainDiv'>
     <Header/> 
     <Main renderFilterdAnimal ={this.updateOriginalArr} newDataArr ={this.state.dataArr}/>
     <Footer/>
    </div>
  )
}
}

export default App;