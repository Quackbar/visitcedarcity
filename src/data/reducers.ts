import { StateActions } from "./actions";
import { AppState } from "./state";

export const reducers = (state: AppState, action: StateActions): AppState => {
  switch (action.type) {
    case "set-user-data": {
      return { ...state, ...action.data };
    }
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
    case "set-has-seen-tutorial":
      return {
        ...state,
        user: {
          ...state.user,
          hasSeenTutorial: action.hasSeenTutorial,
        },
      };
  }
};
