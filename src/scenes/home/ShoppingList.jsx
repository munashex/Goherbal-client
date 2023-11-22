import { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux" 
import {setItems} from '../../state' 
import Item from "../../components/Item"

function ShoppingList() {
const dispatch = useDispatch() 
const items = useSelector((state) => state.cart.items) 

const getItems = async() => {
    const items = await fetch("http://localhost:1337/api/items?populate=image", {method: "GET"})
    const itemJson = await items.json() 
    dispatch(setItems(itemJson.data))
}

useEffect(() => {
getItems()
}, [])

const Digestive = items.filter(
    (item) => item.attributes.category === 'Echinacea'
)


  return (
    <div className="mt-11 md:mt-14 px-3 md:px-7 lg:px-12 space-y-7">
      <h1 className="text-xl font-bold  md:text-2xl lg:text-3xl">Shop Our Best Sellers</h1>
     
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
     {Digestive.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`}/>
        ))}
     </div>

    </div>
  )
}

export default ShoppingList