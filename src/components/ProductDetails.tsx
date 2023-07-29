import React from 'react';
import { ProductType } from '../types';
import { Card, Typography } from 'antd';

const { Paragraph, Text, Link } = Typography;

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { company, created, categories, website } = product;

  return (
    <Card bordered={false}>
      <Paragraph>
        <Text strong>Company: </Text> {company}
      </Paragraph>
      <Paragraph>
        <Text strong>Created: </Text> {created}
      </Paragraph>
      <Paragraph>
        <Text strong>Categories: </Text> {categories.join(', ')}
      </Paragraph>
      <Paragraph>
        <Text strong>Website: </Text> <Link href={website} target="_blank">{website}</Link>
      </Paragraph>
    </Card>
  );
}

export default ProductDetails;
