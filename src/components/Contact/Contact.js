import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Contact() {

  const handleCopy = (object) =>{
    if(object==1){
      console.log("copying")
      navigator.clipboard.writeText("lionel.feter@wp.pl")
    }
  }

  return (
    <div>
      <div className={'${stylescss.bodyClass} bodyClass'}>
        <div className={'${stylescss.ContainerMain} ContainerMain'}>
            <h1>Contact</h1>
            <a href='https://github.com/Sir-Lancelot-Du-Lac'><i className='bi bi-github 300px ${stylescss.iconSize} iconSize' /></a>
            <a href='https://www.linkedin.com/in/jarema-feter-947b35269/'><i className="bi bi-linkedin ${stylescss.iconSize} iconSize" /></a>
            <a><i className="bi bi-envelope-at ${stylescss.iconSize} iconSize" onClick={() => handleCopy(1)} /></a>
        </div>
      </div>
    </div>
  )
}
