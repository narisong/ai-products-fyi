import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from '../firebase';
import { ProductType } from '../types';
import { Button, Card, Col, List, Row } from "antd";
import { Typography } from 'antd';
import ProductList from "../components/ProductList";

const { Title } = Typography;

const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
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
    <Row>
      <Col span={16}>
        <Title level={2} style={{ paddingLeft: 25 }}>AI Products</Title>
        <ProductList products={products}></ProductList>
      </Col>
    </Row>
  );
}

export default Home;
