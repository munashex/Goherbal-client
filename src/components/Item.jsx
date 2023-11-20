import {useDispatch, useSelector} from 'react-redux' 
import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom' 
import { addToCart } from '../state' 


function Item({item}) {

    const dispatch = useDispatch() 
    const navigate = useNavigate() 
    const [count, setCount] = useState(1)

    const {category, price, name, image} = item.attributes 
    
    

  
     
  return (
    <div>
        <div className="border h-full mt-5">
          <img src={`http://localhost:1337${image?.data?.attributes?.url}`} 
           onClick={() => navigate(`/item/${item.id}`)}  
           alt={name}
          />
          <h1 className="text-lg font-bold px-2">{name}</h1> 
          <h1 className="font-bold px-2">R {price}</h1>
  
          <div className="flex flex-col gap-y-2">
          <button 
          onClick={() => dispatch(addToCart({item: {...item, count}}))}
          className="p-1 px-3 text-white mx-2 mt-3 font-bold bg-green-700"> 
          Add to Cart 
          </button>
          <Link to={`/item/${item.id}`} className="px-3 font-bold text-gray-700">View Product</Link>
          </div>
        </div>
    </div>
  )
}

export default Item