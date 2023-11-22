import {useSelector, useDispatch} from 'react-redux'
import {useNavigate, Link} from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { GrCart } from "react-icons/gr" 
import Logo from '../../assets/Logo.png'
import {setIsCartOpen} from '../../state'



const Navbar = () => {
const navigate = useNavigate() 
const cart = useSelector((state) => state.cart.cart)  
const dispatch = useDispatch()





    return (
        <div className="bg-green-700 fixed top-0 left-0 w-full z-20">
         {/* navbar on sm screens  */} 

         <div className="flex justify-between p-2.5 md:hidden">

          <div className="px-2.5 flex  items-center gap-x-5">
            <span>
          <FaBarsStaggered size={35} color="white"/>  
          </span>

          <Link onClick={() => navigate('/')} to="/">
          <img src={Logo} className="w-40" /> 
          </Link>
          </div> 

          <div className="px-2.5 flex items-center gap-x-5">
            <span className="text-white"><IoSearch size={35}/></span> 

            <span className="inline-flex items-center">
            <button onClick={() => dispatch(setIsCartOpen({}))}><GrCart size={35} className="text-white"/></button>
            <button className="bg-black text-white   px-2 rounded-full">{cart?.length === 0 ? null : cart?.length} </button>
            </span>
          </div>

         </div> 

         {/* navbar on md and lg screens   */} 

         <div className="p-2.5 hidden  md:flex px-3 lg:px-7 items-center justify-between "> 

         <div className="flex gap-x-8 items-center">
          
          <Link onClick={() => navigate('/')} to="/">
         <img src={Logo} className="w-48"/>
         </Link>

          <div className="flex items-center">
          <input  
          className="h-9 w-56 placeholder:text-lg placeholder:font-semibold px-2 lg:w-96  outline-none"  
          placeholder='Search....'
          /> 

           <h1 className="text-white text-lg p-1 border h-9 px-3">All categories</h1>
           <button className="border px-1 h-9"><IoSearch size={28} color="white"/></button>
          </div>

         </div>
           
         <span className="inline-flex items-center">
         <button onClick={() => dispatch(setIsCartOpen({}))}><GrCart size={35} className="text-white"/></button>
            <button className="bg-black text-white text-lg   px-2 rounded-full">{cart?.length === 0 ? null : cart?.length} </button>
            </span>
         
         </div>

        </div> 
    )
} 

export default Navbar