import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../state';

function Item({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  const { category, price, name, image } = item.attributes;

  return (
    <div className="border h-full rounded-md flex flex-col">
      <div className="relative">
        <img
          src={`http://localhost:1337${image?.data?.attributes?.url}`}
          onClick={() => navigate(`/item/${item.id}`)}
          alt={name}
          className="cursor-pointer w-full h-48 object-cover"
        />
      </div>

      <div className="flex flex-col justify-between mt-2 p-3 bg-gray-100">
        <div>
          <h1 className="text-lg font-bold">{name}</h1>
          <h1 className="font-bold text-gray-800">R {price}</h1>
        </div>

        <div className="flex flex-col mt-3">
          <button
            onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            className="p-1 px-3 text-white bg-green-700 font-bold mb-2"
          >
            Add to Cart
          </button>
          <Link to={`/item/${item.id}`} className="p-1 px-3 font-bold text-gray-700 bg-gray-200">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;





