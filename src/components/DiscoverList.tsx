import { IonList } from "@ionic/react";
import DiscoverListItem from "./DiscoverListItem";
import { TourismItem } from "../models/defaultModels";

interface DiscoverListProps {
  data: TourismItem[];
}

const DiscoverList: React.FC<DiscoverListProps> = ({ data }) => {
  return (
    <IonList>
      {data.map((item, index: number) => (
        <DiscoverListItem data={item} key={`tourism-item-${index}`} />
      ))}
    </IonList>
  );
};
export default DiscoverList;
