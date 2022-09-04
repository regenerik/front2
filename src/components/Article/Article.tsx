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
        <div>
          {slippage?.map((e:any,i:any)=>{
          return(
            <div key={i} className={style.cards}>
              <span className={style.titulo}>Fuente: {e.name}</span>
              <br />
              <span className={style.titulo}>Diferencia precio de compra: $ {e.buy_price_slippage}</span>
              <br />
              <span className={style.titulo}>Diferencia precio de venta: $ {e.sell_price_slippage}</span>
              <br />
              <br />
              <br />
            </div>
          )
          })}
          <br />
          <br />
        </div>
        :
        <div className={style.cards}>
            <p className={style.titulo}>Promedios</p>
          <br />
          <span className={style.titulo}>Compra: $ {average.average_buy_price}</span>
          <br />
          <span className={style.titulo}>Venta: $ {average.average_sell_price}</span>
        </div> 
        }
    </div>
  )
}

export default Article