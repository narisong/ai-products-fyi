import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { ProductType } from '../types';

const { Title, Text } = Typography;

interface ProductCardProps {
  product: ProductType
}

const ProductOverview: React.FC<ProductCardProps> = ({ product }) => {
  const { name, image, tagline } = product;

  return (
    <Card bordered={false} bodyStyle={{ padding: 4 }}>
      <Row gutter={16} style={{ alignItems: 'center' }}>
        <Col>
          <img src={image} alt={name} style={{ verticalAlign: 'center', width: 80, height: 80, objectFit: 'contain' }} />
        </Col>
        <Col span={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Title level={3} style={{ marginTop: 0 }}>{name}</Title>
            <Text>{tagline}</Text>
          </div>
        </Col>
      </Row>
    </Card >
  );
};

export default ProductOverview;
