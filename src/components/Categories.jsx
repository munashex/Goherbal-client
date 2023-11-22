import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import category1 from '../assets/category1.png';
import category2 from '../assets/category2.png';
import category3 from '../assets/category3.png';
import category4 from '../assets/category4.png';
import category5 from '../assets/category5.png';
import category6 from '../assets/category6.png';
import category7 from '../assets/category7.png';
import category8 from '../assets/category8.png';
import category9 from '../assets/category9.png';
import category10 from '../assets/category10.png';

const Categories = () => {
  const navigate = useNavigate();

  const topCategories = [
    { image: category3, name: "Digestive Health" },
    { image: category4, name: "Immune Boosters" },
    { image: category6, name: "Women's Health" },
  ];

  const categories = [
    { image: category1, name: 'Echinacea', url: 'Echinacea' },
    { image: category2, name: "Joint Support", url: 'Joint and Muscle Support' },
    { image: category5, name: "Anti-inflammatory", url: "Anti-inflammatory and Antioxidants" },
    { image: category7, name: "Blood Cleansing", url: 'Blood Purification and Cleansing' },
    { image: category8, name: "Seeds", url: 'Other Seeds' },
    { image: category9, name: "Miscellaneous", url: 'Miscellaneous' },
    { image: category10, name: "Unknown", url: 'Unknown Category (not specified)' },
  ];

  const handleTopCategoryClick = (name) => {
    // Programmatically navigate to the item route
    navigate(`/category/${name}`);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMainCategoryClick = (url) => {
    // Programmatically navigate to the item route
    navigate(`/category/${url}`);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* top categories */}
      <div className="bg-gray-300 text-black p-4">
        <h1 className="text-xl md:text-2xl font-bold text-center">Over 1000 5-Star Reviews ⭑⭑⭑⭑⭑</h1>
      </div>

      <div className="px-5 md:px-7  my-16 w-[100%] grid grid-cols-1 md:grid-cols-3 gap-3">
        {topCategories.map((item) => (
          <Link
            key={item.name}
            to={`/category/${item.name}`}
            className="relative"
            onClick={() => handleTopCategoryClick(item.name)}
          >
            <img
              className="h-36 md:h-64  w-full object-cover"
              src={item.image}
              alt={item.name}
            />
            <h1 className="absolute bottom-3 left-4 text-white font-bold text-xl bg-black p-2 rounded-md bg-opacity-50">
              {item.name}
            </h1>
          </Link>
        ))}
      </div>

      {/* main categories */}
      <div className="px-5 md:px-7  my-6 w-[100%]">
        <h1 className="text-xl font-bold  md:text-2xl lg:text-3xl my-6">Shop Our Range</h1>

        <div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-7 gap-x-3 lg:gap-x-7 gap-y-4">
          {categories?.map((cat) => (
            <Link
              key={cat.name}
              to={`/category/${cat.url}`}
              onClick={() => handleMainCategoryClick(cat.url)}
            >
              <img src={cat.image} className="rounded-full" alt={cat.name} />
              <h1 className="text-center font-bold md:text-lg py-1">{cat.name}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;


