import { ReactElement } from "react";
import { getMode, ItemReorderEventDetail } from "@ionic/core";
import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonReorder,
  IonReorderGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { updateSelectedHomeModules } from "../data/context/actions";
import { connect } from "../data/context/connect";
import { AllModules } from "../models/defaultModels";
import { repeatOutline } from "ionicons/icons";

interface OwnProps {
  homeModules: { [key in AllModules]: { label: string; src: ReactElement } };
  onDismissModal: () => void;
}
interface StateProps {
  selectedHomeModules: AllModules[];
}
interface DispatchProps {
  updateSelectedHomeModules: typeof updateSelectedHomeModules;
}

type HomeModulesFilterProps = OwnProps & StateProps & DispatchProps;

const HomeModulesFilter: React.FC<HomeModulesFilterProps> = ({
  homeModules,
  selectedHomeModules,
  onDismissModal,
  updateSelectedHomeModules,
}) => {
  const ios = getMode() === "ios";

  const handleSelectAll = () => {
    updateSelectedHomeModules([
      AllModules.Weather,
      AllModules.Schedule,
      AllModules.FestivalFood,
      AllModules.SkyData,
      AllModules.RoadConditions,
      AllModules.WinterMountainData,
      AllModules.SnowPack,
    ]);
  };
  const handleDeselectAll = () => {
    updateSelectedHomeModules([]);
  };

  function doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // reorder array
    selectedHomeModules.splice(event.detail.to, 0, selectedHomeModules.splice(event.detail.from, 1)[0]);
    event.detail.complete();
  }

  const toggleModule = (index: number) => {
    // flip the subscription state
    if (selectedHomeModules.includes(index)) {
      selectedHomeModules.splice(selectedHomeModules.indexOf(index), 1);
    } else {
      selectedHomeModules.push(index);
    }
    updateSelectedHomeModules([...selectedHomeModules]);
  };

  return (
    <>
      <IonHeader translucent={true} className="session-list-filter">
        <IonToolbar>
          <IonButtons slot="start">
            {ios && <IonButton onClick={onDismissModal}>Cancel</IonButton>}
            {!ios && <IonButton onClick={handleDeselectAll}>Reset</IonButton>}
          </IonButtons>

          <IonTitle>Filters</IonTitle>

          <IonButtons slot="end">
            <IonButton onClick={onDismissModal} strong>
              Done
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="module-filter">
        <IonList lines={ios ? "inset" : "full"}>
          <IonItemGroup>
            <IonReorderGroup disabled={false} onIonItemReorder={doReorder}>
              {selectedHomeModules.map((moduleId: AllModules, index) => (
                <IonItem key={`subbed_mod-${index}`}>
                  <IonLabel>{homeModules[moduleId].label}</IonLabel>
                  <IonReorder slot="start">
                    <IonIcon icon={repeatOutline}></IonIcon>
                  </IonReorder>
                  <IonCheckbox slot="end" onClick={() => toggleModule(moduleId)} checked={true} color="primary" />
                </IonItem>
              ))}
            </IonReorderGroup>
          </IonItemGroup>
          <IonItemGroup>
            <IonItemDivider sticky>
              <IonLabel>Add new modules</IonLabel>
            </IonItemDivider>
            {Object.values(homeModules).map(
              (module, index) =>
                !selectedHomeModules.includes(index) && (
                  <IonItem key={`unsubbed_mod-${index}`} onClick={() => toggleModule(index)}>
                    <IonLabel>{module.label}</IonLabel>
                    <IonCheckbox checked={false} color="primary" />
                  </IonItem>
                )
            )}
          </IonItemGroup>
        </IonList>
      </IonContent>

      {ios && (
        <IonFooter>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={handleDeselectAll}>Deselect All</IonButton>
            </IonButtons>
            <IonButtons slot="end">
              <IonButton onClick={handleSelectAll}>Select All</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      )}
    </>
  );
};

export default connect<OwnProps, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
    selectedHomeModules: state.user.selectedHomeModules,
  }),
  mapDispatchToProps: {
    updateSelectedHomeModules,
  },
  component: HomeModulesFilter,
});
