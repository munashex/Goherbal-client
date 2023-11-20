import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Home from './scenes/home/home'  
import Navbar from './scenes/global/Navbar' 
import ItemDetails from './scenes/itemDetails/itemDetails' 
import Checkout from './scenes/checkout/Checkout' 
import Confirmation from './scenes/checkout/Confirmation' 
import CartMenu from './scenes/global/CartMenu' 
import {setIsCartOpen} from './state'

const App = () => {

  return (
    <div style={{fontFamily: ['Poppins', 'sans']}}> 
      <BrowserRouter>
      <Navbar/>
      <div className="mt-16">
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="item/:itemId" element={<ItemDetails/>}/> 
        <Route path="checkout" element={<Checkout/>}/> 
        <Route path="checkout/success" element={<Confirmation/>}/>
      </Routes>
      <CartMenu/>
      </div>
      </BrowserRouter>
    </div>
  )
} 

export default App