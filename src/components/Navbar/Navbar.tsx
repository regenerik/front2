import style from "./Navbar.module.css"

interface props{
  setActual:any;
  actual:string
}

const Navbar = ({setActual,actual}:props) => {


  return (
    <div className={style.navContainer}>
      <div>
        <p className={style.misOpciones}>MIS OPCIONES</p>
      </div>
      <div className={style.Nav}>
                <button className={actual==="quotes"?style.selected:style.unselected} onClick={()=>setActual("quotes")}>Cotizaciones</button>

                <button className={actual==="average"?style.selected:style.unselected} onClick={()=>setActual("average")}>Promedios</button>

                <button className={actual==="slippage"?style.selected:style.unselected} onClick={()=>setActual("slippage")}>Diferencias</button>

      </div>
    </div>
  )
}

export default Navbar