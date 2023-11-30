import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from '../../state';
import Item from "../../components/Item";

function ShoppingList() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [loading, setLoading] = useState(true);

  const fetchItemsWithPagination = async (page, pageSize) => {
    try {
      const items = await fetch(`https://gonaturalherbal.onrender.com/api/items?populate=image&pagination[page]=${page}&pagination[pageSize]=${pageSize}`, { method: "GET" });
      const itemJson = await items.json();
      return itemJson.data;
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  };

  const getItems = async () => {
    setLoading(true);
    try {
      const items = await fetchItemsWithPagination(1, 100);
      dispatch(setItems(items));
    } catch (error) {
      // Handle error, e.g., show an error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const BloodPurifer = items?.filter(
    (item) => item.attributes.category === 'Blood Purification and Cleansing'
  );

  return (
    <div className="mt-11 md:mt-14 px-3 md:px-7 lg:px-12 space-y-7">
      <h1 className="text-xl font-bold  md:text-2xl lg:text-3xl">Shop Our Best Sellers</h1>
     
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5]?.map((index) => (
            <div key={index} className="animate-pulse bg-gray-300 rounded-md h-32"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {BloodPurifer?.map((item) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
