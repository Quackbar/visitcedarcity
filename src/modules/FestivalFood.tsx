import React from "react";
import { IonCard, IonCardHeader, IonText, IonTitle } from "@ionic/react";
import { Browser } from "@capacitor/browser";

const rn = new Date();

const lunchEnd = new Date();
lunchEnd.setHours(15, 0, 0);

const lunchStart = new Date();
lunchStart.setHours(11, 0, 0);

const breakStart = new Date();
breakStart.setHours(7, 0, 0);

const dinnerEnd = new Date();
dinnerEnd.setHours(21, 0, 0);

const breakfast = rn.getHours() >= breakStart.getHours() && rn.getHours() < lunchStart.getHours();
const lunch = rn.getHours() <= lunchEnd.getHours() && rn.getHours() >= lunchStart.getHours();
const dinner = rn.getHours() > lunchEnd.getHours() && rn.getHours() <= dinnerEnd.getHours();

const openBunisas = async () => {
  await Browser.open({
    url: "https://www.google.com/maps/place/Bunnisa's+Thai+Cuisine/@37.6775062,-113.0645432,17z/data=!3m2!4b1!5s0x80b561b834307693:0x4b8e9b30b29c768!4m5!3m4!1s0x80b56107561cf149:0x88f968c1a7b5d2a0!8m2!3d37.677502!4d-113.0623545",
  });
};

const openGrind = async () => {
  await Browser.open({
    url: "https://www.google.com/maps/place/Grind+Coffee+House/@37.6778182,-113.0642637,17z/data=!3m1!4b1!4m5!3m4!1s0x80b561ba6c5fbe1d:0x3fefb7b70324df72!8m2!3d37.677814!4d-113.062075",
  });
};

const openCentro = async () => {
  await Browser.open({
    url: "https://www.google.com/maps/place/Centro+Woodfired+Pizzeria/@37.6827687,-113.1001246,14z/data=!4m9!1m2!2m1!1scentro!3m5!1s0x80b561ba4714611d:0x7aec392aed6bea71!8m2!3d37.6775706!4d-113.0626666!15sCgZjZW50cm9aCCIGY2VudHJvkgEQcGl6emFfcmVzdGF1cmFudA",
  });
};
const openBristle = async () => {
  await Browser.open({
    url: "https://www.google.com/maps/place/Bristlecone/@37.6770152,-113.0628837,20.94z/data=!4m5!3m4!1s0x80b561ec3edf9a19:0x455c0ad0d69f4328!8m2!3d37.6770122!4d-113.062948",
  });
};
const openPastry = async () => {
  await Browser.open({
    url: "https://www.google.com/maps/place/Pastry+Pub,+Inc./@37.6773614,-113.0630487,20.11z/data=!4m5!3m4!1s0x0:0x16701213e53c0ea6!8m2!3d37.6775703!4d-113.0631248",
  });
};

function firstChoice() {
  if (breakfast) {
    return (
      <IonCard class="centered" onClick={openGrind}>
        <img src="assets/img/grind.jpg" />
        <h1>Grind Coffee House</h1>
        <p>$</p>
      </IonCard>
    );
  } else if (lunch) {
    return (
      <IonCard class="centered" onClick={openBunisas}>
        <img src="assets/img/bunisas.jpg"/>
        <h1>Bunnisa's Thai Cuisine</h1>
        <p>$$</p>
      </IonCard>
    );
  } else if (dinner) {
    return (
      <IonCard class="centered" onClick={openCentro}>
        <img src="assets/img/centro.jpg" />

        <h1>Centro Woodfired Pizzaria</h1>
        <p>$$</p>
      </IonCard>
    );
  } else {
    return (
      <IonCard class="centered">
        <h1>It's After Hours, Check Back Tomorrow</h1>
        <p>
          Sorry but its likely that most things are closed within walking distance. Please do check for yourself though
          as this could be out of date.
        </p>
      </IonCard>
    );
  }
}

function secondChoice() {
  if (breakfast) {
    return (
      <>
        <IonCard class="centered" onClick={openBristle}>
          <img src="assets/img/bristlecon.png" />
          <h1>Bristlecone Coffee</h1>
          <p>$</p>
        </IonCard>
      </>
    );
  } else if (lunch) {
    return (
      <>
        <IonCard class="centered" onClick={openPastry}>
          <img src="assets/img/pastry.jpg" />

          <h1>Pastry Pub</h1>
          <p>$$</p>
        </IonCard>
      </>
    );
  } else if (dinner) {
    return (
      <>
        <IonCard class="centered" onClick={openBunisas}>
          <img src="assets/img/bunisas.jpg" />

          <h1>Bunnisa's Thai Cuisine</h1>
          <p>$$</p>
        </IonCard>
      </>
    );
  } else {
    return <></>;
  }
}

function thirdChoice() {
  if (breakfast) {
    return (
      <>
        <IonCard class="centered">
          <img src="https://secureservercdn.net/198.71.233.83/lzw.0ad.myftpupload.com/wp-content/uploads/IMG-9047-1-scaled-1.jpg" />

          <h1>Pastry Pub</h1>
        </IonCard>
      </>
    );
  } else if (lunch) {
    return (
      <>
        <IonCard class="centered">
          <img src="" />

          <h1>Lunch Spot</h1>
        </IonCard>
      </>
    );
  } else if (dinner) {
    return (
      <>
        <IonCard class="centered">
          <img src="" />

          <h1>Dinner Spot</h1>
        </IonCard>
      </>
    );
  } else {
    return <></>;
  }
}

function titleMeal() {
  var returnable = "";
  returnable += breakfast ? "Breakfast" : "";
  returnable += lunch ? "Lunch" : "";
  returnable += dinner ? "Dinner" : "";
  if (returnable === "") {
    returnable = "the night";
  }
  return returnable;
}

const FestivalFood: React.FC = ({}) => {
  return (
    <IonCard>
      <IonCardHeader>
        <h1 className="centered">
          Walking Distance From
          <br />
          Shakespeare Festival
          <br />
          for {titleMeal()}
          <br/>
        </h1>
        <p></p>

        {firstChoice()}
        <IonText class="centered">
          <p>- or -</p>
        </IonText>
        {secondChoice()}
        {/* <IonText class="centered">
                    <p>
                        - or - 
                    </p>
                </IonText>
                {thirdChoice()} */}
      </IonCardHeader>
    </IonCard>
  );
};
export default FestivalFood;
