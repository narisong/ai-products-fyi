import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { ProductType } from '../types';

const { Title, Text } = Typography;

interface ProductCardProps {
  product: ProductType
}

const ProductListItemCard: React.FC<ProductCardProps> = ({ product }) => {
  const { name, categories, company, image, tagline } = product;

  return (
    <Card className='product-card' bordered={false} bodyStyle={{ padding: 4 }}>
      <Row gutter={16} style={{ alignItems: 'center' }}>
        <Col>
          <img src={image} alt={name} style={{ verticalAlign: 'center', width: 80, height: 80, objectFit: 'contain' }} />
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

export default ProductListItemCard;
