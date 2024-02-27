import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

const ProductListPage = () => {
  // Dummy dining product data (replace this with your actual data)
  const Products = [
      { id: 51, name: 'Chinos', price: 800, image: '/Images/51.jpg' },
      { id: 52, name: 'Formal Pants', price: 1200, image: '/Images/52.jpg' },
      { id: 53, name: 'Sneakers', price: 1800, image: '/Images/53.jpg' },
      { id: 54, name: 'T-Shirt', price: 500, image: '/Images/54.jpg' },
      { id: 55, name: 'Saree', price: 1500, image: '/Images/55.jpg' },
      { id: 56, name: 'Kurta', price: 900, image: '/Images/56.jpg' },
      { id: 57, name: 'Slippers', price: 300, image: '/Images/57.jpg' },
      { id: 58, name: 'Lehenga', price: 2000, image: '/Images/58.jpg' },
      { id: 59, name: 'Crop Top', price: 700, image: '/Images/59.jpg' },
      { id: 60, name: 'Shoes', price: 1700, image: '/Images/60.jpg' },
      { id: 61, name: 'Denim Jeans', price: 1500, image: '/Images/61.jpg' },
      { id: 62, name: 'Hoodie', price: 1200, image: '/Images/62.jpg' },
      { id: 63, name: 'Maxi Dress', price: 1800, image: '/Images/63.jpg' },
      { id: 64, name: 'Blazer', price: 2000, image: '/Images/64.jpg' },
      { id: 65, name: 'Jumpsuit', price: 1600, image: '/Images/65.jpg' },
      { id: 66, name: 'Polo Shirt', price: 1000, image: '/Images/66.jpg' },
      { id: 67, name: 'Palazzo Pants', price: 850, image: '/Images/67.jpg' },
      { id: 68, name: 'Anarkali Suit', price: 1900, image: '/Images/68.jpg' },
      { id: 69, name: 'Harem Pants', price: 700, image: '/Images/69.jpg' },
      { id: 70, name: 'Trench Coat', price: 2000, image: '/Images/70.jpg' },
      { id: 71, name: 'Crop Flare Jeans', price: 1400, image: '/Images/71.jpg' },
      { id: 72, name: 'Turtleneck Sweater', price: 1100, image: '/Images/72.jpg' },
      { id: 73, name: 'Pleated Skirt', price: 900, image: '/Images/73.jpg' },
      { id: 74, name: 'Tunic Top', price: 750, image: '/Images/74.jpg' },
      { id: 75, name: 'Midi Dress', price: 1700, image: '/Images/75.jpg' },
      { id: 76, name: 'Denim Jacket', price: 1600, image: '/Images/76.jpg' },
      { id: 77, name: 'Pullover Hoodie', price: 1300, image: '/Images/77.jpg' },
      { id: 78, name: 'High-Waisted Jeans', price: 1200, image: '/Images/78.jpg' },
      { id: 79, name: 'Wrap Dress', price: 1800, image: '/Images/79.jpg' },
      { id: 80, name: 'Oversized Sweater', price: 1500, image: '/Images/80.jpg' },
      { id: 81, name: 'Boat Neck Top', price: 600, image: '/Images/81.jpg' },
      { id: 82, name: 'Cropped Wide-Leg Pants', price: 850, image: '/Images/82.jpg' },
      { id: 83, name: 'Bomber Jacket', price: 1300, image: '/Images/83.jpg' },
      { id: 84, name: 'Denim Skirt', price: 950, image: '/Images/84.jpg' },
      { id: 85, name: 'Off-Shoulder Dress', price: 1600, image: '/Images/85.jpg' },
      { id: 86, name: 'Graphic Tee', price: 700, image: '/Images/86.jpg' },
      { id: 87, name: 'Pencil Skirt', price: 1100, image: '/Images/87.jpg' },
      { id: 88, name: 'Cowl Neck Sweater', price: 1200, image: '/Images/88.jpg' },
      { id: 89, name: 'Ruffled Blouse', price: 900, image: '/Images/89.jpg' },
      { id: 90, name: 'Tailored Suit', price: 2000, image: '/Images/90.jpg' },
      { id: 91, name: 'Floral Maxi Dress', price: 1800, image: '/Images/91.jpg' },
      { id: 92, name: 'Trench Skirt', price: 1500, image: '/Images/92.jpg' },
      { id: 93, name: 'Linen Shirt', price: 1000, image: '/Images/93.jpg' },
      { id: 94, name: 'Faux Leather Jacket', price: 1700, image: '/Images/94.jpg' },
      { id: 95, name: 'Bell Sleeve Top', price: 800, image: '/Images/95.jpg' },
      { id: 96, name: 'Wide Leg Jumpsuit', price: 1900, image: '/Images/96.jpg' },
      { id: 97, name: 'Silk Blouse', price: 1400, image: '/Images/97.jpg' },
      { id: 98, name: 'Cargo Pants', price: 1100, image: '/Images/98.jpg' },
      { id: 99, name: 'Pleated Blouse', price: 900, image: '/Images/99.jpg' },
      { id: 100, name: 'Tweed Blazer', price: 2000, image: '/Images/100.jpg' }
    ]
    
    // Add more dining products
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('priceHighToLow');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : Products.filter(
          product => product.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = suggestion => (
    <div>
      <Link to={`/shopping/compare/${suggestion.id}`}>
        {suggestion.name} - ₹{suggestion.price}
      </Link>
    </div>
  );

  const inputProps = {
    placeholder: 'Search for dining products...',
    value: searchTerm,
    onChange: onChange,
    className: 'p-2 border border-gray-300 rounded-md w-full'
  };

  const filteredProducts = Products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'priceHighToLow') {
      return b.price - a.price;
    } else {
      return a.price - b.price;
    }
  });

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>

      {/* Search bar */}
      <div className="mb-4">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </div>

      {/* Filter options */}
      <div className="mb-4">
        <label className="mr-2">Sort by:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="priceLowToHigh">Price: Low to High</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link to={`/shopping/compare/${product.id}`} className="block">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md hover:opacity-75 transition duration-300 ease-in-out"
              />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700">₹{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;