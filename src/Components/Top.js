import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
  {
    title: 'Title 7',
  },
  {
    title: 'Title 8',
  },
];

const Top = () => (
  <div>
    <br/>
      <h2>Top Page</h2>
    <br/>
    <div className="mainpic_div">
       <img src="mainpic.jpg" alt="mainpic" className="mainpic" width={800}/>
    </div>
    <br/>
      <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>
          Card content
          <br/>
          <Link to="/mainpage">click here</Link>
          </Card>
        </List.Item>
      )}
    />
  </div>
)

export default Top;
