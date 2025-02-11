import logo from './logo.svg';
import './App.css';

import './Component/FunctionalComponent';
import FunctionalComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';

import Navbar from  './Component/Navbar';
import Footer from  './Component/Footer';


function App() {
  return (
    
      <>
      <Navbar/>
      <h1>Hello Im a React</h1> 
      <img src={logo} alt="Logo" width={200} />;
      <h4>javascript Library</h4>
      <p>React is a Single page Website</p>
      <FunctionalComponent name= 'john' subject='react'/>
      <ClassComponent productName='Tshirt' price = '$20'/>
      <Footer/>
      
      </>
    
  );
}


export default App;
