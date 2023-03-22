import React from 'react'
import stylecss from '../stylesheet.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {
  Main, Neck, Shoulders, Chest, Back, Triceps, Biceps, Forearms, Abs, Glutes, Quads, Calf
} from './MuscleWindow.js'
export default function Muscle() {
  var Showed = <Neck />
  const handleText = (muscle) =>{
    console.log(muscle)
    console.log(Showed)
    switch(muscle){
      case "neck": Showed = <Neck/> ;break;
      case "main": Showed = <Main/> ;break;
      case "shoulders": Showed = <Shoulders/> ;break;
      case "back": Showed = <Back/> ;break;
      case "chest": Showed = <Chest/> ;break;
      case "triceps": Showed = <Triceps/> ;break;
      case "biceps": Showed = <Biceps/> ;break;
      case "forearm": Showed = <Forearms/> ;break;
      case "abs": Showed = <Abs/> ;break;
      case "glutes": Showed = <Glutes/> ;break;
      case "quads": Showed = <Quads/> ;break;
      case "calf": Showed = <Calf/> ;break;
  }
  console.log(Showed)
  }
  return (
    <div>
      <div className={'${stylescss.bodyClass} bodyClass'}>
        <div className={'${stylescss.ContainerMain} ContainerMain'}>
            <h1>Training your muscles</h1>
              <div className={'${stylescss.ContainerMusclesNav} ContainerMusclesMain'}>
                <button onClick={() => handleText("main")} className={'${stylescss.MusclesNav} MusclesNav'}>Everything</button>
                <button onClick={() => handleText("neck")} className={'${stylescss.MusclesNav} MusclesNav'}>Neck</button>
                <button onClick={() => handleText("shoulders")} className={'${stylescss.MusclesNav} MusclesNav'}>Shoulders</button>
                <button onClick={() => handleText("chest")} className={'${stylescss.MusclesNav} MusclesNav'}>Chest</button>
                <button onClick={() => handleText("back")} className={'${stylescss.MusclesNav} MusclesNav'}>Back</button>
                <button onClick={() => handleText("triceps")} className={'${stylescss.MusclesNav} MusclesNav'}>Triceps</button>
                <button onClick={() => handleText("biceps")} className={'${stylescss.MusclesNav} MusclesNav'}>Biceps</button>
                <button onClick={() => handleText("forearms")} className={'${stylescss.MusclesNav} MusclesNav'}>Forearms</button>
                <button onClick={() => handleText("abs")} className={'${stylescss.MusclesNav} MusclesNav'}>ABS</button>
                <button onClick={() => handleText("glutes")} className={'${stylescss.MusclesNav} MusclesNav'}>Glutes</button>
                <button onClick={() => handleText("quads")} className={'${stylescss.MusclesNav} MusclesNav'}>Quads</button>
                <button onClick={() => handleText("calf")} className={'${stylescss.MusclesNav} MusclesNav'}>Calfs</button>
              </div>
              <div className={'${stylescss.TextContainer} TextContainer'}>
              lotre-jiuh bdzfjivuilb
              {Showed}
              </div>
        </div>
      </div>
    </div>
  )
}
