import { AttractionItem } from "../models/defaultModels";
import { AppState } from "./AppContext";

const getAttractionItems = (state: AppState) => state.attractionItems;

const getIdParam = (_state: AppState, props: any) => {
  return +props.match.params["id"];
};

export const getAttractionItem = (state: AppState, props: any) => {
  const attractions = getAttractionItems(state);
  const id = getIdParam(state, props);

  return attractions.find((a: AttractionItem) => {return a.id === id});
};