import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  return (
    <ProductCard product={product}></ProductCard>
  );
}

export default ProductListItem;
