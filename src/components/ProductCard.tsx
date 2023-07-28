import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Product } from '../types';

const { Title, Text } = Typography;

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, company, tagline, categories } = product;

  return (
    <Card className='product-card' bordered={false} bodyStyle={{ padding: 4 }}>
      <Row gutter={16} style={{ alignItems: 'center' }}>
        <Col>
          <img src={"https://avatars.githubusercontent.com/u/54333248?s=200&v=4"} alt={name} style={{ verticalAlign: 'center', width: 80, height: 80, objectFit: 'contain' }} />
        </Col>
        <Col span={20}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div>
              <Title level={3} style={{ marginTop: 0 }}>{name}<Text style={{ marginLeft: 4 }}>@{company}</Text></Title>
              <Text>{tagline}</Text>
            </div>
            <div style={{ marginTop: 'auto' }}>
              {
                categories.map((category) => (<Text key={category} type="secondary" style={{ marginRight: 16 }}>{category}</Text>))
              }
            </div>
          </div>
        </Col>
      </Row>
    </Card >
  );
};

export default ProductCard;
