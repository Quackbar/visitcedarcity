import { IonList } from "@ionic/react";
import DiscoverListItem from "./DiscoverListItem";
import { DiscoverItem } from "../models/DiscoverItem";

interface DiscoverListProps {
  data: DiscoverItem[];
}

const DiscoverList: React.FC<DiscoverListProps> = ({ data }) => {
  return (
    <IonList>
      {data.map((item, index: number) => (
        <DiscoverListItem data={item} />
      ))}
    </IonList>
  );
};
export default DiscoverList;
