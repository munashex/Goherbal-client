import echinaceaherbs from '../../assets/echinaceaherbs.jpg' 
import ShoppingList from './ShoppingList'
import Categories from '../../components/Categories'
import { Link, useNavigate } from 'react-router-dom'


const Home = () => {

    const navigate = useNavigate()
    return (
        <div className=" ">
         
    
         <div className="relative"> 
         <img src={echinaceaherbs} 
          className="object-cover lg:h-96 w-full" 
          />
          <div className="absolute top-11 bg-black bg-opacity-50 space-y-4 text-white p-3 md:p-7">
          <h1 className="text-xl md:text-2xl text-white font-bold">Echinacea: Immune Support Master</h1>
           <h1 className="md:text-lg">Unleash the immune-boosting prowess of Echinacea. Explore our premium selection for a healthier you</h1>
             <button onClick={() => navigate('/category/Echinacea')} className="bg-green-700   text-lg p-1 md:p-2 " >Discover Echinacea</button>
          </div>
         </div> 
       
         <Categories/>
         <ShoppingList/>


        </div>
    )
} 

export default Home