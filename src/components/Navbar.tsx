import React from 'react';
import { Col, Layout, Menu, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Link to="/" style={{ margin: '20px 0 0 20px' }}>
          <img src={logo} alt='Logo' style={{ height: '32px', marginRight: '16px' }} />
        </Link>
      </Col>
      <Col>
        <Space style={{ margin: '20px 20px 0 0' }}>
          <Typography.Text style={{ fontSize: '20px', lineHeight: '20px' }}>Contact Us:</Typography.Text>
          <a href="https://twitter.com/risongna" target="_blank" rel="noreferrer">
            <TwitterOutlined style={{ fontSize: '40px', marginRight: '10px' }} />
          </a>
          <a href="https://www.linkedin.com/in/risong-na-95432540/" target="_blank" rel="noreferrer">
            <LinkedinOutlined style={{ fontSize: '40px', marginRight: '10px' }} />
          </a>
          <a href="https://github.com/narisong/ai-products-fyi" target="_blank" rel="noreferrer">
            <GithubOutlined style={{ fontSize: '40px' }} />
          </a>
        </Space>
      </Col>
    </Row>
  );
}

export default Navbar;
