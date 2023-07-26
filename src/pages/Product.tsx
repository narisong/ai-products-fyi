import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../firebase';
import { Product as ProductType } from '../types';

type RouteParams = {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetchProduct(id!).then(productFromDB => setProduct(productFromDB));
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.company}</p>
      {/* Rest of your product details */}
    </div>
  );
}

export default Product;
