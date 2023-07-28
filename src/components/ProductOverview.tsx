import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { ProductType } from '../types';

const { Title, Text } = Typography;

interface ProductCardProps {
  product: ProductType
}

const ProductOverview: React.FC<ProductCardProps> = ({ product }) => {
  const { name, company, tagline, categories } = product;

  return (
    <Card bordered={false} bodyStyle={{ padding: 4 }}>
      <Row gutter={16} style={{ alignItems: 'center' }}>
        <Col>
          <img src={"https://avatars.githubusercontent.com/u/54333248?s=200&v=4"} alt={name} style={{ verticalAlign: 'center', width: 80, height: 80, objectFit: 'contain' }} />
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
