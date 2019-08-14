import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Video from './pages/Video';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route exact path="/video" component={Video}></Route>
        <Route exact path="/video/:activeVideo" component={Video} />
        <Route exact path="/rooms/:slug" component={SingleRoom}></Route>
        <Route component={Error} />
      </Switch>
      {/* <Home></Home>
      <Rooms></Rooms>
      <SingleRoom></SingleRoom>
      <Error></Error> */}
    </>
  );
}

export default App;
