import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route}
from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from '.components/pages/AboutUs'
import ContactUs from '/.components/pages/ContactUs'



function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/AboutUs'} component={AboutUs}></Route>
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
