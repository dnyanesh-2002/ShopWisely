import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

const DiningListPage = () => {
  // Dummy dining product data (replace this with your actual data)
  const diningProducts = [
      { id: 101, name: 'Butter Chicken', price: 4, image: '/Images/D101.jpg' },
      { id: 102, name: 'Chicken Tikka Masala', price: 4.2, image: '/Images/D102.jpg' },
      { id: 103, name: 'Tandoori Chicken', price: 4.5, image: '/Images/D103.jpg' },
      { id: 104, name: 'Rogan Josh', price: 4.3, image: '/Images/D104.jpg' },
      { id: 105, name: 'Chicken Biryani', price: 4.4, image: '/Images/D105.jpg' },
      { id: 106, name: 'Mutton Biryani', price: 4.6, image: '/Images/D106.jpg' },
      { id: 107, name: 'Fish Curry', price: 4.2, image: '/Images/D107.jpg' },
      { id: 108, name: 'Goan Prawn Curry', price: 4.3, image: '/Images/D108.jpg' },
      { id: 109, name: 'Hyderabadi Dum Biryani', price: 4.5, image: '/Images/D109.jpg' },
      { id: 110, name: 'Chicken Korma', price: 4.1, image: '/Images/D110.jpg' },
      { id: 111, name: 'Chicken Curry', price: 4.0, image: '/Images/D111.jpg' },
      { id: 112, name: 'Lamb Korma', price: 4.2, image: '/Images/D112.jpg' },
      { id: 113, name: 'Keema Curry', price: 4.1, image: '/Images/D113.jpg' },
      { id: 114, name: 'Tandoori Fish Tikka', price: 4.3, image: '/Images/D114.jpg' },
      { id: 115, name: 'Malabar Fish Curry', price: 4.2, image: '/Images/D115.jpg' },
      { id: 116, name: 'Chettinad Chicken Curry', price: 4.4, image: '/Images/D116.jpg' },
      { id: 117, name: 'Chicken Chettinad', price: 4.3, image: '/Images/D117.jpg' },
      { id: 118, name: 'Kerala Fish Curry', price: 4.2, image: '/Images/D118.jpg' },
      { id: 119, name: 'Fish Tandoori', price: 4.4, image: '/Images/D119.jpg' },
      { id: 120, name: 'Mutton Rogan Josh', price: 4.5, image: '/Images/D120.jpg' },
      { id: 121, name: 'Chicken 65', price: 4.0, image: '/Images/D121.jpg' },
      { id: 122, name: 'Mutton Do Pyaza', price: 4.2, image: '/Images/D122.jpg' },
      { id: 123, name: 'Hyderabadi Chicken Biryani', price: 4.4, image: '/Images/D123.jpg' },
      { id: 124, name: 'Kerala Chicken Curry', price: 4.1, image: '/Images/D124.jpg' },
      { id: 125, name: 'Bengali Fish Curry', price: 4.2, image: '/Images/D125.jpg' },
      { id: 126, name: 'Mutton Curry', price: 4.3, image: '/Images/D126.jpg' },
      { id: 127, name: 'Chicken Reshmi Kebab', price: 4.1, image: '/Images/D127.jpg' },
      { id: 128, name: 'Mutton Seekh Kebab', price: 4.0, image: '/Images/D128.jpg' },
      { id: 129, name: 'Fish Curry', price: 4.2, image: '/Images/D129.jpg' },
      { id: 130, name: 'Goan Prawn Curry', price: 4.3, image: '/Images/D130.jpg' },
      { id: 131, name: 'Chicken Vindaloo', price: 4.3, image: '/Images/D131.jpg' },
      { id: 132, name: 'Goan Fish Curry', price: 4.2, image: '/Images/D132.jpg' },
      { id: 133, name: 'Chicken Kolhapuri', price: 4.4, image: '/Images/D133.jpg' },
      { id: 134, name: 'Mutton Kheema', price: 4.2, image: '/Images/D134.jpg' },
      { id: 135, name: 'Tawa Fish Fry', price: 4.5, image: '/Images/D135.jpg' },
      { id: 136, name: 'Chicken Handi', price: 4.1, image: '/Images/D136.jpg' },
      { id: 137, name: 'Mutton Handi', price: 4.3, image: '/Images/D137.jpg' },
      { id: 138, name: 'Chicken Shahi Korma', price: 4.2, image: '/Images/D138.jpg' },
      { id: 139, name: 'Hyderabadi Mutton Biryani', price: 4.6, image: '/Images/D139.jpg' },
      { id: 140, name: 'Chicken Tandoori', price: 4.4, image: '/Images/D140.jpg' },
      { id: 141, name: 'Chilli Chicken', price: 4.1, image: '/Images/D141.jpg' },
      { id: 142, name: 'Fish Pakora', price: 4.0, image: '/Images/D142.jpg' },
      { id: 143, name: 'Chicken Hariyali Tikka', price: 4.2, image: '/Images/D143.jpg' },
      { id: 144, name: 'Chicken Malai Tikka', price: 4.3, image: '/Images/D144.jpg' },
      { id: 145, name: 'Mutton Kofta', price: 4.1, image: '/Images/D145.jpg' },
      { id: 146, name: 'Prawn Biryani', price: 4.4, image: '/Images/D146.jpg' },
      { id: 147, name: 'Mutton Biryani (Lucknowi)', price: 4.5, image: '/Images/D147.jpg' },
      { id: 148, name: 'Amritsari Fish Tikka', price: 4.3, image: '/Images/D148.jpg' },
      { id: 149, name: 'Bengali Mutton Curry (Kosha Mangsho)', price: 4.4, image: '/Images/D149.jpg' },
      { id: 150, name: 'Chicken Handi', price: 4.1, image: '/Images/D150.jpg' }  
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
      : diningProducts.filter(
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
      <Link to={`/dining/compare/${suggestion.id}`}>
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

  const filteredProducts = diningProducts.filter(product =>
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
      <h2 className="text-2xl font-semibold mb-4">Dining Products</h2>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {sortedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <Link to={`/dining/compare/${product.id}`} className="block">
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

export default DiningListPage;