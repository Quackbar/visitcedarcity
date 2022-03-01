import React, { createContext, useReducer } from "react";
import { ActionType } from "../util/types";
import { TourismItem } from "../models/defaultModels";

export type AppState = {
  tourismItems: TourismItem[];
  isDiscoverLoading?: boolean;
};

const initialState: AppState = {
  tourismItems: [],
  isDiscoverLoading: undefined,
};

export interface AppContextState {
  state: AppState;
  dispatch: React.Dispatch<any>;
}

export const setDiscoverLoading = (isDiscoverLoading: boolean) =>
  ({
    type: "set-discover-loading",
    isDiscoverLoading,
  } as const);

export type SessionsActions = ActionType<typeof setDiscoverLoading>;

export const reducers = (
  state: AppState,
  action: SessionsActions
): AppState => {
  switch (action.type) {
    case "set-discover-loading": {
      return { ...state, isDiscoverLoading: action.isDiscoverLoading };
    }
  }
};

export const AppContext = createContext<AppContextState>({
  state: initialState,
  dispatch: () => undefined,
});

export const AppContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducers, initialState);

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
