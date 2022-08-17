import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './components/Home/Home';
import { Header } from './components/Home/Navbar/Header';
 
 

function App() {
  return (
    <div className="App">
 <Header/>
 <Home/>
    </div>
  );
}

export default App;
