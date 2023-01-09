import { createContext, useEffect, useReducer, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from "./Reducer";
import { loginCall } from "../../ApiCalls";
// initial state
const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};


// creating context
export const Context = createContext();

// context provider
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('User', jsonValue)
    } catch (e) {
      console.log("error in login", e)
    }
  }
  const login = async (adharNo, password, userType) => {
    try {
      const user = await loginCall({ adharNo, password }, userType)
      storeData(user)
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }


  const isLoggedIn = async () => {
    setLoading(true)
    try {
      const jsonValue = await AsyncStorage.getItem("User")
      const value = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUser(value)
    } catch (error) {
      setError(error.message)
    }

  }
  useEffect(() => {
    isLoggedIn()
  }, [])
  return (
    <Context.Provider
      value={{
        user,
        loading,
        error,
        login
      }}
    >
      {children}
    </Context.Provider>
  );
};
