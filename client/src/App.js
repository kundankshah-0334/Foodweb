import './App.css';
import Home from './screens/Home';
import {BrowserRouter, link , Route , Routes} from "react-router-dom"
import Login from './screens/Login';
import Signup from './screens/Signup';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { CartProvider } from './component/ContextReducer';
import Cart from './screens/Cart';
import Myorder from './screens/Myorder';
var link_back = "http://localhost:8000/api/"
function App() {
  return (
    <CartProvider>
       <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/myOrder' element={<Myorder/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
 
  );
}

export default App;
