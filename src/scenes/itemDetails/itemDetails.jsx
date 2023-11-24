import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state';
import { useParams, Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { LuMinus } from 'react-icons/lu';
import { FaCircle } from "react-icons/fa" 
import Item from '../../components/Item';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const getItem = async () => {
    try {
      const response = await fetch(`http://localhost:1337/api/items/${itemId}?populate=image`, {
        method: 'GET',
      });
      const { data } = await response.json();
      setItem(data);
    } catch (error) {
      console.error('Error fetching item details:', error);
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/items?populate=image', { method: 'GET' });
      const { data } = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]);

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
  }

  const extractRichText = () => {
    if (!item || !item.attributes || !item.attributes.longDescription) return '';

    return item.attributes.longDescription.reduce((acc, paragraph) => {
      if (paragraph.type === 'paragraph' && paragraph.children && paragraph.children.length > 0) {
        paragraph.children.forEach(child => {
          if (child.type === 'text') {
            acc += child.text;
          }
        });
      }
      return acc;
    }, '');
  };


  // Function to get random items
  const getRandomItems = (array, numItems) => {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, numItems);
  };

  // Get six random items from the array
  const randomItems = getRandomItems(items, 4);


    
  return (
    <div>
    <div className="py-8 md:py-12 px-6">
      <div className="flex flex-col md:flex-row gap-x-4 gap-y-6">
        <img
          src={item?.attributes?.image?.data?.attributes?.url}
          alt={item?.attributes?.name}
          className="object-cover"
        />

        <div className="space-y-4">
          <h1>Home / {item?.attributes?.name}</h1>

          <h1 className="inline-flex items-center gap-x-2">
            <h1>Category</h1>
            <Link to={`/category/${item?.attributes?.category}`} className="text-blue-700 underline decoration-clone underline-offset-2">{item?.attributes?.category}</Link>
          </h1>

          <h1 className="text-xl font-bold">{item?.attributes?.name}</h1>
          <h1 className="text-lg font-semibold">R {item?.attributes?.price}</h1>

          <div>
            <h1 className="font-bold">Quantity</h1>
            <div className="flex flex-row items-center gap-x-2 mt-2">
              <button className="border border-slate-400" onClick={handleDecrease}>
                <LuMinus size={25} />
              </button>

              <span className="border border-slate-400 px-2 text-lg rounded-full">{count}</span>
              <button className="border border-slate-400" onClick={handleIncrease}>
                <IoMdAdd size={25} />
              </button>
            </div>

            <div className="my-5">
              <h1 className="inline-flex items-center gap-x-3">
                <span className="animate-pulse"><FaCircle color="green" /></span>
                <h1 className="text-lg">In Stock, ready to ship</h1>
              </h1>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-green-700 px-5 py-2 text-white text-lg font-bold">
              Add to Cart
            </button>
          </div>

        </div>
      </div>

      <div className="mt-11 space-y-2">
        <h1 className="font-bold md:text-lg">{item?.attributes?.shortDescription}</h1>
        <h1 className="md:text-lg">{extractRichText()}</h1>
      </div> 


    </div> 
    
    <div className="mt-3 space-y-4 m-4">
    <h1 className="text-xl md:text-2xl font-bold">You may also like</h1> 

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
   {randomItems.map((item) => (
     <Item item={item} key={item.id}/>
   ))}
    </div>
   </div>
    </div>
  );
};

export default ItemDetails;
