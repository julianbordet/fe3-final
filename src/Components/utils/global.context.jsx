import { createContext, useReducer, useEffect, useContext } from "react";
import axios from "axios";

const AppState = createContext();

export const initialState = {
  theme: "",
  data: [],
  selectedDentist: {}
}

const dentistReducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { theme: action.payload, data: state.data, selectedDentist: state.selectedDentist }
    case 'SET_DATA':
      return { theme: state.theme, data: action.payload, selectedDentist: state.selectedDentist }
    case 'SET_DENTIST':
      return { theme: state.theme, data: state.data, selectedDentist: action.payload }
    default:
      throw new Error()
  }
}

const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);

  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(baseUrl)
      .then(res => dispatch({ type: 'SET_DATA', payload: res.data }))
      .catch(err => console.log(err))
      
  }, [])


  return (
    <AppState.Provider value={{
      state, dispatch
    }}>
      {children}
    </AppState.Provider>
  )
}

export default GlobalContext;

export const useGlobalContext = () => useContext(AppState);