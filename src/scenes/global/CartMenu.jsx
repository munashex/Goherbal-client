import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import { increaseCount, decreaseCount, removeFromCart, setIsCartOpen } from '../../state';
import { IoMdClose, IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const total = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price
  }, 0); 

  const cartNavigate = () => {
    navigate(`item/${id}`) 
    isCartOpen() 
    window.scroll({top: 0, behavior: 'smooth'})
  }

  return (
    <div className={`${isCartOpen ? 'flex' : 'hidden'}`}>
      {cart?.length === 0 ? (
        <div className="shadow bg-gray-200 animate-fade-left w-[90%] md:w-1/2 fixed top-0 z-20 bottom-0 right-0">
          <div className="flex m-7 items-center justify-between">
            <h1 className="text-lg">Your cart is currently empty</h1>
            <button onClick={() => dispatch(setIsCartOpen({}))}>
              <IoMdClose size={35}/>
            </button>
          </div>
        </div>
      ) : (
        <div className="shadow animate-fade-left bg-gray-200 w-[90%] md:w-1/2 fixed top-0 z-20 bottom-0 right-0">
          <div className="text-lg font-bold flex items-center justify-between m-4">
            <h1>SHOPPING BAG ({cart?.length})</h1>
            <button onClick={() => dispatch(setIsCartOpen({}))}>
              <IoMdClose size={35}/>
            </button>
          </div>
          <div className="h-[70%] overflow-y-auto space-y-7">
            {cart.map((item) => (
              <div key={item.id} className='flex m-4 gap-x-4 items-center'>
                <Link className="space-y-1" onClick={cartNavigate} >
                  <h1 className="text-lg font-bold">{item?.attributes?.name}</h1>
                 <img
                    alt={item?.name}
                    className="w-40 h-40 object-cover rounded-md"
                    src={item?.attributes.image?.data?.attributes?.formats?.thumbnail?.url}
                  />
                </Link> 

                <div className="flex flex-col gap-y-4 w-[50%] md:w-fit">
                  <div className="flex flex-row items-center gap-x-2">
                    <button className="border border-slate-400" onClick={() => dispatch(decreaseCount({id: item.id}))}>
                      <LuMinus size={22}/>
                    </button>
                    <span className="border border-slate-400 px-2 rounded-full">{item?.count}</span>
                    <button className="border border-slate-400" onClick={() => dispatch(increaseCount({id: item.id}))}>
                      <IoMdAdd size={22}/>
                    </button>
                  </div>
                  <button
                    className="bg-black bg-opacity-50  text-white px-2 py-1 rounded-md"
                    onClick={() => dispatch(removeFromCart({id: item.id}))}
                  >
                    Remove
                  </button>
                  <h1 className="text-lg font-bold">R {item?.attributes?.price}</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="text-lg font-semibold items-center justify-around flex m-4">
            <h1>SUBTOTAL</h1>
            <h1>R {total?.toLocaleString()}</h1>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-700 text-lg p-2 text-white w-[90%] md:w-[70%] lg:[50%]">CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartMenu;
