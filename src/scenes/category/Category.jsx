import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../../state';
import Item from '../../components/Item';
import { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';

function Category() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  // Local loading state using useState
  const [loading, setLoading] = useState(true);
  
  const getItems = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:1337/api/items?populate=image&pagination[page]=1&pagination[pageSize]=100', { method: 'GET' });
      const itemJson = await response.json();
      dispatch(setItems(itemJson.data));
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    getItems();
  }, []);


  const categoryMap = {
    'Echinacea': {
      title: 'Echinacea',
      description: "Explore GoNatural Herbal's Echinacea collection for immune support and wellness. Our carefully crafted products, including capsules, teas, and tinctures, prioritize purity and quality. Discover the power of Echinacea for a natural boost at GoNatural Herbal.",
    },
    'Joint and Muscle Support': {
      title: 'Joint and Muscle Support',
      description: "Discover GoNatural Herbal's Joint and Muscle Support herb collection, tailored to enhance your well-being. Explore our carefully curated herbs designed to promote joint and muscle health. From traditional remedies to modern solutions, our selection prioritizes quality and effectiveness. Embrace natural support for your joints and muscles with GoNatural Herbal.",
    },
    'Digestive Health': {
      title: 'Digestive Health',
      description: "Explore GoNatural Herbal's Digestive Health collection, crafted to promote overall well-being. Discover our carefully selected herbs designed to support digestive health naturally. From soothing teas to potent supplements, our range prioritizes quality and purity. Trust GoNatural Herbal for digestive wellness through the power of nature.",
    },
    'Immune Boosters': {
      title: 'Immune Boosters',
      description: "Elevate your well-being with GoNatural Herbal's Immune Boosters collection. Discover our selection of carefully chosen herbs designed to strengthen and support your immune system. From potent supplements to immune-boosting teas, our offerings prioritize quality and effectiveness. Trust GoNatural Herbal for natural immune support and overall wellness.",
    },
    'Anti-inflammatory and Antioxidants': {
      title: 'Anti-inflammatory and Antioxidants',
      description: "Experience the benefits of GoNatural Herbal's Anti-inflammatory and Antioxidants collection. Explore our thoughtfully curated herbs designed to provide natural support for reducing inflammation and enhancing antioxidant protection. From powerful supplements to antioxidant-rich teas, our selection prioritizes quality and purity. Trust GoNatural Herbal for holistic well-being through the power of nature.",
    },
    "Women's Health": {
      title: "Women's Health",
      description: "Prioritize your well-being with GoNatural Herbal's Women's Health collection. Explore our carefully selected herbs tailored to support women's health naturally. From balancing teas to wellness supplements, our offerings emphasize quality and effectiveness. Trust GoNatural Herbal for holistic support in every stage of a woman's health journey.",
    },
    'Blood Purification and Cleansing': {
      title: 'Blood Purification and Cleansing',
      description: "Revitalize your well-being with GoNatural Herbal's Blood Purification and Cleansing collection. Explore our meticulously chosen herbs crafted to support natural blood purification and cleansing. From rejuvenating teas to purifying supplements, our selection prioritizes quality and effectiveness. Trust GoNatural Herbal for a holistic approach to enhancing your internal vitality through the power of nature.",
    },
    'Seeds': {
      title: 'Seeds',
      description: "Discover the vitality of GoNatural Herbal's Other Seeds collection. Explore our carefully curated selection of diverse seeds, each offering unique benefits to support your well-being. From nutritious supplements to versatile seeds, our collection prioritizes quality and purity. Trust GoNatural Herbal for a natural and wholesome addition to your wellness journey through the power of seeds.",
    },
    'Miscellaneous': {
      title: 'Miscellaneous',
      description: "Explore the diverse world of wellness with GoNatural Herbal's Miscellaneous Herbs collection. Our carefully curated selection of versatile herbs brings you a range of natural benefits. From unique supplements to traditional remedies, our collection prioritizes quality and effectiveness. Trust GoNatural Herbal for a holistic approach to well-being, embracing the power of nature's miscellaneous treasures.",
    },
    'Unknown Category': {
      title: 'Unknown Category',
      description: "Embark on a journey of discovery with GoNatural Herbal's Unknown Category (not specified) Herbs collection. Uncover the hidden potential of these unique herbs, carefully curated to offer a diverse range of natural benefits. From supplements to herbal blends, our collection prioritizes quality and purity. Trust GoNatural Herbal to introduce you to the wonders of these herbs, promoting holistic well-being through the power of the unknown.",
    },
  };

  const filteredItems = loading
    ? [] // Return an empty array during loading
    : items.filter((item) => item.attributes.category === categoryMap[categoryId].title);

  const SkeletonLoader = () => (
    <div>
      <div className="h-32 m-4  w-[100%] mx-auto animate-pulse bg-gray-300 my-4">
       
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="animate-pulse bg-gray-300 rounded-md h-32"></div>
      ))}
    </div>
    </div>
  );

  return (
    <div className="py-9 m-4">
      <h1 className="text-lg">Home / {categoryId}</h1>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div>
          <div className="my-4 mb-7 space-y-2">
            <h1 className="font-bold text-xl">{categoryMap[categoryId].title}</h1>
            <h1 className="md:text-lg">{categoryMap[categoryId].description}</h1>
            <h1 className="text-lg inline-flex items-center gap-x-2">
              products ({filteredItems?.length}) <FaArrowDown /> <FaArrowDown /> <FaArrowDown />
            </h1>

            <Helmet>
              <title>{categoryMap[categoryId].title}</title>
              <meta name="description" content={categoryMap[categoryId].description} />
            </Helmet>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {filteredItems.map((item) => (
              <Item item={item} key={`${item.name}-${item.id}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Category


