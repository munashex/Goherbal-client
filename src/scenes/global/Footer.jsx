import { Link } from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa"
import { MdOutlineMail } from "react-icons/md"
import { FaFacebook } from "react-icons/fa"


function Footer() {

  const category =  [
        { name: 'Echinacea' },
        { name: 'Joint and Muscle Support' },
        { name: 'Digestive Health' },
        { name: 'Immune Boosters' },
        { name: 'Anti-inflammatory and Antioxidants' },
        { name: "Women's Health" },
        { name: 'Blood Purification and Cleansing' },
        { name: 'Other Seeds' },
      ]
      


  return (
 <footer className="mt-11 bg-green-700 p-4 text-white">
    <div className="grid grid-cols-2 justify-items-center md:text-lg">
       <div className="space-y-3">
       <h1 className="font-bold">shop</h1> 

      <div className="space-y-1">
       {category.map((item) => (
        <div key={item.name}> 
       <Link to={`/category/${item.name}`}>{item.name}</Link>
       </div>
        ))}
       </div>  
       </div>
         
         <div className="space-y-3">
            <h1 className="font-bold">Get in touch</h1> 
             
             <div className="flex flex-col gap-y-2">
                <a className="inline-flex items-center gap-x-2 underline underline-offset-2" href={`tel:${+27678918922}`}>
                    <FaPhoneAlt/> +27 678 918 922 
                </a>

                <a className="inline-flex  items-center gap-x-2 underline underline-offset-2" href={`mailto:${'gonatural97@gmail.com'}`}>
                <MdOutlineMail size={23}/> Email us 
                </a>

                <a className="inline-flex items-center gap-x-2 underline underline-offset-2" href="https://www.facebook.com/profile.php?id=100091994448985"> 
               <FaFacebook size={23}/> facebook 
                </a>
             </div>
         </div>

    </div>

    <h1 className="text-center my-3">© 2023 GoNatural Herbal</h1>
 </footer>
  )
}

export default Footer