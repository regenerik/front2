import React from 'react'
import tipo from "../../images/tipo.png"
import style from "./Sidebar.module.css"

const Sidebar = () => {
  return (
    <div className={style.sideBarContainer}>
      <p className={style.frase}>Acá corroboraría mis dólares.
        Si tuviera dólares...
      <img className={style.elTipo} src={tipo} alt="hombre"/>
      </p>
    </div>
  )
}

export default Sidebar