    import React from 'react'
    import {Link} from 'react-router-dom'
    import stylecss from '../stylesheet.scss'
export default function () {
  return (
    <div>
        <div className='${stylescss.ContainerMusclesNav} ContainerMusclesNav'>
        <Link to="/NavMus" className={'${stylescss.MusclesNav} MusclesNav'}>This site have</Link>
        <Link to="/NavMus/neck" className={'${stylescss.MusclesNav} MusclesNav'}>Neck</Link>
        <Link to="/NavMus/shoulders" className={'${stylescss.MusclesNav} MusclesNav'}>Shoulders</Link>
        <Link to="/NavMus/chest" className={'${stylescss.MusclesNav} MusclesNav'}>Chest</Link>
        <Link to="/NavMus/back" className={'${stylescss.MusclesNav} MusclesNav'}>Back</Link>
        <Link to="/NavMus/triceps" className={'${stylescss.MusclesNav} MusclesNav'}>Triceps</Link>
        <Link to="/NavMus/biceps" className={'${stylescss.MusclesNav} MusclesNav'}>Biceps</Link>
        <Link to="/NavMus/forearms" className={'${stylescss.MusclesNav} MusclesNav'}>Forearms</Link>
        <Link to="/NavMus/abs" className={'${stylescss.MusclesNav} MusclesNav'}>ABS</Link>
        <Link to="/NavMus/glutes" className={'${stylescss.MusclesNav} MusclesNav'}>Glutes</Link>
        <Link to="/NavMus/quads" className={'${stylescss.MusclesNav} MusclesNav'}>Quads</Link>
        <Link to="/NavMus/calf" className={'${stylescss.MusclesNav} MusclesNav'}>Calfs</Link>
        </div>
    </div>
  )
}
