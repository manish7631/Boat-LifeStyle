import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { Fotter } from './components/Home/Footer/Fotter';
import { Home } from './components/Home/Home';
import { Header } from './components/Home/Navbar/Header';
import { Otp } from './components/Otp/Otp';
import { Payment } from './components/Payment/Payment';
 import {Product} from "./components/Product/Product"
import { ProductDetails } from './components/ProductDetails/ProductDetails';
 
 

function App() {
  return (
    <div className="App">
   <Header/>
      <Routes>
   
        <Route path= "/" element ={<Home/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/:id' element={<ProductDetails/>}/>
        <Route path='/payment' element={<Payment/>} />
        <Route path ='/otp' element={<Otp/>} />
      </Routes>
 
 <Fotter/>
    </div>
  );
}

export default App;
