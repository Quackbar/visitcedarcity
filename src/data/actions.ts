import { AllCategories } from "../models/defaultModels";
import { ActionType } from "../util/types";

export const updateSelectedAttractionFilters = (
  selectedAttractionFilters: AllCategories[]
) =>
  ({
    type: "update-filtered-attractions",
    selectedAttractionFilters,
  } as const);

export type StateActions = ActionType<typeof updateSelectedAttractionFilters>;
