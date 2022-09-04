import { GET_INFO_DOLLAR_BLUE } from "./actions";



const initialState = {
    quotes: [],
    average:{average_buy_price:"",average_sell_price:""},
    slippage:[],
}

function reducer(state= initialState, action:any){
    switch(action.type){
        case GET_INFO_DOLLAR_BLUE:
            return{
                ...action.payload,
            }
        
        default:
            return state
    }
}

export default reducer;