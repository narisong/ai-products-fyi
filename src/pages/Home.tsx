import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from '../firebase';
import { Product } from '../types';
import { Button, Card, List } from "antd";
import { Typography } from 'antd';
import ProductCard from "../components/ProductCard";
import ProductList from "../components/ProductList";

const { Title } = Typography;

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts()
      .then(productsFromDB => {
        setProducts(productsFromDB)
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Title level={2}>AI Products</Title>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default Home;
