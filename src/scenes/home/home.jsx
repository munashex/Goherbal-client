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
  <img
    src={echinaceaherbs}
    className="object-cover w-full h-72 md:h-96"
    alt="Echinacea Herbs"
  />
  <div className="absolute inset-0 flex flex-col justify-center gap-y-2 items-center bg-black bg-opacity-60 p-4 md:p-8 text-white">
    <h1 className="text-2xl  animate-fade-right animate-delay-150 md:text-4xl font-bold text-center mb-2 leading-tight">Immune Support Master</h1>
    <p className="text-lg animate-fade-right animate-delay-300 md:text-xl text-center mb-4 max-w-md">Unlock the immune-boosting power of Echinacea. Explore our premium selection for a healthier you.</p>
    <button
      onClick={() => navigate('/category/Echinacea')}
      className="bg-green-700 text-lg p-2 px-5 md:p-3 animate-fade-right   mb-6 hover:bg-green-600 transition duration-300"
    >
      Discover Echinacea
    </button>
  </div>
</div>








       
         <Categories/>
         <ShoppingList/>
        


        </div>
    )
} 

export default Home