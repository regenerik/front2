import { useAppSelector } from '../../redux/hooks'
import style from "./Article.module.css"

interface props {
  actual:string;
}

const Article = ({actual}:props): JSX.Element => {

 

  const {quotes, average, slippage} = useAppSelector(state=>state)

  if(!actual) return <span>cargando...</span>
  //Segun "actual", contenido de Article por Ternario.
  return (
    <div>
      {
        actual ==="quotes"?
      <div className={style.contenedorCotiz}>

        <div className={style.cabezera}>
          <h1>COTIZACIÓN DOLAR BLUE</h1>
          <h3 className={style.subtitulo}>TOTALMENTE EN VIVO</h3>
        </div>

        {quotes?.map((e:any,i:number)=>{
          return(
            <div className={style.cardQuotes} key={i}>
              <div className={style.col1}>
                <span className={style.titulo}>Fuente: </span>
                <a href={e.source} target="_BLANK" rel="noreferrer">
                  <span className={style.titulo}>{e.name}</span>
                </a>
              </div>

              <div className={style.col2}>
                <span className={style.titulo}>Compra: </span>
                <span className={style.titulo}>$ {e.buy_price}</span>
              </div>

              <div className={style.col3}>
                <span className={style.titulo}>Venta: </span>
                <span className={style.titulo}>$ {e.sell_price}</span>
              </div>

            </div>
          )
        })}
        <br />
        <br />
      </div>
      :actual==="slippage"?
        <div >


            <div className={style.cabezera}>
              <h1>DIFERENCIAS DE FUENTES</h1>
              <h3 className={style.subtitulo}>RESPECTO AL PROMEDIO</h3>
            </div>
          {slippage?.map((e:any,i:any)=>{
          return(
            <div key={i} className={style.cards}>
              <a className={style.titulo} href={e.source} target="_BLANK" rel="noreferrer">
                Fuente: {e.name}
              </a>
              <span className={style.titulo}>Diferencia precio de compra: $ {e.buy_price_slippage}</span>
              <span className={style.titulo}>Diferencia precio de venta: $ {e.sell_price_slippage}</span>

          </div>
          )
          })}
          <br />
          <br />


        </div>
        :
        <div className={style.orden}>
          <div className={style.cabezera}>
            <h1>PROMEDIO DE VALORES</h1>
            <h3 className={style.subtitulo}>DE TODAS LAS FUENTES</h3>
          </div>
          <div className={style.cards}>
              <p className={style.titulo}>Promedios</p>
            <br />
            <span className={style.titulo}>Compra: $ {average.average_buy_price}</span>
            <br />
            <span className={style.titulo}>Venta: $ {average.average_sell_price}</span>
          </div> 
          </div>
        }
    </div>
  )
}

export default Article