import { createContext, useCallback, useReducer } from "react";

export const ManufacturerContext = createContext();

const initialState = {
  manufacturers: [],
  loading: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_MANUFACTURERS_SUCCESS":
      return {
        ...state,
        manufacturers: action.payload,
        loading: false,
      };
    case "GET_MANUFACTURERS_ERROR":
      return {
        ...state,
        manufacturers: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const ManufacturerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchManufacturers = useCallback(async () => {
    try {
      const data = await fetch(
        "https://my-json-server.typicode.com/T0raT/mp4jsonserver/lists",
      );
      const result = await data.json();

      if (result) {
        dispatch({ type: "GET_MANUFACTURERS_SUCCESS", payload: result });
      }
    } catch (e) {
      dispatch({ type: "GET_MANUFACTURERS_ERROR", payload: e.message });
    }
  }, []);

  return (
    <ManufacturerContext.Provider value={{ ...state, fetchManufacturers }}>
      {children}
    </ManufacturerContext.Provider>
  );
};
