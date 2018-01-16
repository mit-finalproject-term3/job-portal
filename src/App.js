// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;



import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Top from './Components/Top';
import PostJob from './Components/PostJob';
import Private from './Components/Private';
import Mainpage from './Components/Mainpage';
import JobPage from './Components/JobPage';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import {Layout} from 'antd';
import './App.css';

const {Content, Footer} =  Layout;

const App = () => {
  return(
    <Layout className="layout">
      <Header/>
      <Content style={{ padding: '0 50px' }}>
        <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/postjob" component={PostJob} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/mainpage" component={Mainpage} />
        <Route path="/jobpage" component={JobPage} />
        </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2016 Created by Ant UED
      </Footer>
    </Layout>
  )
}

export default App
