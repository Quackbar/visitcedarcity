export enum TOURISM_ITEM_TYPE{
  EVENT = "event",
  LOCATION = 'location'
};

export interface TourismItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  type: TOURISM_ITEM_TYPE;
}
