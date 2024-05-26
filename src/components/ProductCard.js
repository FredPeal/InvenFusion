import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link

const ProductCard = ({ product }) => {
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link to="/portfolio"> {/* Establece la ruta de redirección */}
        <div className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image} />
        </div>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
          <p className="mt-1">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
