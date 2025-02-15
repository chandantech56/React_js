import logo from './logo.svg';
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Component/FunctionalComponent';
import FunctionalComponent from './Component/FunctionalComponent';
import ClassComponent from './Component/ClassComponent';

import Navbar from  './Component/Navbar';
import Footer from  './Component/Footer';
import Message from  './Component/Message';
import TodoList from  './Component/TodoList';
import Employee from './Component/Employee';


function App() {
  return (
    
      <>

      <Navbar/>
      <h1>Hello Im a React</h1> 
      <img src={logo} alt="Logo" width={200} />;
      {/* <h4>javascript Library</h4>
      <p>React is a Single page Website</p>
      <FunctionalComponent name= 'john' subject='react'/>
      <ClassComponent productName='Tshirt' price = '$20'/> */}
       <Footer/>

      <Message/>

      <TodoList/>
      <Employee/>
      
      </>
    
  );
}


export default App;
