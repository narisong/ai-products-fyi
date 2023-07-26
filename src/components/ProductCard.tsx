import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Product } from '../types';

const { Title, Text } = Typography;

interface ProductCardProps {
  // product: {
  //   name: string;
  //   // tagline: string;
  //   categories: string;
  //   // image: string;
  // };
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, categories } = product;

  return (
    <Card bordered={false} style={{ display: 'flex', alignItems: 'center' }} bodyStyle={{ padding: 4 }}>
      <Row gutter={16} style={{ alignItems: 'center' }}>
        <Col>
          <img src={"https://avatars.githubusercontent.com/u/54333248?s=200&v=4"} alt={name} style={{ verticalAlign: 'center', width: 80, height: 80, objectFit: 'contain' }} />
        </Col>
        <Col>
          <Col>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div>
                <Title level={3} style={{ marginTop: 0 }}>{name}</Title>
                <Text>{name}</Text>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <Text type="secondary">{categories}</Text>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductCard;
