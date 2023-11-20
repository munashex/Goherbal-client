import echinaceaherbs from '../../assets/echinaceaherbs.jpg' 
import ShoppingList from './ShoppingList'


const Home = () => {

    return (
        <div className=" ">
         
    
         <div className="relative"> 
         <img src={echinaceaherbs} 
          className="object-cover lg:h-96 w-full" 
          />
          <div className="absolute top-11 bg-black bg-opacity-50 space-y-4 text-white p-3 md:p-7">
          <h1 className="text-xl md:text-2xl text-white font-bold">Echinacea: Immune Support Master</h1>
           <h1 className="md:text-lg">Unleash the immune-boosting prowess of Echinacea. Explore our premium selection for a healthier you</h1>
             <button className="bg-green-700   text-lg p-1 md:p-2">Discover Echinacea</button>
          </div>
         </div> 
       
         <ShoppingList/>


        </div>
    )
} 

export default Home