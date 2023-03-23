import React from 'react'
import stylecss from '../stylesheet.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import {MainMusc, Neck, Shoulders, Chest, Back} from './MuscleWindow.js'
import {Triceps, Biceps, Forearms} from './MuscleWindowArms'
import {Abs, Glutes, Quads, Calf} from './MuscleWindowLegsAbs'
import MuscleLinks from './MuscleLinks'


export default function Muscle() {
  return (
    <div>
      <div className={'${stylescss.bodyClass} bodyClass'}>
        <div className={'${stylescss.ContainerMain} ContainerMain'}>
          <div className={'${stylescss.ListOfMuscles} ListOfMuscles'}>
            <h1>Training your muscles</h1>
            <MuscleLinks/>
          </div>
          <div className={'${stylescss.ParagraphF} ParagraphF'}>
          </div>
              <Routes>
                <Route path="/" element={<MainMusc/>}/>
                <Route path="/neck" element={<Neck/>}/>
                <Route path="/shoulders" element={<Shoulders/>}/>
                <Route path="/chest" element={<Chest/>}/>
                <Route path="/back" element={<Back/>}/>
                <Route path="/triceps" element={<Triceps/>}/>
                <Route path="/biceps" element={<Biceps/>}/>
                <Route path="/forearms" element={<Forearms/>}/>
                <Route path="/abs" element={<Abs/>}/>
                <Route path="/glutes" element={<Glutes/>}/>
                <Route path="/quads" element={<Quads/>}/>
                <Route path="/calf" element={<Calf/>}/>
              </Routes>
        </div>
      </div>
    </div>
  )
}
