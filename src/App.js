import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from './components/Home/Home';
import { Header } from './components/Home/Navbar/Header';
 import {Product} from "./components/Product/Product"
 
 

function App() {
  return (
    <div className="App">
   <Header/>
      <Routes>
   
        <Route path= "/" element ={<Home/>} />
        <Route path='/:id' element={<Product/>}/>
      </Routes>
 
 
 
    </div>
  );
}

export default App;
