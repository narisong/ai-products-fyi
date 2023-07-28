import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../firebase';
import { ProductType } from '../types';
import ProductOverview from '../components/ProductOverview';
import ProductDetails from '../components/ProductDetails';

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
      <ProductOverview product={product} />
      <ProductDetails product={product} />
    </div>
  );
}

export default Product;
