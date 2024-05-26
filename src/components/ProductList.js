import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { BrowserRouter as Router } from 'react-router-dom';

const initialProducts = [
  {
    id: 1,
    image: 'https://dummyimage.com/420x260',
    category: 'CATEGORY',
    title: 'The Catalyzer',
    price: '16.00'
  },
  {
    id: 2,
    image: 'https://dummyimage.com/421x261',
    category: 'CATEGORY',
    title: 'Shooting Stars',
    price: '21.15'
  },
  // Agrega más productos aquí si es necesario
];

const ProductList = () => {

  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    image: '',
    category: '',
    title: '',
    price: ''
    
  }
);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({
      image: '',
      category: '',
      title: '',
      price: ''
    });
  };

  return (
    <section id="products" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-gray-900 text-lg font-medium mb-4">Add New Product</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="border p-2 rounded"
            />
            <button
              onClick={handleAddProduct}
              className="bg-indigo-500 text-white p-2 rounded"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
