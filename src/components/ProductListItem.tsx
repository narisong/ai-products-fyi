import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { id } = product;
  return (
    <Link to={`/products/${id}`}>
      <ProductCard product={product}></ProductCard>
    </Link>
  );
}

export default ProductListItem;
