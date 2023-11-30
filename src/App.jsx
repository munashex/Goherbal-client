import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './scenes/home/home'  
import Navbar from './scenes/global/Navbar' 
import ItemDetails from './scenes/itemDetails/itemDetails' 
import Checkout from './scenes/checkout/checkout' 
import Confirmation from './scenes/checkout/Confirmation' 
import CartMenu from './scenes/global/CartMenu'  
import Category from './scenes/category/Category'
import Footer from './scenes/global/Footer' 
import Whatsapp from './scenes/global/Whatsapp' 
import About from './scenes/about/About' 
import NotFound from './scenes/NotFound/NotFound'
import {  HelmetProvider } from 'react-helmet-async';

const App = () => {

  return (
    <HelmetProvider>
     <div style={{fontFamily: ['Poppins', 'sans']}} className="w-[100%]"> 
      <BrowserRouter>
      <Navbar/>
      <div className="mt-12">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="item/:itemId" element={<ItemDetails/>}/> 
        <Route path="category/:categoryId" element={<Category/>}/>  
        <Route path="/about" element={<About/>}/> 
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <CartMenu/>
      <Whatsapp/>
      </div>
      </BrowserRouter>
    </div>
    </HelmetProvider>
  )
} 

export default App