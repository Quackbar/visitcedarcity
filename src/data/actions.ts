import { AllCategories, SubscriptionItem } from "../models/defaultModels";
import { ActionType } from "../util/types";

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

export type StateActions = ActionType<typeof updateSelectedAttractionFilters> | ActionType<typeof updateSubscriptions>;
