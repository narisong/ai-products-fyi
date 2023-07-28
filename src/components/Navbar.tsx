import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Link to="/">
      <img src={logo} alt='Logo' style={{ height: '32px', marginRight: '16px' }} />
    </Link>
  );
}

export default Navbar;
