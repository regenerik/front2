import React from 'react'
import tipo from "../../images/tipo.png"
import style from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={style.sideBarContainer}>
      <p className={style.frase}>Acá corroboraría mis dólares.
        Si tuviera dólares...
      </p>
      <img className={style.elTipo} src={tipo} alt="hombre"/>
      
    </div>
  )
}

export default Sidebar