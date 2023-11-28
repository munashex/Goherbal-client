

const Location = () => {

    return (
        <div className="text-center   mt-16 space-y-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold ">Location</h1>
        <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.2148579891264!2d28.304451775257515!3d-26.189688077085528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e953d793eb52649%3A0x232eda862b7c98d9!2sVictoria%20Ave%2C%20Benoni%2C%201501!5e0!3m2!1sen!2sza!4v1700742220851!5m2!1sen!2sza"
         className="w-full"
          height="450" 
          style={{border: 0}} 
          allowfullscreen=""
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade"> 
           </iframe>
      </div>
    )
}

export default Location