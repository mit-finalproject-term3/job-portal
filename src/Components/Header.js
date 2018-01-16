import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

// Reenas version
const header = () => (
  <Header className="top-nav">
    <div className="logo">
      <img src="MITlogo.png" alt="logo" className="MITlogo" width={100}/>
    </div>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['1']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <Link to='/'>Top</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to='/mainpage'>Main Page</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to='/jobpage'>Job Page</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to='/postjob'>Post Job</Link>
      </Menu.Item>
      <Menu.Item key="5">
        {
          isAuthenticated() ? (<Link to='/logout'>Logout</Link>) : (<Link to='/login'>Login</Link>)
        }
      </Menu.Item>
    </Menu>
  </Header>
)

export default header;
