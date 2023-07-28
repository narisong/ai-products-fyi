import React from 'react';
import ProductListItem from './ProductListItem';
import { ProductType } from '../types';
import { List } from 'antd';

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={products}
      renderItem={product => (
        <List.Item>
          <ProductListItem product={product}></ProductListItem>
        </List.Item>
      )}
    />
  );
}

export default ProductList;
