import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './scenes/home/home'  
import Navbar from './scenes/global/Navbar' 
import ItemDetails from './scenes/itemDetails/itemDetails' 
import Checkout from './scenes/checkout/Checkout' 
import Confirmation from './scenes/checkout/Confirmation' 
import CartMenu from './scenes/global/CartMenu'  
import Category from './scenes/category/Category'
import {setIsCartOpen} from './state' 
import Footer from './scenes/global/Footer' 
import Whatsapp from './scenes/global/Whatsapp'

const App = () => {

  return (
    <div style={{fontFamily: ['Poppins', 'sans']}} className="w-[100%]"> 
      <BrowserRouter>
      <Navbar/>
      <div className="mt-16">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="item/:itemId" element={<ItemDetails/>}/> 
        <Route path="checkout" element={<Checkout/>}/> 
        <Route path="checkout/success" element={<Confirmation/>}/>
        <Route path="category/:categoryId" element={<Category/>
      }/>
      </Routes>
      <Footer/>
      <CartMenu/>
      <Whatsapp/>
      </div>
      </BrowserRouter>
    </div>
  )
} 

export default App