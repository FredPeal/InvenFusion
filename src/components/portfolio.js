import React from 'react';
import ProductCard from './ProductCard';

const Portfolio = ({ products }) => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
