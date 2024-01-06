import './App.css';
import Footer from './Components/Footer/Footer';

import Navbar from './Components/Navbar/Navbar';
import Shope from './pages/Shope';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ShopeCattegory from './pages/ShopeCattegory';
import men_banner from "./Components/Assests/banner_mens.png"
import women_banner from "./Components/Assests/banner_women.png"
import kid_banner from "./Components/Assests/banner_kids.png"
import Product from './pages/Product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path='/' element={<Shope/>}/>
        <Route path='/men' element={<ShopeCattegory banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopeCattegory banner={women_banner} category="women" />}/>
        <Route path='/kids' element={<ShopeCattegory banner={kid_banner} category="kid" />}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
      </Routes>  
     <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
