import React, { createContext, useEffect, useReducer } from "react";
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

  console.log("------------------");
  console.log(initialState);
  console.log(updatedInitialState);
  console.log("");
  const [state, dispatch] = useReducer(reducers, updatedInitialState);

  useEffect(() => {
    console.log(state.user.selectedHomeModules);
  }, [state.user.selectedHomeModules]);

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
