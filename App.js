import React from 'react';
import Discover from './pages/Discover';
import Home from './pages/Home';
import Map from './pages/MapPage';
import Settings from './pages/Settings';
import Subscriptions from './pages/Subscriptions';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";



export default function App () {
    return (
      <Router>
          <Header/>

          <Routes>
          <Route path="/" component={Home} />
          <Route path="/Map" component={Map} />
          <Route path="/Discover" component={Discover} />
          <Route path="/Subscriptions" component={Subscriptions} />
          <Route path="/Settings" component={Settings} />
          </Routes>
      </Router>
    )
  
}


