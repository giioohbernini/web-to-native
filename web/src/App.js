import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Root from './Root'
import Home from './pages/Home'
import About from './pages/About'

const AppRouter = () => {
  return (
    <Router component={Root}>
			<Route>
				<Route component={Root}/>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About}/>
			</Route>
    </Router>
  );
}

export default AppRouter 
