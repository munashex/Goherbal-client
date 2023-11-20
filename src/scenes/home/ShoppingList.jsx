import { useEffect, useState } from "react" 
import { useSelector, useDispatch } from "react-redux" 
import {setItems} from '../../state' 
import Item from "../../components/Item"

function ShoppingList() {
const dispatch = useDispatch() 
const [value, setValue] = useState("all") 
const items = useSelector((state) => state.cart.items) 

const getItems = async() => {
    const items = await fetch("http://localhost:1337/api/items?populate=image", {method: "GET"})
    const itemJson = await items.json() 
    dispatch(setItems(itemJson.data))
}

useEffect(() => {
getItems()
}, [])

const Echinacea = items.filter(
    (item) => item.attributes.category === 'Echinacea'
)

const filterByJointAndMuscleSupport = (items) => {
    return items.filter((item) => item.attributes.category === 'Joint and Muscle Support');
};

const Digestive = items.filter(
    (item) => item.attributes.category === 'Digestive Health'
)

const filterByImmuneBoosters = (items) => {
    return items.filter((item) => item.attributes.category === 'Immune Boosters');
};


const filterByAntiInflammatoryAndAntioxidants = (items) => {
    return items.filter((item) => item.attributes.category === 'Anti-inflammatory and Antioxidants');
};


const filterByWomensHealth = (items) => {
    return items.filter((item) => item.attributes.category === "Women's Health");
};


const filterByBloodPurificationAndCleansing = (items) => {
    return items.filter((item) => item.attributes.category === 'Blood Purification and Cleansing');
};


const filterBySeeds = (items) => {
    return items.filter((item) => item.attributes.category === 'Seeds');
};


const filterByMiscellaneous = (items) => {
    return items.filter((item) => item.attributes.category === 'Miscellaneous');
};


const filterByUnknownCategory = (items) => {
    return items.filter((item) => item.attributes.category === 'Unknown Category');
};


const filterByEyeHealthSupplements = (items) => {
    return items.filter((item) => item.attributes.category === 'Eye Health Supplements');
};


  return (
    <div className="mt-8 px-3 lg:px-8">
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