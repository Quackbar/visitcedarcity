import React, { createContext, useReducer } from "react";
import { AppState, initialState } from "./state";
import { reducers } from "./reducers";

export interface AppContextState {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

export const AppContext = createContext<AppContextState>({
  state: initialState,
  dispatch: () => undefined,
});

export const AppContextProvider: React.FC = (props) => {
  let darkThemeStorage = JSON.parse(localStorage.getItem("dark-theme") || "false");

  const updatedInitialState: AppState = {
    ...initialState,
    user: {
      ...initialState.user,
      darkTheme: darkThemeStorage,
    },
  };

  const [state, dispatch] = useReducer(reducers, updatedInitialState);

  return (
    <AppContext.Provider
      value={{
        state: state,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
