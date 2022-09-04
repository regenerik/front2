import axios from "axios"
export const GET_INFO_DOLLAR_BLUE = "get_info_dollar_blue"

interface Payload {
    quotes: any[]
    average: any
    slippage: any[]
  }
type ArticleAction = {
    type: string
    payload: Payload
}

type DispatchType = (args: ArticleAction) => ArticleAction


export function getInfoDollarBlue(){

    return async function(dispatch:DispatchType){
        try{
            const quotes = (await axios.get("https://bluggy.herokuapp.com/quotes")).data
            const average = (await axios.get("https://bluggy.herokuapp.com/average")).data
            const slippage = (await axios.get("https://bluggy.herokuapp.com/slippage")).data
            const payload:ArticleAction ={
                type:GET_INFO_DOLLAR_BLUE,
                payload:{quotes,average,slippage}
            }
            return dispatch(payload)
        }catch(error:any){
            console.log(error.message)
        }
    }

}