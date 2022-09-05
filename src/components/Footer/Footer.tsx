import React from 'react'
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={style.footerTotal}>
        <div>
          <p className={style.fondoblanco}>®Todos los derechos reservados - Arg.-Br.2022 -</p>
        </div>
        <div>
            <a href="https://pluggy.ai/about" target="_BLANK" rel="noreferrer">
              <p className={style.fondoblanco}>Conocé más</p>
            </a>
        </div>
        <div>
            <a href="https://pluggy.ai/blog" target="_BLANK" rel="noreferrer">
              <p className={style.fondoblanco}>Noticias</p>
            </a>
        </div>
    </div>

  )
}

export default Footer