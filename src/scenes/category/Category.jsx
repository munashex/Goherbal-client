import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { setItems } from '../../state';
import Item from "../../components/Item";
import { useEffect } from 'react';
import { FaArrowDown } from "react-icons/fa6"
import { Helmet } from 'react-helmet-async';

function Category() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const getItems = async () => {
    const response = await fetch("http://localhost:1337/api/items?populate=image", { method: "GET" });
    const itemJson = await response.json();
    dispatch(setItems(itemJson.data));
  };

  useEffect(() => {
    getItems();
  }, []);

  const categoryMap = {
    'Echinacea': 'Echinacea',
    'Joint and Muscle Support': 'Joint and Muscle Support',
    'Digestive Health': 'Digestive Health',
    'Immune Boosters': 'Immune Boosters',
    'Anti-inflammatory and Antioxidants': 'Anti-inflammatory and Antioxidants',
    "Women's Health": "Women's Health",
    'Blood Purification and Cleansing': 'Blood Purification and Cleansing',
    'Other Seeds': 'Other Seeds',
    'Miscellaneous': 'Miscellaneous',
    'Unknown Category (not specified)': 'Unknown Category (not specified)',
  };

  const filteredItems = items.filter(
    (item) => item.attributes.category === categoryMap[categoryId]
  );

  return (
    <div className="py-9 m-4">
      <h1 className="text-lg">Home / {categoryId}</h1>


      {/* Echinacea */}
      {categoryId === 'Echinacea' && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Echinacea</h1> 
         <h1 className="md:text-lg"> 
          Explore GoNatural Herbal's Echinacea collection for immune support and wellness. Our carefully crafted products, including capsules, teas, and tinctures, prioritize purity and quality. Discover the power of Echinacea for a natural boost at GoNatural Herbal.
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>

            <Helmet>
              <title>Echinacea</title>
              <meta name="description" content="Explore GoNatural Herbal's Echinacea collection for immune support and wellness. Our carefully crafted products, including capsules, teas, and tinctures, prioritize purity and quality. Discover the power of Echinacea for a natural boost at GoNatural Herbal."/>
            </Helmet>
        </div>
      )}
     
     {/* Joint and Muscle Support */}  
     {categoryId === 'Joint and Muscle Support' && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Joint and Muscle Support</h1> 
         <h1 className="md:text-lg"> 
          Discover GoNatural Herbal's Joint and Muscle Support herb collection, tailored to enhance your well-being. Explore our carefully curated herbs designed to promote joint and muscle health. From traditional remedies to modern solutions, our selection prioritizes quality and effectiveness. Embrace natural support for your joints and muscles with GoNatural Herbal
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>

            <Helmet>
              <title>Joint and Muscle Support</title>
              <meta name="description" content="Discover GoNatural Herbal's Joint and Muscle Support herb collection, tailored to enhance your well-being. Explore our carefully curated herbs designed to promote joint and muscle health. From traditional remedies to modern solutions, our selection prioritizes quality and effectiveness. Embrace natural support for your joints and muscles with GoNatural Herbal"/>
            </Helmet>
        </div>
      )}

       {/* Digestive Health */} 
       {categoryId === 'Digestive Health' && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Digestive Health</h1> 
         <h1 className="md:text-lg"> 
           Explore GoNatural Herbal's Digestive Health collection, crafted to promote overall well-being. Discover our carefully selected herbs designed to support digestive health naturally. From soothing teas to potent supplements, our range prioritizes quality and purity. Trust GoNatural Herbal for digestive wellness through the power of nature
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>

            <Helmet>
              <title>Digestive Health</title>
              <meta name="description" content=" Explore GoNatural Herbal's Digestive Health collection, crafted to promote overall well-being. Discover our carefully selected herbs designed to support digestive health naturally. From soothing teas to potent supplements, our range prioritizes quality and purity. Trust GoNatural Herbal for digestive wellness through the power of nature"/>
            </Helmet>
        </div>
      )}

       {/* Immune Boosters */}
       {categoryId === 'Immune Boosters' && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Immune Boosters</h1> 
         <h1 className="md:text-lg"> 
         Elevate your well-being with GoNatural Herbal's Immune Boosters collection. Discover our selection of carefully chosen herbs designed to strengthen and support your immune system. From potent supplements to immune-boosting teas, our offerings prioritize quality and effectiveness. Trust GoNatural Herbal for natural immune support and overall wellness
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>


            <Helmet>
              <title>Immune Boosters</title>
              <meta name="description" content=" Elevate your well-being with GoNatural Herbal's Immune Boosters collection. Discover our selection of carefully chosen herbs designed to strengthen and support your immune system. From potent supplements to immune-boosting teas, our offerings prioritize quality and effectiveness. Trust GoNatural Herbal for natural immune support and overall wellness"/>
            </Helmet>
        </div>
      )}

      {/* Anti-inflammatory and Antioxidants */} 
      {categoryId === 'Anti-inflammatory and Antioxidants' && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Anti-inflammatory and Antioxidants</h1> 
         <h1 className="md:text-lg"> 
         Experience the benefits of GoNatural Herbal's Anti-inflammatory and Antioxidants collection. Explore our thoughtfully curated herbs designed to provide natural support for reducing inflammation and enhancing antioxidant protection. From powerful supplements to antioxidant-rich teas, our selection prioritizes quality and purity. Trust GoNatural Herbal for holistic well-being through the power of nature
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>

            <Helmet>
              <title>Anti-inflammatory and Antioxidants</title>
              <meta name="description" content="Experience the benefits of GoNatural Herbal's Anti-inflammatory and Antioxidants collection. Explore our thoughtfully curated herbs designed to provide natural support for reducing inflammation and enhancing antioxidant protection. From powerful supplements to antioxidant-rich teas, our selection prioritizes quality and purity. Trust GoNatural Herbal for holistic well-being through the power of nature"/>
            </Helmet>
        </div>
      )}

          {/* Women's Health */}
         {categoryId === "Women's Health" && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Women's Health</h1> 
         <h1 className="md:text-lg"> 
         Prioritize your well-being with GoNatural Herbal's Women's Health collection. Explore our carefully selected herbs tailored to support women's health naturally. From balancing teas to wellness supplements, our offerings emphasize quality and effectiveness. Trust GoNatural Herbal for holistic support in every stage of a woman's health journey
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>


            <Helmet>
              <title>Women's Health</title>
              <meta name="description" content=" Prioritize your well-being with GoNatural Herbal's Women's Health collection. Explore our carefully selected herbs tailored to support women's health naturally. From balancing teas to wellness supplements, our offerings emphasize quality and effectiveness. Trust GoNatural Herbal for holistic support in every stage of a woman's health journey"/>
            </Helmet>
        </div>
      )}
      
      {/* Blood Purification and Cleansing */}
      {categoryId === "Blood Purification and Cleansing" && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Blood Purification and Cleansing</h1> 
         <h1 className="md:text-lg"> 
         Revitalize your well-being with GoNatural Herbal's Blood Purification and Cleansing collection. Explore our meticulously chosen herbs crafted to support natural blood purification and cleansing. From rejuvenating teas to purifying supplements, our selection prioritizes quality and effectiveness. Trust GoNatural Herbal for a holistic approach to enhancing your internal vitality through the power of nature
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>

            <Helmet>
              <title>Blood Purification and Cleansing</title>
              <meta name="description" content=" Revitalize your well-being with GoNatural Herbal's Blood Purification and Cleansing collection. Explore our meticulously chosen herbs crafted to support natural blood purification and cleansing. From rejuvenating teas to purifying supplements, our selection prioritizes quality and effectiveness. Trust GoNatural Herbal for a holistic approach to enhancing your internal vitality through the power of nature"/>
            </Helmet>
        </div>
      )}

        {/* Other Seeds */}
        {categoryId === "Other Seeds" && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Other Seeds</h1> 
         <h1 className="md:text-lg"> 
         Discover the vitality of GoNatural Herbal's Other Seeds collection. Explore our carefully curated selection of diverse seeds, each offering unique benefits to support your well-being. From nutritious supplements to versatile seeds, our collection prioritizes quality and purity. Trust GoNatural Herbal for a natural and wholesome addition to your wellness journey through the power of seeds
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>
         

            <Helmet>
              <title>Seeds</title>
              <meta name="description" content=" Discover the vitality of GoNatural Herbal's Other Seeds collection. Explore our carefully curated selection of diverse seeds, each offering unique benefits to support your well-being. From nutritious supplements to versatile seeds, our collection prioritizes quality and purity. Trust GoNatural Herbal for a natural and wholesome addition to your wellness journey through the power of seeds"/>
            </Helmet>
        </div>
      )}

     {/* Miscellaneous */}
     {categoryId === "Miscellaneous" && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Miscellaneous</h1> 
         <h1 className="md:text-lg"> 
         Explore the diverse world of wellness with GoNatural Herbal's Miscellaneous Herbs collection. Our carefully curated selection of versatile herbs brings you a range of natural benefits. From unique supplements to traditional remedies, our collection prioritizes quality and effectiveness. Trust GoNatural Herbal for a holistic approach to well-being, embracing the power of nature's miscellaneous treasures
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>


            <Helmet>
              <title>Miscellaneous</title>
              <meta name="description" content="Explore the diverse world of wellness with GoNatural Herbal's Miscellaneous Herbs collection. Our carefully curated selection of versatile herbs brings you a range of natural benefits. From unique supplements to traditional remedies, our collection prioritizes quality and effectiveness. Trust GoNatural Herbal for a holistic approach to well-being, embracing the power of nature's miscellaneous treasures"/>
            </Helmet>
        </div>
      )}

     {/* Unknown Category (not specified) */}
     {categoryId === "Unknown Category (not specified)" && (
        <div className="my-4 mb-7 space-y-2"> 
          <h1 className="font-bold text-xl">Unknown Category (not specified)</h1> 
         <h1 className="md:text-lg"> 
         Embark on a journey of discovery with GoNatural Herbal's Unknown Category (not specified) Herbs collection. Uncover the hidden potential of these unique herbs, carefully curated to offer a diverse range of natural benefits. From supplements to herbal blends, our collection prioritizes quality and purity. Trust GoNatural Herbal to introduce you to the wonders of these herbs, promoting holistic well-being through the power of the unknown
          </h1>
          <h1 className="text-lg inline-flex items-center gap-x-2">
            products  ({filteredItems?.length}) <FaArrowDown/> <FaArrowDown/> <FaArrowDown/>
            </h1>


            <Helmet>
              <title>Unknown Category</title>
              <meta name="description" content=" Embark on a journey of discovery with GoNatural Herbal's Unknown Category (not specified) Herbs collection. Uncover the hidden potential of these unique herbs, carefully curated to offer a diverse range of natural benefits. From supplements to herbal blends, our collection prioritizes quality and purity. Trust GoNatural Herbal to introduce you to the wonders of these herbs, promoting holistic well-being through the power of the unknown"/>
            </Helmet>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {filteredItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.id}`} />
        ))}
      </div>


    </div>
  );
}

export default Category;
