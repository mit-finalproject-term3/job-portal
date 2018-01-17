import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const header = () => (
  <Header className="top-nav">
    <div className="logo" />
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Link to='/'>Top</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/postjob'>Post Job</Link>
      </Menu.Item>
      <Menu.Item key="3">
        {
          isAuthenticated() ? (<Link to='/logout'>Logout</Link>) : (<Link to='/login'>Login</Link>)
        }
      </Menu.Item>
    </Menu>
  </Header>
)

export default header;
