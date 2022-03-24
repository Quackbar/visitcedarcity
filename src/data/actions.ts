import { AllCategories, SubscriptionItem, User } from "../models/defaultModels";
import { ActionType } from "../util/types";
import { getUserData, setHasSeenTutorialData } from "./dataApi";

export const loadUserData = () => async (dispatch: React.Dispatch<any>) => {
  const data = await getUserData();
  dispatch(setData(data));
}

export const setData = (data: Partial<User>) => ({
  type: 'set-user-data',
  data
} as const);

export const updateSelectedAttractionFilters = (selectedAttractionFilters: AllCategories[]) =>
  ({
    type: "update-filtered-attractions",
    selectedAttractionFilters,
  } as const);

export const updateSubscriptions = (subscriptionItems: SubscriptionItem[]) =>
  ({
    type: "update-subscription",
    subscriptionItems,
  } as const);

export const setHasSeenTutorial = (hasSeenTutorial: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setHasSeenTutorialData(hasSeenTutorial);
  return {
    type: "set-has-seen-tutorial",
    hasSeenTutorial,
  } as const;
};

export type StateActions = ActionType<typeof setData> | ActionType<typeof updateSelectedAttractionFilters> | ActionType<typeof updateSubscriptions> | ActionType<typeof setHasSeenTutorial>;
