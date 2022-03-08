import { StateActions } from "./actions";
import { AppState } from "./state";

export const reducers = (state: AppState, action: StateActions): AppState => {
  switch (action.type) {
    case "update-filtered-attractions": {
      return {
        ...state,
        selectedAttractionFilters: action.selectedAttractionFilters,
      };
    }
    case "update-subscription": {
      return {
        ...state,
        subscriptionItems: action.subscriptionItems,
      };
    }
  }
};