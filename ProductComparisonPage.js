import React from 'react';
import { useParams } from 'react-router-dom';
import ProductComparisonTable from './ProductComparisonTable';

const ProductComparisonPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = getProductById(id); // Replace this with your logic to get product details

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
      <ProductComparisonTable product={product} />
    </div>
  );
};

// Dummy product data (replace this with your actual data retrieval logic)
const getProductById = (id) => {
  // Dummy data for demonstration
  const products = {
51: {
      id: 51,
      name: 'Chinos',
      amazon: { price: 800, rating: 4.2, review: 'Comfortable fit', image: '/Images/51.jpg' },
      flipkart: { price: 850, rating: 4.4, review: 'Great quality', image: '/Images/51.jpg' }
    },
52: {
      id: 52,
      name: 'Formal Pants',
      amazon: { price: 1200, rating: 4.5, review: 'Perfect for office wear', image: '/Images/52.jpg' },
      flipkart: { price: 1250, rating: 4.6, review: 'Excellent quality material', image: '/Images/52.jpg' }
    },
53: {
      id: 53,
      name: 'Sneakers',
      amazon: { price: 1800, rating: 4.3, review: 'Comfortable and stylish', image: '/Images/53.jpg' },
      flipkart: { price: 1900, rating: 4.4, review: 'Great for casual outings', image: '/Images/53.jpg' }
    },
    54: {
      id: 54,
      name: 'T-Shirt',
      amazon: { price: 500, rating: 4.0, review: 'Comfortable and casual', image: '/Images/54.jpg' },
      flipkart: { price: 550, rating: 4.2, review: 'Good quality fabric', image: '/Images/54.jpg' }
    },
55: {
      id: 55,
      name: 'Saree',
      amazon: { price: 1500, rating: 4.5, review: 'Elegant and traditional', image: '/Images/55.jpg' },
      flipkart: { price: 1600, rating: 4.7, review: 'Beautiful design', image: '/Images/55.jpg' }
    },
56: {
      id: 56,
      name: 'Kurta',
      amazon: { price: 900, rating: 4.3, review: 'Stylish and comfortable', image: '/Images/56.jpg' },
      flipkart: { price: 950, rating: 4.4, review: 'Perfect for festive occasions', image: '/Images/56.jpg' }
    },
57: {
      id: 57,
      name: 'Slippers',
      amazon: { price: 300, rating: 3.8, review: 'Simple and affordable', image: '/Images/57.jpg' },
      flipkart: { price: 350, rating: 4.0, review: 'Durable and lightweight', image: '/Images/57.jpg' }
    },
58: {
      id: 58,
      name: 'Lehenga',
      amazon: { price: 2000, rating: 4.6, review: 'Exquisite design', image: '/Images/58.jpg' },
      flipkart: { price: 2100, rating: 4.8, review: 'High-quality fabric', image: '/Images/58.jpg' }
    },
59: {
      id: 59,
      name: 'Crop Top',
      amazon: { price: 700, rating: 4.1, review: 'Trendy and fashionable', image: '/Images/59.jpg' },
      flipkart: { price: 750, rating: 4.3, review: 'Versatile and stylish', image: '/Images/59.jpg' }
    },
60: {
      id: 60,
      name: 'Shoes',
      amazon: { price: 1700, rating: 4.4, review: 'Sleek and modern design', image: '/Images/60.jpg' },
      flipkart: { price: 1800, rating: 4.5, review: 'Great for everyday wear', image: '/Images/60.jpg' }
    },
    61: {
      id: 61,
      name: 'Denim Jeans',
      amazon: { price: 1500, rating: 4.7, review: 'Classic and durable', image: '/Images/61.jpg' },
      flipkart: { price: 1550, rating: 4.8, review: 'Perfect fit', image: '/Images/61.jpg' }
    },
62: {
      id: 62,
      name: 'Hoodie',
      amazon: { price: 1200, rating: 4.5, review: 'Warm and comfortable', image: '/Images/62.jpg' },
      flipkart: { price: 1250, rating: 4.6, review: 'Stylish and trendy', image: '/Images/62.jpg' }
    },
63: {
      id: 63,
      name: 'Maxi Dress',
      amazon: { price: 1800, rating: 4.6, review: 'Elegant and flowy', image: '/Images/63.jpg' },
      flipkart: { price: 1850, rating: 4.7, review: 'Perfect for special occasions', image: '/Images/63.jpg' }
    },
64: {
      id: 64,
      name: 'Blazer',
      amazon: { price: 2000, rating: 4.4, review: 'Sharp and sophisticated', image: '/Images/64.jpg' },
      flipkart: { price: 2100, rating: 4.5, review: 'Great for formal events', image: '/Images/64.jpg' }
    },
65: {
      id: 65,
      name: 'Jumpsuit',
      amazon: { price: 1600, rating: 4.3, review: 'Stylish and versatile', image: '/Images/65.jpg' },
      flipkart: { price: 1650, rating: 4.4, review: 'Comfortable and chic', image: '/Images/65.jpg' }
    },
66: {
      id: 66,
      name: 'Polo Shirt',
      amazon: { price: 1000, rating: 4.2, review: 'Casual and stylish', image: '/Images/66.jpg' },
      flipkart: { price: 1050, rating: 4.3, review: 'Good quality fabric', image: '/Images/66.jpg' }
    },
67: {
      id: 67,
      name: 'Palazzo Pants',
      amazon: { price: 850, rating: 4.0, review: 'Comfortable and airy', image: '/Images/67.jpg' },
      flipkart: { price: 900, rating: 4.1, review: 'Trendy and lightweight', image: '/Images/67.jpg' }
    },
68: {
      id: 68,
      name: 'Anarkali Suit',
      amazon: { price: 1900, rating: 4.5, review: 'Traditional and elegant', image: '/Images/68.jpg' },
      flipkart: { price: 1950, rating: 4.6, review: 'Beautiful embroidery', image: '/Images/68.jpg' }
    },
69: {
      id: 69,
      name: 'Harem Pants',
      amazon: { price: 700, rating: 4.1, review: 'Unique and comfortable', image: '/Images/69.jpg' },
      flipkart: { price: 750, rating: 4.2, review: 'Stylish and relaxed fit', image: '/Images/69.jpg' }
    },
70: {
      id: 70,
      name: 'Trench Coat',
      amazon: { price: 2000, rating: 4.7, review: 'Timeless and versatile', image: '/Images/70.jpg' },
      flipkart: { price: 2050, rating: 4.8, review: 'Great for layering', image: '/Images/70.jpg' }
    },
    71: {
      id: 71,
      name: 'Crop Flare Jeans',
      amazon: { price: 1400, rating: 4.6, review: 'Trendy and flattering', image: '/Images/71.jpg' },
      flipkart: { price: 1450, rating: 4.7, review: 'Perfect for casual outings', image: '/Images/71.jpg' }
    },
72: {
      id: 72,
      name: 'Turtleneck Sweater',
      amazon: { price: 1100, rating: 4.3, review: 'Cozy and warm', image: '/Images/72.jpg' },
      flipkart: { price: 1150, rating: 4.4, review: 'Classic winter staple', image: '/Images/72.jpg' }
    },
73: {
      id: 73,
      name: 'Pleated Skirt',
      amazon: { price: 900, rating: 4.2, review: 'Chic and feminine', image: '/Images/73.jpg' },
      flipkart: { price: 950, rating: 4.3, review: 'Versatile wardrobe piece', image: '/Images/73.jpg' }
    },
74: {
      id: 74,
      name: 'Tunic Top',
      amazon: { price: 750, rating: 4.0, review: 'Flowy and comfortable', image: '/Images/74.jpg' },
      flipkart: { price: 800, rating: 4.1, review: 'Effortlessly stylish', image: '/Images/74.jpg' }
    },
75: {
      id: 75,
      name: 'Midi Dress',
      amazon: { price: 1700, rating: 4.5, review: 'Elegant and versatile', image: '/Images/75.jpg' },
      flipkart: { price: 1750, rating: 4.6, review: 'Perfect for various occasions', image: '/Images/75.jpg' }
    },
76: {
      id: 76,
      name: 'Denim Jacket',
      amazon: { price: 1600, rating: 4.4, review: 'Classic and timeless', image: '/Images/76.jpg' },
      flipkart: { price: 1650, rating: 4.5, review: 'Stylish outerwear staple', image: '/Images/76.jpg' }
    },
77: {
      id: 77,
      name: 'Pullover Hoodie',
      amazon: { price: 1300, rating: 4.1, review: 'Comfortable and cozy', image: '/Images/77.jpg' },
      flipkart: { price: 1350, rating: 4.2, review: 'Perfect for casual days', image: '/Images/77.jpg' }
    },
78: {
      id: 78,
      name: 'High-Waisted Jeans',
      amazon: { price: 1200, rating: 4.3, review: 'Flattering and trendy', image: '/Images/78.jpg' },
      flipkart: { price: 1250, rating: 4.4, review: 'Great fit and quality', image: '/Images/78.jpg' }
    },
79: {
      id: 79,
      name: 'Wrap Dress',
      amazon: { price: 1800, rating: 4.7, review: 'Figure-flattering and stylish', image: '/Images/79.jpg' },
      flipkart: { price: 1850, rating: 4.8, review: 'Versatile wardrobe essential', image: '/Images/79.jpg' }
    },
80: {
      id: 80,
      name: 'Oversized Sweater',
      amazon: { price: 1500, rating: 4.6, review: 'Comfortable and stylish', image: '/Images/80.jpg' },
      flipkart: { price: 1550, rating: 4.7, review: 'Perfect for layering', image: '/Images/80.jpg' }
    },
    81: {
      id: 81,
      name: 'Boat Neck Top',
      amazon: { price: 600, rating: 4.2, review: 'Stylish and versatile', image: '/Images/81.jpg' },
      flipkart: { price: 650, rating: 4.3, review: 'Comfortable fit', image: '/Images/81.jpg' }
    },
82: {
      id: 82,
      name: 'Cropped Wide-Leg Pants',
      amazon: { price: 850, rating: 4.5, review: 'Fashionable and trendy', image: '/Images/82.jpg' },
      flipkart: { price: 900, rating: 4.6, review: 'Perfect for summer', image: '/Images/82.jpg' }
    },
83: {
      id: 83,
      name: 'Bomber Jacket',
      amazon: { price: 1300, rating: 4.4, review: 'Cool and edgy', image: '/Images/83.jpg' },
      flipkart: { price: 1350, rating: 4.5, review: 'Stylish outerwear', image: '/Images/83.jpg' }
    },
84: {
      id: 84,
      name: 'Denim Skirt',
      amazon: { price: 950, rating: 4.1, review: 'Casual and chic', image: '/Images/84.jpg' },
      flipkart: { price: 1000, rating: 4.2, review: 'Versatile wardrobe staple', image: '/Images/84.jpg' }
    },
85: {
      id: 85,
      name: 'Off-Shoulder Dress',
      amazon: { price: 1600, rating: 4.7, review: 'Feminine and elegant', image: '/Images/85.jpg' },
      flipkart: { price: 1650, rating: 4.8, review: 'Perfect for special occasions', image: '/Images/85.jpg' }
    },
86: {
      id: 86,
      name: 'Graphic Tee',
      amazon: { price: 700, rating: 4.0, review: 'Trendy and comfortable', image: '/Images/86.jpg' },
      flipkart: { price: 750, rating: 4.1, review: 'Cool design', image: '/Images/86.jpg' }
    },
87: {
      id: 87,
      name: 'Pencil Skirt',
      amazon: { price: 1100, rating: 4.3, review: 'Sophisticated and stylish', image: '/Images/87.jpg' },
      flipkart: { price: 1150, rating: 4.4, review: 'Flattering silhouette', image: '/Images/87.jpg' }
    },
88: {
      id: 88,
      name: 'Cowl Neck Sweater',
      amazon: { price: 1200, rating: 4.6, review: 'Cozy and stylish', image: '/Images/88.jpg' },
      flipkart: { price: 1250, rating: 4.7, review: 'Warm and comfortable', image: '/Images/88.jpg' }
    },
89: {
      id: 89,
      name: 'Ruffled Blouse',
      amazon: { price: 900, rating: 4.2, review: 'Feminine and chic', image: '/Images/89.jpg' },
      flipkart: { price: 950, rating: 4.3, review: 'Pretty detailing', image: '/Images/89.jpg' }
    },
90: {
      id: 90,
      name: 'Tailored Suit',
      amazon: { price: 2000, rating: 4.8, review: 'Sleek and sophisticated', image: '/Images/90.jpg' },
      flipkart: { price: 2050, rating: 4.9, review: 'Perfect fit and quality', image: '/Images/90.jpg' }
    },
    91: {
      id: 91,
      name: 'Floral Maxi Dress',
      amazon: { price: 1800, rating: 4.5, review: 'Elegant and feminine', image: '/Images/91.jpg' },
      flipkart: { price: 1850, rating: 4.6, review: 'Perfect for summer events', image: '/Images/91.jpg' }
    },
92: {
      id: 92,
      name: 'Trench Skirt',
      amazon: { price: 1500, rating: 4.3, review: 'Stylish and versatile', image: '/Images/92.jpg' },
      flipkart: { price: 1550, rating: 4.4, review: 'Great for casual outings', image: '/Images/92.jpg' }
    },
93: {
      id: 93,
      name: 'Linen Shirt',
      amazon: { price: 1000, rating: 4.2, review: 'Cool and breathable', image: '/Images/93.jpg' },
      flipkart: { price: 1050, rating: 4.3, review: 'Perfect for summer days', image: '/Images/93.jpg' }
    },
94: {
      id: 94,
      name: 'Faux Leather Jacket',
      amazon: { price: 1700, rating: 4.4, review: 'Edgy and stylish', image: '/Images/94.jpg' },
      flipkart: { price: 1750, rating: 4.5, review: 'Great for casual looks', image: '/Images/94.jpg' }
    },
95: {
      id: 95,
      name: 'Bell Sleeve Top',
      amazon: { price: 800, rating: 4.0, review: 'Trendy and fashionable', image: '/Images/95.jpg' },
      flipkart: { price: 850, rating: 4.1, review: 'Stylish and versatile', image: '/Images/95.jpg' }
    },
96: {
      id: 96,
      name: 'Wide Leg Jumpsuit',
      amazon: { price: 1900, rating: 4.7, review: 'Chic and elegant', image: '/Images/96.jpg' },
      flipkart: { price: 1950, rating: 4.8, review: 'Perfect for various occasions', image: '/Images/96.jpg' }
    },
97: {
      id: 97,
      name: 'Silk Blouse',
      amazon: { price: 1400, rating: 4.1, review: 'Luxurious and versatile', image: '/Images/97.jpg' },
      flipkart: { price: 1450, rating: 4.2, review: 'Soft and comfortable', image: '/Images/97.jpg' }
    },
98: {
      id: 98,
      name: 'Cargo Pants',
      amazon: { price: 1100, rating: 4.0, review: 'Functional and stylish', image: '/Images/98.jpg' },
      flipkart: { price: 1150, rating: 4.1, review: 'Great for outdoor activities', image: '/Images/98.jpg' }
    },
99: {
      id: 99,
      name: 'Pleated Blouse',
      amazon: { price: 900, rating: 4.3, review: 'Elegant and sophisticated', image: '/Images/99.jpg' },
      flipkart: { price: 950, rating: 4.4, review: 'Timeless wardrobe piece', image: '/Images/99.jpg' }
    },
100: {
      id: 100,
      name: 'Tweed Blazer',
      amazon: { price: 2000, rating: 4.8, review: 'Classic and refined', image: '/Images/100.jpg' },
      flipkart: { price: 2050, rating: 4.9, review: 'Versatile wardrobe staple', image: '/Images/100.jpg' }
    },
    // Add more products
  };

  return products[id];
};


export default ProductComparisonPage;