import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../state';

function Item({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const { price, name, image } = item.attributes;

  const handleAddToCart = () => {
    dispatch(addToCart({ item: { ...item, count } }));
  };

  const handleViewProduct = () => {
    // Navigate to the item route and scroll to the top of the page
    navigate(`/item/${item.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  



  return (
    <div className="border h-full rounded-md flex flex-col animate-fade-right animate-delay-500">
      <div className="relative">
        <img
          src={image.data?.attributes?.url}
          onClick={handleViewProduct}
          alt={name}
          className="cursor-pointer w-full h-48 object-cover"
        />
      </div>

      <div className="flex flex-col justify-between mt-2 p-3 bg-gray-100">
        <div>
          <h1 className="md:text-lg font-bold">{name}</h1>
          <h1 className="font-bold text-gray-800">R {price}</h1>
        </div>

        <div className="flex flex-col mt-3">
          <button
            onClick={handleAddToCart}
            className="p-1 px-3 text-white bg-green-700 font-bold mb-2"
          >
            Add to Cart
          </button>
          <Link to={`/item/${item.id}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="p-1 px-3 font-bold text-gray-700 bg-gray-200">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;








