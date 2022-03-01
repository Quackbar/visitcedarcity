import { createSelector } from "reselect";
import { TourismItem } from "../models/defaultModels";
import { AppState } from "./AppContext";

const getTourismItems = (state: AppState) => state.tourismItems;

const getIdParam = (_state: AppState, props: any) => {
  return props.match.params["id"];
};

export const getTourismItem = createSelector(
  getTourismItems,
  getIdParam,
  (items, id) => {
    return items.find((i: TourismItem) => i.id === id);
  }
);
