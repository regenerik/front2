import React from 'react'
import style from "./Header.module.css"
import logo from "../../images/pluggy_logo_sin_animar.png"
import { useState } from 'react'
import logo_gif from "../../images/pluggy_bluggy_v2.gif"

const Header = () => {

  const [logoState, setLogoState] = useState(logo);

  return (
    <div className={style.headerContainer}>
      <img src={logoState}
        className={style.logo}
        onMouseLeave={() => setLogoState(logo)}
        onMouseOver={() => setLogoState(logo_gif)}
        alt="logo"
        />
    </div>
    
  )
}

export default Header