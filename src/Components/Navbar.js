import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

export default class Navbar extends Component {
  render() {
    if (!!sessionStorage.jwt) {
      return (
        <div id="top-nav">
          <input
            className="icon"
            type="image"
            src="close.svg"
            alt="button"
            onClick={this.onClose}
          />
          <Link to="/">Home</Link>
          <Link to="/">Profile</Link>
          <Link to="/">Edit</Link>
          <Link to="/about">About</Link>
          <Link to="/postajob">Post A Job</Link>
        </div>
      );
    }

    return (
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', padding: '15px' }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/postajob">Post A Job</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
