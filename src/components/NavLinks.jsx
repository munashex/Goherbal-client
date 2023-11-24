import React from 'react'
import { Link } from 'react-router-dom';


function NavLinks({closeNav}) {

    const links = [
        {name: "Digestive Health", url: "Digestive Health" },
        {name: "Immune Boosters", url: "Immune Boosters" },
        {name: "Women's Health", url: "Women's Health" },
        {  name: 'Echinacea', url: 'Echinacea' },
        {  name: "Joint Support", url: 'Joint and Muscle Support' },
        {  name: "Anti-inflammatory", url: "Anti-inflammatory and Antioxidants" },
        { name: "Blood Cleansing", url: 'Blood Purification and Cleansing' },
        {  name: "Seeds", url: 'Other Seeds' },
      ];


  return (
    <div className=" text-white p-2 w-full  animate-fade-down"> 
        <div className="flex flex-col bg-green-800 p-2 text-lg  py-3 rounded-md items-center gap-y-5  font-bold my-8">
        {links?.map((item) => (
            <Link key={item.name}   to={`/category/${item?.url}`} onClick={() => closeNav()}> 
               {item?.name}
            </Link>
        ))}
         <Link to="/about" onClick={() => closeNav()}>About us</Link>
        </div> 
       
    </div>
  )
}

export default NavLinks