import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../state';
import { useParams } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { LuMinus } from 'react-icons/lu';
import { FaCircle } from 'react-icons/fa';
import Item from '../../components/Item';
import { Helmet } from 'react-helmet-async';

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getItem = async () => {
    try {
      const response = await fetch(`https://gonaturalherbal.onrender.com/api/items/${itemId}?populate=image`, {
        method: 'GET',
      });
      const { data } = await response.json();
      setItem(data);
    } catch (error) {
      console.error('Error fetching item details:', error);
    } finally {
      setLoading(false);
    }
  };

  const getItems = async () => {
    try {
      const response = await fetch('https://gonaturalherbal.onrender.com/api/items?populate=image', { method: 'GET' });
      const { data } = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    setLoading(true);
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
  };

  const extractRichText = () => {
    if (!item || !item.attributes || !item.attributes.longDescription) return '';

    return item.attributes.longDescription.reduce((acc, paragraph) => {
      if (paragraph.type === 'paragraph' && paragraph.children && paragraph.children.length > 0) {
        paragraph.children.forEach((child) => {
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

  // Get four random items from the array
  const randomItems = getRandomItems(items, 4);

  return (
    <div className="py-14 md:py-14 px-3 md:px-6">
      <Helmet>
        <title>{item?.attributes?.name}</title>
        <meta
          name="description"
          content={`${item?.attributes?.name} ${item?.attributes?.shortDescription}`}
        />
      </Helmet>

      {loading ? (
        // Skeleton loader while data is loading
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-96 w-full bg-gray-300 rounded"></div>
          {/* Add more skeleton elements as needed */}
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2">
              <img
                src={item?.attributes?.image?.data?.attributes?.url}
                alt={item?.attributes?.name}
                className="object-cover w-full rounded-lg"
              />
            </div>

            <div className="flex flex-col md:w-1/2">
              <h1 className="text-3xl font-bold">{item?.attributes?.name}</h1>
              <p className="text-gray-600 my-2">Home / {item?.attributes?.name}</p>
              <p className="text-lg font-semibold mb-4">R {item?.attributes?.price}</p>

              <div className="flex items-center gap-4">
                <button
                  className="border border-slate-400 p-2 rounded"
                  onClick={handleDecrease}
                >
                  <LuMinus size={20} />
                </button>

                <span className="text-lg">{count}</span>

                <button
                  className="border border-slate-400 p-2 rounded"
                  onClick={handleIncrease}
                >
                  <IoMdAdd size={20} />
                </button>
              </div>

              <p className="my-4 flex items-center gap-2">
                <span className="text-green-500 animate-pulse">
                  <FaCircle />
                </span>
                In Stock, ready to ship
              </p>

              <button
                onClick={handleAddToCart}
                className="bg-green-700 text-white px-6 py-2 rounded-lg text-lg font-bold"
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700 font-bold md:text-lg">{item?.attributes?.shortDescription}</p>
            <p className="text-gray-700 mt-4 md:text-lg">{extractRichText()}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">You may also like</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {randomItems.map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetails;

