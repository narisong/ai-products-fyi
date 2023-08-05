import React from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../types';
import ProductListItemCard from './ProductListItemCard';

interface ProductListItemProps {
  product: ProductType;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { id } = product;
  return (
    <Link to={`/products/${id}`}>
      <ProductListItemCard product={product}></ProductListItemCard>
    </Link>
  );
}

export default ProductListItem;
