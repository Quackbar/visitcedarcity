import {
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonRow,
  IonGrid,
  IonListHeader,
  IonAlert,
  AlertButton,
} from "@ionic/react";
import React, { useState, useCallback } from "react";
import { Schedule, Session } from "../models/Schedule";
import DiscoverListItem from "./DiscoverListItem";
import { connect } from "../data/connect";
import { addFavorite, removeFavorite } from "../data/sessions/sessions.actions";

interface OwnProps {
  schedule: Schedule;
  listType: "all" | "favorites";
  hide: boolean;
}

interface StateProps {
  favoriteSessions: number[];
}

interface DispatchProps {
  addFavorite: typeof addFavorite;
  removeFavorite: typeof removeFavorite;
}

interface DiscoverListProps extends OwnProps, StateProps, DispatchProps {}

const DiscoverList: React.FC<DiscoverListProps> = ({
  addFavorite,
  removeFavorite,
  favoriteSessions,
  hide,
  schedule,
  listType,
}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertHeader, setAlertHeader] = useState("");
  const [alertButtons, setAlertButtons] = useState<(AlertButton | string)[]>(
    []
  );

  const handleShowAlert = useCallback(
    (header: string, buttons: AlertButton[]) => {
      setAlertHeader(header);
      setAlertButtons(buttons);
      setShowAlert(true);
    },
    []
  );

  if (schedule.groups.length === 0 && !hide) {
    return (
      <IonGrid fixed>
        <IonListHeader>No Sessions Found</IonListHeader>
      </IonGrid>
    );
  }

  return (
    <>
      <IonGrid fixed>
        {schedule.groups.map((group, index: number) =>
          group.sessions.map((session: Session, sessionIndex: number) => (
            <IonRow>
              <DiscoverListItem
                onShowAlert={handleShowAlert}
                isFavorite={favoriteSessions.indexOf(session.id) > -1}
                onAddFavorite={addFavorite}
                onRemoveFavorite={removeFavorite}
                key={`group-${index}-${sessionIndex}`}
                session={session}
                listType={listType}
              />
            </IonRow>
          ))
        )}
      </IonGrid>
      <IonAlert
        isOpen={showAlert}
        header={alertHeader}
        buttons={alertButtons}
        onDidDismiss={() => setShowAlert(false)}
      ></IonAlert>
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    favoriteSessions: state.data.favorites,
  }),
  mapDispatchToProps: {
    addFavorite,
    removeFavorite,
  },
  component: DiscoverList,
});
