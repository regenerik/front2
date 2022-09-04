import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`

export const useAppDispatch: () => AppDispatch = useDispatch //Creando nuevo dispatch que tipado ( funcion  App dispatch) y se copia las propiedades de useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector //Typescripea el selector y le dice que es un type : rootstate.. / tambien se roba las propiedades de useSelector

// Ahora useAppDispatch y useAppSelector son los nuevos hooks :D ( pero tipados )