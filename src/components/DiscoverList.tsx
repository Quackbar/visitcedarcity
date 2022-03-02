import { IonList, IonListHeader } from "@ionic/react";
import DiscoverListItem from "./DiscoverListItem";
import { AttractionItem } from "../models/defaultModels";

interface DiscoverListProps {
  attractions: AttractionItem[];
}

const DiscoverList: React.FC<DiscoverListProps> = ({ attractions }) => {

  if (attractions.length === 0 ) {
    return (
      <IonList>
        <IonListHeader>
          No results found
        </IonListHeader>
      </IonList>
    );
  }
  return (
    <IonList>
      {attractions.map((attraction, index: number) => (
        <DiscoverListItem data={attraction} key={`attraction-item-${index}`} />
      ))}
    </IonList>
  );
};
export default DiscoverList;
