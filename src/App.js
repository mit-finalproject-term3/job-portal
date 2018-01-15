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
import Private from './Components/Private';
import Mainpage from './Components/Mainpage';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import './App.css';

const App = () => {
  return(
    <div>
      <img src="MITlogo.png" alt="logo" className="MITlogo" width={100}/>
      <Header />

      <main>
        <Switch>
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="/mainpage" component={Mainpage} />
        <Route path="/" component={Top} />
        </Switch>
      </main>
    </div>
  )
}

export default App
