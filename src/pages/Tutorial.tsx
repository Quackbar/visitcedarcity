import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonGrid,
  IonRow,
  IonCard,
  IonTitle,
  IonCol,
  IonText,
} from "@ionic/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import { arrowForward, chevronForward, heart, thumbsDown, thumbsUp } from "ionicons/icons";
import { setHasSeenTutorial, updateSelectedHomeModules, updateSelectedSubscriptions } from "../data/context/actions";
import "@ionic/react/css/ionic-swiper.css";
import { connect } from "../data/context/connect";
import { RouteComponentProps } from "react-router";
import "swiper/css";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

import { AllModules, ConditionsReturnType, MountainDataType, TodaysType } from "../models/defaultModels";


interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
  updateSelectedHomeModules: typeof updateSelectedHomeModules;
  updateSelectedSubscriptions: typeof updateSelectedSubscriptions;
}

interface StateProps {
  selectedHomeModules: AllModules[];
}
// const selectedHomeModules: AllModules[] = [];

interface TutorialProps extends OwnProps,StateProps, DispatchProps {}

const Tutorial: React.FC<TutorialProps> = ({ selectedHomeModules, history, setHasSeenTutorial, updateSelectedHomeModules, updateSelectedSubscriptions  }) => {
  const [showSkip, setShowSkip] = useState(true);
  let [swiper, setSwiper] = useState<SwiperCore>();

  // const startApp = async () => {
  //   console.log('starting app')
  //   await setHasSeenTutorial(true);
  //   history.push("/home", { direction: "none" });
  // };

  const handleSlideChangeStart = () => {
    if (!swiper) return;
    setShowSkip(!swiper.isEnd);
  };

  let vals: number[] = [0,1,2,3,4,5,6]
  let subs: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]

  function sub(i: number){
    if (!subs.includes(i)) {
      subs.push(i);
    }
    
  }
  function unsub(i: number){
    if (subs.includes(i)) {
      subs.splice(subs.indexOf(i), 1);
    }
    
  }

  function add(i: number){
    if (!vals.includes(i)) {
      vals.push(i);
    }
    
  }
  function drop(i: number){
    if (vals.includes(i)) {
      vals.splice(vals.indexOf(i), 1);
    }
  }

  return (
    <IonPage id="tutorial-page" >
      <IonContent fullscreen>
        <SafeAreaWrapper>
          <Swiper pagination={true} onSwiper={setSwiper} onSlideChangeTransitionStart={handleSlideChangeStart}>
            <SwiperSlide>
              <IonCard class="yellow">
                <IonGrid>
                  <IonRow>
                    {/* <IonTitle color="primary"> */}
                    <h1 className="centered">
                      <br />
                      <br />
                    </h1>

                    <img className="centered rounded" src="assets/img/cover.png" alt="" />
                    {/* </IonTitle> */}
                  </IonRow>

                  <IonRow>
                    {/* <IonTitle color="primary"> */}
                    <h1 className="centered glossbloom">
                      <br />
                      <br />
                      <br />
                      Let Wonder Be
                      <br />
                      Your Guide
                    </h1>
                    {/* </IonTitle> */}
                  </IonRow>
                  <IonRow>
                    {/* <IonTitle color="primary"> */}
                    <IonLabel className="centered">
                      <h3 className="centered">
                        <br />
                        <br />
                        <br />
                        Swipe to help us
                        <br /> get to know you...
                        <br />
                        <br />
                      </h3>
                      {/* <IonIcon icon={chevronForward} slot="icon-only" />
              <IonIcon icon={chevronForward} slot="icon-only" />
              <IonIcon icon={chevronForward} slot="icon-only" />
              <IonIcon icon={chevronForward} slot="icon-only" /> */}
                    </IonLabel>
                    {/* </IonTitle> */}
                  </IonRow>

                  <IonRow>
                  <IonText class="centered">
                      <h1 className="glossbloom">&gt; Swipe &gt;</h1>
                    </IonText>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </SwiperSlide>
            
            <SwiperSlide>
              <IonCard>
                <IonGrid>
                  <IonRow class="centered">
                    {/* <IonTitle> */}
                    <h1 className="centered">
                    <br />
                      What Our App Can
                      <br /> Do For You
                    </h1>
                    {/* </IonTitle> */}
                  </IonRow>
                  <IonRow>
                    <h1>
                    </h1>
                  </IonRow>
                  <IonRow class="centered">
                    <IonCol>
                      <img src="assets/img/home.png" alt="" className="half-image rounded" />
                    </IonCol>
                    <IonCol>
                      <img src="assets/img/discover.png" alt="" className="half-image rounded" />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h3>
                          Informed at a glance...
                        </h3>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>
                        <h3>Discover new spots...</h3>
                      </IonText>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                  <IonText class="centered">
                      <h1 className="glossbloom">&gt; Swipe &gt;</h1>
                    </IonText>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </SwiperSlide>

            <SwiperSlide>
              <IonCard>
                <IonGrid>
                  <IonRow class="centered">
                    {/* <IonTitle> */}
                    <h1 className="centered">
                    <br />
                      What Our App Can
                      <br /> Do For You
                    </h1>
                    {/* </IonTitle> */}
                  </IonRow>
                  <IonRow>
                    <h1>
                      
                    </h1>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <img src="assets/img/map.png" alt="" className="half-image rounded" />
                    </IonCol>
                    <IonCol>
                      <img src="assets/img/account.png" alt="" className="half-image rounded" />
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonText>
                        <h3>Scout out the terrain...</h3>
                      </IonText>
                    </IonCol>
                    <IonCol>
                      <IonText>
                        <h3>
                          Know the Seasons...
                        </h3>
                      </IonText>
                    </IonCol>
                  </IonRow>

                  <IonRow>
                    <IonText class="centered">
                      <h1 className="glossbloom">&gt; Swipe &gt;</h1>
                    </IonText>


                  </IonRow>
                </IonGrid>
              </IonCard>
            </SwiperSlide>

            <SwiperSlide>
              <IonCard>
                {/*-- Segment with secondary color --*/}
                <IonGrid class="centered">
                  <IonRow>
                    {/* <IonTitle color="primary"> */}
                    <h1 className="centered">
                      Help Us Get to Know You
                      <br />
                    </h1>
                    {/* </IonTitle> */}
                  </IonRow>
                  <IonRow>
                    <h3 className="centered">
                      <br />
                      What's Your Favorite Season to Visit?
                    </h3>
                  </IonRow>
                  <IonRow>
                    <IonSegment
                      value="any"
                      onIonChange={(e) => {
                        // console.log("Segment selected", e.detail.value)
                        if(e.detail.value === "summer"){
                          drop(4);
                          drop(5);
                          drop(6);
                          unsub(2)
                          unsub(6)

                        }
                        else if(e.detail.value === "any"){
                          add(4);
                          drop(5);
                          drop(6);
                          sub(2)

                        }
                        else if(e.detail.value === "winter"){
                          add(4);
                          add(5);
                          add(6);
                          sub(2)
                          sub(6)
                        }
                        // console.log(vals)
                      }}
                      color="primary"
                    >
                      <IonSegmentButton value="summer">
                        <IonLabel>Summer</IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="any">
                        <IonLabel>Any</IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="winter">
                        <IonLabel>Winter</IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                  </IonRow>

                  <IonRow>
                    <h3 className="centered">
                      <br />
                      How Do You Feel About Theatre?
                    </h3>
                  </IonRow>
                  <IonRow>
                    <IonSegment
                      value="like"
                      onIonChange={(e) => {
                        // console.log("Segment selected", e.detail.value)
                        if(e.detail.value === "dislike"){
                          drop(2);
                          unsub(6)
                          unsub(0)
                          unsub(1)

                        }
                        else if(e.detail.value === "like"){
                          add(1);
                          drop(2);
                          unsub(6)
                          sub(0)
                          unsub(1)
                        }
                        else if(e.detail.value === "love"){
                          add(1);
                          add(2);
                          sub(6)
                          sub(0)
                          sub(1)
                        }
                        // console.log(vals)

                      }}
                      color="secondary"
                    >
                      <IonSegmentButton value="dislike">
                        <IonLabel>
                          <IonIcon icon={thumbsDown} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="like">
                        <IonLabel>
                          <IonIcon icon={thumbsUp} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="love">
                        <IonLabel>
                          <IonIcon icon={heart} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                  </IonRow>

                  <IonRow>
                    <h3 className="centered">
                      <br />
                      How Do You Feel About the Outdoors?
                    </h3>
                  </IonRow>
                  <IonRow>
                    <IonSegment
                      value="like"
                      onIonChange={(e) => {
                        // console.log("Segment selected", e.detail.value)
                        if(e.detail.value === "dislike"){
                          drop(3);
                          drop(5);
                          unsub(2)
                          unsub(3)
                          unsub(11)
                          unsub(12)
                        }
                        else if(e.detail.value === "like"){
                          add(3);
                          drop(5);
                          unsub(2)
                          sub(3)
                          unsub(11)
                          sub(12)

                        }
                        else if(e.detail.value === "love"){
                          add(3);
                          add(5);
                          sub(0)
                          sub(2)
                          sub(3)
                          sub(11)
                          sub(12)

                        }
                        // console.log(vals)

                      }}
                      color="danger"
                    >
                      <IonSegmentButton value="dislike">
                        <IonLabel>
                          <IonIcon icon={thumbsDown} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="like">
                        <IonLabel>
                          <IonIcon icon={thumbsUp} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="love">
                        <IonLabel>
                          <IonIcon icon={heart} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                  </IonRow>

                  <IonRow>
                    <h3 className="centered">
                      <br />
                      How Do You Feel About History?
                    </h3>
                  </IonRow>
                  <IonRow>
                    <IonSegment
                      value="like"
                      onIonChange={(e) => {
                        // console.log("Segment selected", e.detail.value)
                        if(e.detail.value === "dislike"){
                          unsub(10)
                        }
                        else if(e.detail.value === "like"){
                          add(1);
                          sub(10)


                        }
                        else if(e.detail.value === "love"){
                          add(1);
                          sub(10)

                        }
                        // console.log(vals)

                      }}
                      color="tertiary"
                    >
                      <IonSegmentButton value="dislike">
                        <IonLabel>
                          <IonIcon icon={thumbsDown} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="like">
                        <IonLabel>
                          <IonIcon icon={thumbsUp} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="love">
                        <IonLabel>
                          <IonIcon icon={heart} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                  </IonRow>
                  <IonRow>
                    <h3 className="centered">
                      <br />
                      How do you feel about Arts and Culture?
                    </h3>
                  </IonRow>

                  <IonRow>
                    <IonSegment
                      value="like"
                      onIonChange={(e) => {
                        // console.log("Segment selected", e.detail.value)
                        if(e.detail.value === "dislike"){
                          unsub(4)
                          unsub(5)
                          unsub(7)
                          unsub(8)
                          unsub(13)
                          unsub(14)
                        }
                        else if(e.detail.value === "like"){
                          add(1);
                          sub(4)
                          sub(5)
                          unsub(7)
                          sub(8)
                          unsub(9)
                          unsub(13)
                          sub(14)
                        }
                        else if(e.detail.value === "love"){
                          add(1);
                          add(3);
                          sub(4)
                          sub(5)
                          sub(7)
                          sub(8)
                          sub(13)
                          sub(14)
                        }
                        // console.log(vals)

                      }}
                      color="success"
                    >
                      <IonSegmentButton value="dislike">
                        <IonLabel>
                          <IonIcon icon={thumbsDown} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="like">
                        <IonLabel>
                          <IonIcon icon={thumbsUp} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="love">
                        <IonLabel>
                          <IonIcon icon={heart} slot="icon-only" />
                        </IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                  </IonRow>
                  <p></p>
                  <IonRow>
                  <p><br/></p>
                    <IonButton fill="clear" href="/home" class="centered" onClick={e => {
                      // console.log("subs",subs)
                      // localStorage.setItem("subs", JSON.stringify(subs))

                      updateSelectedHomeModules([...vals]);
                      updateSelectedSubscriptions([...subs]);
                      setHasSeenTutorial(true);
                    }}>
                      Get Started
                      <IonIcon slot="end" icon={arrowForward} />
                    </IonButton>
                  </IonRow>
                </IonGrid>
              </IonCard>
            </SwiperSlide>

 
          </Swiper>
        </SafeAreaWrapper>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapStateToProps: (state) => ({
    selectedHomeModules: state.user.selectedHomeModules,
  }),
  mapDispatchToProps: {
    setHasSeenTutorial,
    updateSelectedHomeModules,
    updateSelectedSubscriptions,
  },
  component: Tutorial,
});
