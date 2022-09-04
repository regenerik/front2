import reducer from "./reducer"                                 // reducer se encarga de filtrar las peticiones de las acciones
import { createStore, applyMiddleware } from "redux"            // creacion del store y funcion que permite aplicar middleware
import thunk from "redux-thunk"                                 // middleware permite hacer peticiones asincronicas
import { composeWithDevTools } from "redux-devtools-extension"  // para que funcione dev tools

const store =createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))

)

//typescripea la store y la guarda en una variable RootState + exportacion
export type RootState = ReturnType<typeof store.getState>
//Aclara que es lo que va a despachar el dispatch , formato { type: any , payload:any }
export type AppDispatch = typeof store.dispatch
//Lo siguiente viene en el hooks...



export default store;