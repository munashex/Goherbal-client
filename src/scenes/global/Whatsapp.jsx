import { FaWhatsapp } from "react-icons/fa6";

import React from 'react'

function Whatsapp() {
  return (
    <a href="https://wa.me/+27678918922" className="fixed bottom-9 right-7 bg-green-800 p-2 rounded-full"> 
  <FaWhatsapp size={45} color="white"/>
  </a>
  )
}

export default Whatsapp