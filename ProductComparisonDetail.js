import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Dummy product data (replace this with your actual data retrieval logic)
const getProductById = (id) => {
  // Dummy data for demonstration
  const products = {
    1: {
      id: 1,
      name: 'Pizza',
      zomato: { price: 10, rating: 4.5, review: 'Good', image: '/Images/pizza.jpg' },
      swiggy: { price: 12, rating: 4.6, review: 'Very Good', image: '/Images/pizza.jpg' }
    },
    2: {
      id: 2,
      name: 'Burger',
      zomato: { price: 8, rating: 4.2, review: 'Okay', image: '/Images/burger.jpg' },
      swiggy: { price: 9, rating: 4.3, review: 'Good', image: '/Images/burger.jpg' }
    },
    3: {
      id: 3,
      name: 'Dosa',
      zomato: { price: 3, rating: 4.2, review: 'Okay', image: '/Images/dosa.jpg' },
      swiggy: { price: 3.5, rating: 4.3, review: 'Niceeee', image: '/Images/dosa.jpg' }
    },
    4: {
      id: 4,
      name: 'Samosa',
      zomato: { price: 15, rating: 4.2, review: 'Okay', image: '/Images/samosa.jpg' },
      swiggy: { price: 10, rating: 4.3, review: 'Niceeee', image: '/Images/samosa.jpg' }
    },
    101: {
      id: 101,
      name: 'Butter Chicken',
      zomato: { price: 4, rating: 4.5, review: 'Delicious', image: '/Images/D101.jpg' },
      swiggy: { price: 4.2, rating: 4.6, review: 'Amazing!', image: '/Images/D101.jpg' }
    },
    102: {
      id: 102,
      name: 'Chicken Tikka Masala',
      zomato: { price: 4.2, rating: 4.4, review: 'Spicy and flavorful', image: '/Images/D102.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Absolutely delicious', image: '/Images/D102.jpg' }
    },
    103: {
      id: 103,
      name: 'Tandoori Chicken',
      zomato: { price: 4.5, rating: 4.6, review: 'Smoky and tender', image: '/Images/D103.jpg' },
      swiggy: { price: 4.6, rating: 4.7, review: 'Perfectly cooked', image: '/Images/D103.jpg' }
    },
    104: {
      id: 104,
      name: 'Rogan Josh',
      zomato: { price: 4.3, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D104.jpg' },
      swiggy: { price: 4.5, rating: 4.6, review: 'Perfectly balanced flavors', image: '/Images/D104.jpg' }
    },
    105: {
      id: 105,
      name: 'Chicken Biryani',
      zomato: { price: 4.4, rating: 4.7, review: 'Aromatic and flavorful', image: '/Images/D105.jpg' },
      swiggy: { price: 4.6, rating: 4.8, review: 'Absolutely delicious', image: '/Images/D105.jpg' }
    },
    106: {
      id: 106,
      name: 'Mutton Biryani',
      zomato: { price: 4.6, rating: 4.8, review: 'Tender and flavorful', image: '/Images/D106.jpg' },
      swiggy: { price: 4.7, rating: 4.9, review: 'Authentic taste', image: '/Images/D106.jpg' }
    },
    107: {
      id: 107,
      name: 'Fish Curry',
      zomato: { price: 4.2, rating: 4.5, review: 'Flavorful and tangy', image: '/Images/D107.jpg' },
      swiggy: { price: 4.3, rating: 4.6, review: 'Perfectly cooked fish', image: '/Images/D107.jpg' }
    },
    108: {
      id: 108,
      name: 'Goan Prawn Curry',
      zomato: { price: 4.3, rating: 4.6, review: 'Rich and creamy', image: '/Images/D108.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Authentic Goan flavors', image: '/Images/D108.jpg' }
    },
    109: {
      id: 109,
      name: 'Hyderabadi Dum Biryani',
      zomato: { price: 4.5, rating: 4.8, review: 'Spicy and aromatic', image: '/Images/D109.jpg' },
      swiggy: { price: 4.7, rating: 4.9, review: 'Royal treat!', image: '/Images/D109.jpg' }
    },
    110: {
      id: 110,
      name: 'Chicken Korma',
      zomato: { price: 4.1, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D110.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Rich and satisfying', image: '/Images/D110.jpg' }
    },
    111: {
      id: 111,
      name: 'Chicken Curry',
      zomato: { price: 4.0, rating: 4.2, review: 'Homely and delicious', image: '/Images/D111.jpg' },
      swiggy: { price: 4.1, rating: 4.3, review: 'Classic comfort food', image: '/Images/D111.jpg' }
    },
    112: {
      id: 112,
      name: 'Lamb Korma',
      zomato: { price: 4.2, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D112.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Perfectly spiced', image: '/Images/D112.jpg' }
    },
    113: {
      id: 113,
      name: 'Keema Curry',
      zomato: { price: 4.1, rating: 4.3, review: 'Savory and satisfying', image: '/Images/D113.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Comfort food at its best', image: '/Images/D113.jpg' }
    },
    114: {
      id: 114,
      name: 'Tandoori Fish Tikka',
      zomato: { price: 4.3, rating: 4.5, review: 'Smoky and flavorful', image: '/Images/D114.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Perfect appetizer', image: '/Images/D114.jpg' }
    },
    115: {
      id: 115,
      name: 'Malabar Fish Curry',
      zomato: { price: 4.2, rating: 4.4, review: 'Coconutty and delicious', image: '/Images/D115.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Authentic Malabar flavors', image: '/Images/D115.jpg' }
    },
    116: {
      id: 116,
      name: 'Chettinad Chicken Curry',
      zomato: { price: 4.4, rating: 4.6, review: 'Spicy and aromatic', image: '/Images/D116.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Bold flavors', image: '/Images/D116.jpg' }
    },
    117: {
      id: 117,
      name: 'Chicken Chettinad',
      zomato: { price: 4.3, rating: 4.5, review: 'Rich and flavorful', image: '/Images/D117.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Perfectly spiced', image: '/Images/D117.jpg' }
    },
    118: {
      id: 118,
      name: 'Kerala Fish Curry',
      zomato: { price: 4.2, rating: 4.4, review: 'Tangy and delicious', image: '/Images/D118.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Traditional Kerala flavors', image: '/Images/D118.jpg' }
    },
    119: {
      id: 119,
      name: 'Fish Tandoori',
      zomato: { price: 4.4, rating: 4.6, review: 'Juicy and flavorful', image: '/Images/D119.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Perfectly grilled', image: '/Images/D119.jpg' }
    },
    120: {
      id: 120,
      name: 'Mutton Rogan Josh',
      zomato: { price: 4.5, rating: 4.7, review: 'Rich and aromatic', image: '/Images/D120.jpg' },
      swiggy: { price: 4.6, rating: 4.8, review: 'Perfectly cooked lamb', image: '/Images/D120.jpg' }
    },
    121: {
      id: 121,
      name: 'Chicken 65',
      zomato: { price: 4.0, rating: 4.2, review: 'Crispy and flavorful', image: '/Images/D121.jpg' },
      swiggy: { price: 4.1, rating: 4.3, review: 'Perfect appetizer', image: '/Images/D121.jpg' }
    },
    122: {
      id: 122,
      name: 'Mutton Do Pyaza',
      zomato: { price: 4.2, rating: 4.4, review: 'Rich and flavorful', image: '/Images/D122.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Perfectly spiced', image: '/Images/D122.jpg' }
    },
    123: {
      id: 123,
      name: 'Hyderabadi Chicken Biryani',
      zomato: { price: 4.4, rating: 4.6, review: 'Spicy and aromatic', image: '/Images/D123.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Authentic Hyderabadi flavors', image: '/Images/D123.jpg' }
    },
    124: {
      id: 124,
      name: 'Kerala Chicken Curry',
      zomato: { price: 4.1, rating: 4.3, review: 'Coconutty and delicious', image: '/Images/D124.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Authentic Kerala flavors', image: '/Images/D124.jpg' }
    },
    125: {
      id: 125,
      name: 'Bengali Fish Curry',
      zomato: { price: 4.2, rating: 4.4, review: 'Tangy and flavorful', image: '/Images/D125.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Authentic Bengali taste', image: '/Images/D125.jpg' }
    },
    126: {
      id: 126,
      name: 'Mutton Curry',
      zomato: { price: 4.3, rating: 4.5, review: 'Rich and flavorful', image: '/Images/D126.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Perfectly cooked mutton', image: '/Images/D126.jpg' }
    },
    127: {
      id: 127,
      name: 'Chicken Reshmi Kebab',
      zomato: { price: 4.1, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D127.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Melt-in-your-mouth goodness', image: '/Images/D127.jpg' }
    },
    128: {
      id: 128,
      name: 'Mutton Seekh Kebab',
      zomato: { price: 4.0, rating: 4.2, review: 'Juicy and flavorful', image: '/Images/D128.jpg' },
      swiggy: { price: 4.2, rating: 4.3, review: 'Perfectly spiced', image: '/Images/D128.jpg' }
    },
    129: {
      id: 129,
      name: 'Fish Curry',
      zomato: { price: 4.2, rating: 4.5, review: 'Flavorful and tangy', image: '/Images/D129.jpg' },
      swiggy: { price: 4.3, rating: 4.6, review: 'Perfectly cooked fish', image: '/Images/D129.jpg' }
    },
    130: {
      id: 130,
      name: 'Goan Prawn Curry',
      zomato: { price: 4.3, rating: 4.6, review: 'Rich and creamy', image: '/Images/D130.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Authentic Goan flavors', image: '/Images/D130.jpg' }
    },
    131: {
      id: 131,
      name: 'Chicken Vindaloo',
      zomato: { price: 4.3, rating: 4.5, review: 'Spicy and tangy', image: '/Images/D131.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Flavor explosion!', image: '/Images/D131.jpg' }
    },
    132: {
      id: 132,
      name: 'Goan Fish Curry',
      zomato: { price: 4.2, rating: 4.4, review: 'Tangy and aromatic', image: '/Images/D132.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Perfectly balanced flavors', image: '/Images/D132.jpg' }
    },
    133: {
      id: 133,
      name: 'Chicken Kolhapuri',
      zomato: { price: 4.4, rating: 4.6, review: 'Spicy and flavorful', image: '/Images/D133.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Authentic Kolhapuri taste', image: '/Images/D133.jpg' }
    },
    134: {
      id: 134,
      name: 'Mutton Kheema',
      zomato: { price: 4.2, rating: 4.4, review: 'Savory and delicious', image: '/Images/D134.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Perfectly spiced', image: '/Images/D134.jpg' }
    },
    135: {
      id: 135,
      name: 'Tawa Fish Fry',
      zomato: { price: 4.5, rating: 4.7, review: 'Crispy and flavorful', image: '/Images/D135.jpg' },
      swiggy: { price: 4.6, rating: 4.8, review: 'Perfectly cooked', image: '/Images/D135.jpg' }
    },
    136: {
      id: 136,
      name: 'Chicken Handi',
      zomato: { price: 4.1, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D136.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D136.jpg' }
    },
    137: {
      id: 137,
      name: 'Mutton Handi',
      zomato: { price: 4.3, rating: 4.5, review: 'Tender and succulent', image: '/Images/D137.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Perfectly cooked mutton', image: '/Images/D137.jpg' }
    },
    138: {
      id: 138,
      name: 'Chicken Shahi Korma',
      zomato: { price: 4.2, rating: 4.4, review: 'Rich and creamy', image: '/Images/D138.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Decadent flavors', image: '/Images/D138.jpg' }
    },
    139: {
      id: 139,
      name: 'Hyderabadi Mutton Biryani',
      zomato: { price: 4.6, rating: 4.8, review: 'Aromatic and flavorful', image: '/Images/D139.jpg' },
      swiggy: { price: 4.7, rating: 4.9, review: 'Exquisite taste', image: '/Images/D139.jpg' }
    },
    140: {
      id: 140,
      name: 'Chicken Tandoori',
      zomato: { price: 4.4, rating: 4.6, review: 'Juicy and smoky', image: '/Images/D140.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Perfectly grilled', image: '/Images/D140.jpg' }
    },
    141: {
      id: 141,
      name: 'Chilli Chicken',
      zomato: { price: 4.1, rating: 4.3, review: 'Spicy and flavorful', image: '/Images/D141.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Perfect appetizer', image: '/Images/D141.jpg' }
    },
    142: {
      id: 142,
      name: 'Fish Pakora',
      zomato: { price: 4.0, rating: 4.2, review: 'Crispy and delicious', image: '/Images/D142.jpg' },
      swiggy: { price: 4.1, rating: 4.3, review: 'Perfect snack', image: '/Images/D142.jpg' }
    },
    143: {
      id: 143,
      name: 'Chicken Hariyali Tikka',
      zomato: { price: 4.2, rating: 4.4, review: 'Herb-infused and juicy', image: '/Images/D143.jpg' },
      swiggy: { price: 4.3, rating: 4.5, review: 'Refreshing flavors', image: '/Images/D143.jpg' }
    },
    144: {
      id: 144,
      name: 'Chicken Malai Tikka',
      zomato: { price: 4.3, rating: 4.5, review: 'Creamy and succulent', image: '/Images/D144.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Deliciously marinated', image: '/Images/D144.jpg' }
    },
    145: {
      id: 145,
      name: 'Mutton Kofta',
      zomato: { price: 4.1, rating: 4.3, review: 'Savory and flavorful', image: '/Images/D145.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Perfectly spiced', image: '/Images/D145.jpg' }
    },
    146: {
      id: 146,
      name: 'Prawn Biryani',
      zomato: { price: 4.4, rating: 4.6, review: 'Aromatic and delicious', image: '/Images/D146.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Tantalizing flavors', image: '/Images/D146.jpg' }
    },
    147: {
      id: 147,
      name: 'Mutton Biryani (Lucknowi)',
      zomato: { price: 4.5, rating: 4.7, review: 'Rich and flavorful', image: '/Images/D147.jpg' },
      swiggy: { price: 4.6, rating: 4.8, review: 'Exquisite taste', image: '/Images/D147.jpg' }
    },
    148: {
      id: 148,
      name: 'Amritsari Fish Tikka',
      zomato: { price: 4.3, rating: 4.5, review: 'Crispy and flavorful', image: '/Images/D148.jpg' },
      swiggy: { price: 4.4, rating: 4.6, review: 'Perfect appetizer', image: '/Images/D148.jpg' }
    },
    149: {
      id: 149,
      name: 'Bengali Mutton Curry (Kosha Mangsho)',
      zomato: { price: 4.4, rating: 4.6, review: 'Rich and aromatic', image: '/Images/D149.jpg' },
      swiggy: { price: 4.5, rating: 4.7, review: 'Perfectly spiced', image: '/Images/D149.jpg' }
    },
    150: {
      id: 150,
      name: 'Chicken Handi',
      zomato: { price: 4.1, rating: 4.3, review: 'Creamy and flavorful', image: '/Images/D150.jpg' },
      swiggy: { price: 4.2, rating: 4.4, review: 'Rich and aromatic', image: '/Images/D150.jpg' }
    },
    // Add more products
  };

  return products[id];
};

const ProductComparisonDetail = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = getProductById(id); // Replace this with your logic to get product details

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Product Comparison</h2>
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-400 px-4 py-2">Platform</th>
            <th className="border border-gray-400 px-4 py-2">Image</th>
            <th className="border border-gray-400 px-4 py-2">Price</th>
            <th className="border border-gray-400 px-4 py-2">Rating</th>
            <th className="border border-gray-400 px-4 py-2">Review</th>
            <th className="border border-gray-400 px-4 py-2">Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Zomato</td>
            <td className="border border-gray-400 px-4 py-2"><img src={product.zomato.image} alt={product.name} className="w-24 h-24 object-cover sm:w-32 sm:h-32" /></td>
            <td className="border border-gray-400 px-4 py-2">₹{product.zomato.price}</td>
            <td className="border border-gray-400 px-4 py-2">{product.zomato.rating}</td>
            <td className="border border-gray-400 px-4 py-2">{product.zomato.review}</td>
            <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Buy</button></td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Swiggy</td>
            <td className="border border-gray-400 px-4 py-2"><img src={product.swiggy.image} alt={product.name} className="w-24 h-24 object-cover sm:w-32 sm:h-32" /></td>
            <td className="border border-gray-400 px-4 py-2">₹{product.swiggy.price}</td>
            <td className="border border-gray-400 px-4 py-2">{product.swiggy.rating}</td>
            <td className="border border-gray-400 px-4 py-2">{product.swiggy.review}</td>
            <td className="border border-gray-400 px-4 py-2"><button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Buy</button></td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4">
        <Link
          to="/explore-dining"
          className="text-blue-700 font-bold inline-block px-4 py-2 bg-blue-200 rounded-md transition-transform transform hover:scale-105 hover:bg-blue-500 hover:text-white duration-300 ease-in-out"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default ProductComparisonDetail;