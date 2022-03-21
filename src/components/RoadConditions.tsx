import React from "react";
import {
  IonCard,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";




const RoadConditions: React.FC = ({}) => {

    return (
      <>
            <IonCard>
              <h1 className="centered">Road Conditions</h1>
              <IonGrid>
                <IonRow>
                  <IonCol size="6" size-md="6"></IonCol>
                  {/* <IonCol><p>Crews Working</p></IonCol> */}
                  <IonCol size="3" size-md="4" class="centered"><p>Road Surface</p></IonCol>
                  <IonCol size="3" size-md="4" class="centered"><p>Weather</p></IonCol>
                  {/* <IonCol><p>Restrictions</p></IonCol> */}
                </IonRow>
                <IonRow>
                  <IonCol size="6" size-md="6"><p>{String(localStorage.getItem('BrianText')).split("<td>")[1].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('BrianText')).split("<td>")[2].slice(0,-5)}</p></IonCol> */}
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('BrianText')).split("<td>")[3].slice(0,-5)}</p></IonCol>
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('BrianText')).split("<td>")[4].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('BrianText')).split("<td>")[5].slice(0,-5)}</p></IonCol> */}
                </IonRow>
                <IonRow>
                  <IonCol size="6" size-md="6"><p>{String(localStorage.getItem('CedarText')).split("<td>")[1].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('CedarText')).split("<td>")[2].slice(0,-5)}</p></IonCol> */}
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('CedarText')).split("<td>")[3].slice(0,-5)}</p></IonCol>
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('CedarText')).split("<td>")[4].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('CedarText')).split("<td>")[5].slice(0,-5)}</p></IonCol> */}
                </IonRow>
                <IonRow>
                  <IonCol size="6" size-md="6"><p>{String(localStorage.getItem('LongValText')).split("<td>")[1].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('LongValText')).split("<td>")[2].slice(0,-5)}</p></IonCol> */}
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('LongValText')).split("<td>")[3].slice(0,-5)}</p></IonCol>
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('LongValText')).split("<td>")[4].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('LongValText')).split("<td>")[5].slice(0,-5)}</p></IonCol> */}
                </IonRow>
                <IonRow>
                  <IonCol size="6" size-md="6"><p>{String(localStorage.getItem('NevadaText')).split("<td>")[1].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('NevadaText')).split("<td>")[2].slice(0,-5)}</p></IonCol> */}
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('NevadaText')).split("<td>")[3].slice(0,-5)}</p></IonCol>
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('NevadaText')).split("<td>")[4].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('NevadaText')).split("<td>")[5].slice(0,-5)}</p></IonCol> */}
                </IonRow>
                <IonRow>
                  <IonCol size="6" size-md="6"><p>{String(localStorage.getItem('ParowanText')).split("<td>")[1].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('ParowanText')).split("<td>")[2].slice(0,-5)}</p></IonCol> */}
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('ParowanText')).split("<td>")[3].slice(0,-5)}</p></IonCol>
                  <IonCol size="3" size-md="3" class="centered"><p>{String(localStorage.getItem('ParowanText')).split("<td>")[4].slice(0,-5)}</p></IonCol>
                  {/* <IonCol><p>{String(localStorage.getItem('ParowanText')).split("<td>")[5].slice(0,-5)}</p></IonCol> */}
                </IonRow>
              </IonGrid>
            </IonCard>
      </>
    );
  
};
export default RoadConditions;
