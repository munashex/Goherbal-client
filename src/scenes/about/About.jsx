import Location from '../../components/Location'
import { Helmet } from 'react-helmet-async'

function About() {
  return (
    <div className="px-3 py-11 md:px-11 lg:px-16 space-y-11"> 
    <Helmet>
      <title>About</title> 
      <meta name="description" content="At GoNatural Herbal, we are passionate about providing you with the finest selection of organic herbs, teas, and capsules. We understand the importance of embracing a natural and holistic approach to wellness, and that's why our products are carefully curated to meet the highest standards of quality"/>
    </Helmet>
     
     <div className="space-y-2 md:space-y-3">
     <h1 className="font-bold text-xl md:text-2xl">About Us</h1>  
      <h1 className="text-lg md:text-xl font-semibold">Welcome to GoNatural Herbal – Your Source for Premium Organic Herbs, Teas, and Capsules!</h1>
      <h1 className="md:text-lg">At GoNatural Herbal, we are passionate about providing you with the finest selection of organic herbs, teas, and capsules. We understand the importance of embracing a natural and holistic approach to wellness, and that's why our products are carefully curated to meet the highest standards of quality</h1>
    </div> 

    <div className="space-y-2 md:space-y-3">
        <h1 className="font-bold text-xl md:text-2xl">Our Commitment to Organic Excellence</h1>
        <h1 className="md:text-lg">We take pride in offering products that are 100% organic. Our commitment to organic excellence means that you can trust every purchase from GoNatural Herbal to be free from pesticides, chemicals, and genetically modified ingredients. We believe in the power of nature to promote well-being, and we strive to bring you products that reflect that belief.</h1>
    </div> 

    <div className="space-y-2 md:space-y-3">
      <h1 className="font-bold text-xl md:text-2xl">The GoNatural Herbal Difference</h1>
      <h1 className="md:text-lg"><span className="font-bold">Premium Quality </span>: Our herbs, teas, and capsules are sourced from trusted growers who share our dedication to quality. We believe that providing you with premium products is the foundation of our business</h1>
      <h1 className="md:text-lg"><span className="font-bold">Holistic Wellness </span>:  We believe in the holistic approach to wellness, addressing not just specific symptoms but the overall well-being of the body and mind. Our products are designed to support your journey to a healthier and more balanced lifestyle.</h1>
      <h1 className="md:text-lg"><span className="font-bold">Sustainable Practices </span>: Environmental sustainability is at the core of our values. We work with suppliers who follow ethical and sustainable practices to ensure that our products have a positive impact on both your health and the planet.</h1>
     </div>

     <div className="space-y-2 md:space-y-3">
      <h1 className="font-bold text-xl md:text-2xl">Our Story – GoNatural Herbal</h1>
      <h1 className="md:text-lg">GoNatural Herbal was born out of a passion for natural living. With a deep-rooted belief in the power of herbs and a commitment to promoting a healthier lifestyle, we embarked on a journey to bring the best of nature to your doorstep.</h1>
      <h1 className="md:text-lg">Every product in our collection is a result of extensive research and a dedication to authenticity. We aim to be your trusted partner on your wellness journey, providing you with products that support a natural and balanced lifestyle.</h1>
     </div>

     <div className="space-y-2 md:space-y-3">
      <h1 className="font-bold text-xl md:text-2xl">Join Us on the GoNatural Herbal Journey</h1>
      <h1 className="md:text-lg">Whether you are a seasoned herbal enthusiast or just beginning to explore the benefits of organic living, GoNatural Herbal welcomes you. Explore our collection, discover the goodness of nature, and embark on a journey to a healthier and happier you.</h1>
      <h1 className="font-bold">Thank you for choosing GoNatural Herbal – where nature meets wellness.</h1>
     </div>

      <div>
      <Location/>
      </div>

    </div>
  )
}

export default About