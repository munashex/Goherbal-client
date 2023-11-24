import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { GrCart } from 'react-icons/gr';
import Logo from '../../assets/Logo.png';
import { setIsCartOpen } from '../../state';
import { MdClose } from 'react-icons/md';
import NavLinks from '../../components/NavLinks';

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [openNav, setOpenNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [filteredNames, setFilteredNames] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const closeNav = () => {
    setOpenNav(false);
    setSearch(false);
  };

  const getProducts = async () => {
    const results = await fetch('http://localhost:1337/api/items');
    const data = await results.json();
    setProducts(data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (input) => {
    setFilteredNames([]);
    const lowercasedInput = input.toLowerCase();

    // Filter names from the products data
    const filtered = products.filter((product) =>
      product?.attributes?.name.toLowerCase().includes(lowercasedInput)
    );

    setFilteredNames(filtered);
  };

  return (
    <div>
      <div className="bg-green-700 fixed top-0 left-0 w-full z-20 shadow-md md:shadow">
        {/* navbar on sm screens  */}
        <div className="flex justify-between p-2.5 md:hidden">
          {search ? (
            <div className="animate-fade-left relative">
              <input
                className="w-full py-2.5 px-11  outline-none shadow-lg placeholder:text-lg placeholder:text-slate-700"
                placeholder="Search....."
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* Display filtered names in a separate container */}
              {filteredNames.length > 0 && (
                <div className="absolute  top-full left-0 w-/12 w-full bg-green-700  p-4 shadow-md  mt-2">
                  <ul className="gap-y-1 flex flex-col">
                    {filteredNames.map((filteredName) => (
                      <Link
                      to={`/item/${filteredName.id}`}
                        key={filteredName.id} 
                        className="text-white" 
                        onClick={() => setSearch(!search)}
                      >
                        {filteredName.attributes.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="px-2.5 flex items-center gap-x-5">
              <button onClick={() => setOpenNav(!openNav)}>
                {openNav ? (
                  <MdClose size={35} color="white" />
                ) : (
                  <FaBarsStaggered size={35} color="white" />
                )}
              </button>

              <Link onClick={() => navigate('/')} to="/">
                <img src={Logo} className="w-40" />
              </Link>
            </div>
          )}

          <div className="px-2.5 flex items-center gap-x-5">
            <button className="text-white" onClick={() => setSearch(!search)}>
              {search ? <MdClose size={35} /> : <IoSearch size={35} />}
            </button>

            <span className="inline-flex items-center">
              <button onClick={() => dispatch(setIsCartOpen({}))}>
                <GrCart size={35} className="text-white" />
              </button>
              <button className="bg-black text-white px-2 rounded-full">
                {cart?.length === 0 ? null : cart?.length}
              </button>
            </span>
          </div>
        </div>
        {/* nav links on sm screens */}
        <div className={`${openNav ? 'flex md:hidden' : 'hidden'}`}>
          <NavLinks closeNav={closeNav} />
        </div>
        {/* navbar on md and lg screens   */}
        <div className="p-2.5 hidden md:flex px-3 lg:px-7 items-center justify-between ">
          <div className="flex gap-x-8 items-center">
            <Link onClick={() => navigate('/')} to="/">
              <img src={Logo} className="w-48" />
            </Link>

            <div className="flex items-center">
              <input
                className="h-9 w-56 placeholder:text-lg placeholder:font-semibold px-2 lg:w-96  outline-none"
                placeholder="Search...."
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* Display filtered names in a separate container */}
              {filteredNames.length > 0 && (
                <div className="absolute  top-full left-0 w-/12 w-[50%] lg:w-[41%] mx-2 bg-green-700 p-4 shadow-md  mt-2">
                  <ul className="gap-y-1 flex flex-col">
                    {filteredNames.map((filteredName) => (
                      <Link
                      to={`/item/${filteredName.id}`}
                        key={filteredName.id} 
                        className="text-white" 
                      >
                        {filteredName.attributes.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <span className="inline-flex items-center">
            <button onClick={() => dispatch(setIsCartOpen({}))}>
              <GrCart size={35} className="text-white" />
            </button>
            <button className="bg-black text-white text-lg px-2 rounded-full">
              {cart?.length === 0 ? null : cart?.length}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

