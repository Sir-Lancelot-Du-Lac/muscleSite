import React from 'react';
import { Link } from 'react-router-dom';
import style from './Main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <Router>
        <div class='NavContainer'>
            <div className={'${style.NavItems} NavItems'}><Link style={{color: "white", textDecoration: 'none' }} to="/NavMus">Muscles and exercises</Link></div>
            <div className={'${style.NavItems} NavItems'}><Link style={{color: "white", textDecoration: 'none' }} to="/NavExa">Example training plans</Link></div>
            <div className={'${style.NavItems} NavItems'}><Link style={{color: "white", textDecoration: 'none' }} to="/NavYou">Your training plan</Link></div>
            <div className={'${style.NavItems} NavItems'}><Link style={{color: "white", textDecoration: 'none' }} to="/NavCon">Contact</Link></div>
        </div>
        <Routes>
          <Route path="/NavMus">

          </Route>
          <Route path="/NavExa">

          </Route>
          <Route path="/NavYou">

          </Route>
          <Route path="/NavCon">

          </Route>
        </Routes>
        </Router>
    </div>
  )
}
