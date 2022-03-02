import { IonList } from "@ionic/react";
import DiscoverListItem from "./DiscoverListItem";
import { AttractionItem } from "../models/defaultModels";

interface DiscoverListProps {
  data: AttractionItem[];
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
