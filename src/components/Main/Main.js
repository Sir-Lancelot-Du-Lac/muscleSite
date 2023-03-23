import React from 'react';
import { Link } from 'react-router-dom';
import stylescss from './Main.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Contact from '../Contact/Contact.js';
import Home from '../Home/Home.js';
import OwnTrainingPlan from '../OwnTrainingPlan/OwnTrainingPlan.js';
import Muscle from '../Muscle/Muscle.js';
import Exercises from '../Exercises/Exercises.js'

export default function Main() {
  return (
    <div>
      <div className={'${stylescss.blurBc} blurBc'}></div>
      <Router>
        <div className={'${stylescss.NavContainer} NavContainer'}>
            <Link to="/" className={'${stylescss.NavItems} NavItems'}>Home</Link>
            <Link to="/NavMus" className={'${stylescss.NavItems} NavItems'}>Muscles</Link>
            <Link to="/NavExa" className={'${stylescss.NavItems} NavItems'}>Example plans</Link>
            <Link to="/NavYou" className={'${stylescss.NavItems} NavItems'}>Your training plan</Link>
            <Link to="/NavCon" className={'${stylescss.NavItems} NavItems'}>Contact</Link>
        </div>
        <div className={'${stylescss.TextContainer} TextContainer'}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/NavMus/*" element={<Muscle/>}/>
            <Route path="/NavExa" element={<Exercises/>}/>
            <Route path="/NavYou" element={<OwnTrainingPlan/>}/>
            <Route path="/NavCon" element={<Contact/>}/>
          </Routes>
        </div>
        </Router>
        <div id="footer">
          Hello <br/>
          It's my site :)
        </div>
    </div>
  )
}
