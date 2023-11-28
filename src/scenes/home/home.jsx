import echinaceaherbs from '../../assets/echinaceaherbs.jpg' 
import ShoppingList from './ShoppingList'
import Categories from '../../components/Categories'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'



const Home = () => {

    const navigate = useNavigate()
    return (
        <div className="">
        <Helmet>
        <title>GoNatural Herbal</title>
        <meta name="description" content="GoHerbal Natural offers a range of organic herbs, capsules, and seeds. Explore our products including Echinacea, Joint and Muscle Support, Digestive Health, Immune Boosters, Anti-inflammatory and Antioxidants, Women's Health, Blood Purification and Cleansing, and more." />
        </Helmet>
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
         {/* <ShoppingList/> */}
        


        </div>
    )
} 

export default Home