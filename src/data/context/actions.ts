import { AllCategories, AllModules, User } from "../../models/defaultModels";
import { ActionType } from "../../util/types";
import { getUserData, setHasSeenTutorialData, setSelectedSubscriptionsData, setSelectedHomeModulesData } from "./dataApi";

export const loadUserData = () => async (dispatch: React.Dispatch<any>) => {
  dispatch(setLoading(true));
  const data = await getUserData();
  dispatch(setData(data));
  dispatch(setLoading(false));
};

export const setData = (data: Partial<User>) =>
  ({
    type: "set-user-data",
    data,
  } as const);

export const setLoading = (isLoading: boolean) =>
  ({
    type: "set-is-loading",
    isLoading,
  } as const);

export const updateSelectedAttractionFilters = (selectedAttractionFilters: AllCategories[]) =>
  ({
    type: "update-filtered-attractions",
    selectedAttractionFilters,
  } as const);

export const updateSelectedSubscriptions =
  (selectedSubscriptions: number[]) => async (dispatch: React.Dispatch<any>) => {
    await setSelectedSubscriptionsData(selectedSubscriptions);
    return {
      type: "update-selected-subscription",
      selectedSubscriptions,
    } as const;
  };
export const updateSelectedHomeModules = (selectedHomeModules: AllModules[]) => async (dispatch: React.Dispatch<any>) => {
  await setSelectedHomeModulesData(selectedHomeModules);
  return {
    type: "update-selected-home-modules",
    selectedHomeModules,
  } as const;
};
export const setIsLoading = (isLoading: boolean) => {
  return {
    type: "set-is-loading",
    isLoading,
  } as const;
};
export const setHasSeenTutorial = (hasSeenTutorial: boolean) => async (dispatch: React.Dispatch<any>) => {
  await setHasSeenTutorialData(hasSeenTutorial);
  return {
    type: "set-has-seen-tutorial",
    hasSeenTutorial,
  } as const;
};

export type StateActions =
  | ActionType<typeof setData>
  | ActionType<typeof updateSelectedAttractionFilters>
  | ActionType<typeof updateSelectedSubscriptions>
  | ActionType<typeof updateSelectedHomeModules>
  | ActionType<typeof setIsLoading>
  | ActionType<typeof setHasSeenTutorial>;
