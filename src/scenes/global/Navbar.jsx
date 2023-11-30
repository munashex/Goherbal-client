import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { FaBarsStaggered } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { GrCart } from 'react-icons/gr';
import Logo from '../../assets/Logo.png';
import { setIsCartOpen } from '../../state';
import {MdClose } from 'react-icons/md';
import NavLinks from '../../components/NavLinks';

const Navbar = () => {
  // State
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [openNav, setOpenNav] = useState(false);
  const [search, setSearch] = useState(false);
  const [mdSearch, setMdSearch] = useState(false);
  const [filteredNames, setFilteredNames] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Functions
  const closeNav = () => {
    setOpenNav(false);
    setSearch(false);
    window.scroll({top:0, behavior: "smooth"})
  };

  const getProducts = async () => {
    const results = await fetch('https://gonaturalherbal.onrender.com/api/items?pagination[page]=1&pagination[pageSize]=100');
    const data = await results.json();
    setProducts(data.data);
  };

  const handleSearch = (input) => {
    setFilteredNames([]);
    const lowercasedInput = input.toLowerCase();

    // Filter names from the products data
    const filtered = products.filter((product) =>
      product?.attributes?.name.toLowerCase().includes(lowercasedInput)
    );

    setFilteredNames(filtered);
  };

  // Lifecycle Hooks
  useEffect(() => {
    getProducts();
  }, []); 

  const SearchNavigate = () => {
    window.scroll({top: 0, behavior: 'smooth'}) 
    setSearch(!search)
  }

  const SearchNavigateMd = () => {
    window.scroll({top: 0, behavior: 'smooth'}) 
    setMdSearch(!mdSearch)
  }

  


  return (
    <div>
      <div className="bg-green-700 fixed top-0 left-0 w-full z-20 shadow-md md:shadow">
        {/* navbar on sm screens  */}
        <div className="flex justify-between p-2.5 md:hidden">
          {search ? (
            // Search input section
            <div className="animate-fade-left relative">
              <input
                className="w-full py-2.5 px-11 outline-none shadow-lg placeholder:text-lg placeholder:text-slate-700"
                placeholder="Search....."
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* Display filtered names in a separate container */}
              {filteredNames.length > 0 && (
                <div className="absolute top-full left-0 w-/12 w-full bg-green-700 p-4 shadow-md mt-2 animate-fade-left">
                  <ul className="gap-y-1 flex flex-col">
                    {filteredNames.map((filteredName) => (
                      <Link
                        to={`/item/${filteredName.id}`}
                        key={filteredName.id}
                        className="text-white"
                        onClick={SearchNavigate}
                      >
                        {filteredName.attributes.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            // Regular navigation section
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

          {/* Search and Cart icons section */}
          <div className="px-2.5 flex items-center gap-x-5">
            <button className="text-white" onClick={() => setSearch(!search)}>
              {search ? <MdClose size={35} /> : <IoSearch size={35} />}
            </button>

            {/* Cart icon */}
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
          {/* Logo and search input section */}
          <div className="flex gap-x-8 items-center">
            {mdSearch ? (
              <div className="m-1">
                <input
                  className="py-2.5 px-11 outline-none placeholder:text-slate-700 placeholder:text-lg"
                  placeholder="Search...."
                  onChange={(e) => handleSearch(e.target.value)}
                />

                  {filteredNames.length > 0 && (
                  <div className="md:absolute top-full left-0 mx-2 w-[42%] lg:w-[27%] bg-green-700 p-4 shadow-md mt-2 animate-fade-left">
                    <ul className="gap-y-1 flex flex-col">
                      {filteredNames.map((filteredName) => (
                        <Link
                          to={`/item/${filteredName.id}`}
                          key={filteredName.id}
                          className="text-white" 
                          onClick={SearchNavigateMd}
                        >
                          {filteredName.attributes.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="md:flex items-center">
                <Link onClick={() => navigate('/')} to="/">
                  <img src={Logo} className="w-48" />
                </Link>
              </div>
            )}

            {/* Search icon */}
            <button onClick={() => setMdSearch(!mdSearch)}>
              {mdSearch ? (
                <MdClose size={35} color="white" />
              ) : (
                <IoSearch size={35} color="white" />
              )}
            </button>
          </div>

          

          {/* Cart icon section */}
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






