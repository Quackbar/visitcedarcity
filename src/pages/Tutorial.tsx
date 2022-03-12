import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, useIonViewWillEnter, IonLabel, IonSegment, IonSegmentButton, IonTitle, IonGrid, IonRow } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import { arrowForward, heart, thumbsDown, thumbsUp } from 'ionicons/icons';
import { setHasSeenTutorial } from '../data/user/user.actions';
import '@ionic/react/css/ionic-swiper.css';
import { connect } from '../data/connect';
import { RouteComponentProps } from 'react-router';
import 'swiper/css';

interface OwnProps extends RouteComponentProps {};

interface DispatchProps {
  setHasSeenTutorial: typeof setHasSeenTutorial;
}

interface TutorialProps extends OwnProps, DispatchProps { };

const Tutorial: React.FC<TutorialProps> = ({ history, setHasSeenTutorial }) => {
  const [showSkip, setShowSkip] = useState(true);
  let [swiper, setSwiper] = useState<SwiperCore>();



  const img1 = 'assets/img/ica-slidebox-img-1.png';
  
  const startApp = async () => { 
    await setHasSeenTutorial(true);
    history.push('/home', { direction: 'none' });
  };

  const handleSlideChangeStart = () => { 
    if(!swiper) return;
    setShowSkip(!swiper.isEnd);
  };

  return (
    <IonPage id="tutorial-page">
      <IonHeader no-border>
        <IonToolbar>
          <IonButtons slot="end">
            {showSkip && <IonButton color='primary' onClick={startApp}>Skip</IonButton>}
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <Swiper onSwiper={setSwiper} onSlideChangeTransitionStart={handleSlideChangeStart}>
          <SwiperSlide >
            {/*-- Segment with secondary color --*/}
            <IonGrid class="centered">
            <IonRow>
              {/* <IonTitle color="primary"> */}
              <h1 className="centered">
                Help Us Get to Know You
                <br/>
              </h1>
              {/* </IonTitle> */}
            </IonRow>
            <IonRow>

                <h3 className="centered"><br/>
                What's Your Favorite Season to Visit?
              </h3>

              </IonRow>
              <IonRow>
              <IonSegment value="hybrid"  onIonChange={e => console.log('Segment selected', e.detail.value)} color="primary">
                <IonSegmentButton value="standard">
                  <IonLabel>Summer</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="hybrid">
                  <IonLabel>Any</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sat">
                  <IonLabel>Winter</IonLabel>
                </IonSegmentButton>
              </IonSegment>
              </IonRow>

              <IonRow>

                  <h3 className="centered"><br/>
                  How Do You Feel About Theatre?  
              </h3>

              </IonRow>
              <IonRow>
              <IonSegment value="hybrid" onIonChange={e => console.log('Segment selected', e.detail.value)} color="secondary">
                <IonSegmentButton value="standard">
                  <IonLabel>
                     
                    
                    <IonIcon icon={thumbsDown} slot="icon-only" />
                  </IonLabel>
                
                </IonSegmentButton>
                <IonSegmentButton value="hybrid">
                <IonLabel>
                
                  <IonIcon icon={thumbsUp} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sat">
                <IonLabel>
                
                  <IonIcon icon={heart} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
              </IonSegment>
              </IonRow>

              <IonRow>
                <h3 className="centered"><br/>
                              How Do You Feel About the Outdoors?    
                  </h3>
                  

              </IonRow>
              <IonRow>
              <IonSegment value="hybrid"  onIonChange={e => console.log('Segment selected', e.detail.value)} color="danger">
                <IonSegmentButton value="standard">
                  <IonLabel>
                     
                    
                    <IonIcon icon={thumbsDown} slot="icon-only" />
                  </IonLabel>
                
                </IonSegmentButton>
                <IonSegmentButton value="hybrid">
                <IonLabel>
                
                  <IonIcon icon={thumbsUp} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sat">
                <IonLabel>
                
                  <IonIcon icon={heart} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
              </IonSegment>
              </IonRow>

              <IonRow>
                <h3 className="centered"><br/>
                              How Do You Feel About History?    
                  </h3>

              </IonRow>
              <IonRow>
              <IonSegment value="hybrid"  onIonChange={e => console.log('Segment selected', e.detail.value)} color="tertiary">
                <IonSegmentButton value="standard">
                  <IonLabel>
                     
                    
                    <IonIcon icon={thumbsDown} slot="icon-only" />
                  </IonLabel>
                
                </IonSegmentButton>
                <IonSegmentButton value="hybrid">
                <IonLabel>
                
                  <IonIcon icon={thumbsUp} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sat">
                <IonLabel>
                
                  <IonIcon icon={heart} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
              </IonSegment>
              </IonRow>
              <IonRow >
              <h3 className="centered"><br/>
                How do you feel about Arts and Crafts?
              </h3>

              </IonRow>

              <IonRow>

              <IonSegment value="hybrid"  onIonChange={e => console.log('Segment selected', e.detail.value)} color="success">
                <IonSegmentButton value="standard">
                  <IonLabel>
                     
                    
                    <IonIcon icon={thumbsDown} slot="icon-only" />
                  </IonLabel>
                
                </IonSegmentButton>
                <IonSegmentButton value="hybrid">
                <IonLabel>
                
                  <IonIcon icon={thumbsUp} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sat">
                <IonLabel>
                
                  <IonIcon icon={heart} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
              </IonSegment>
              </IonRow>


              <IonRow>
                <h3 className="centered"><br/>
                              How Do You Feel About Music?    
                  </h3>

              </IonRow>
              <IonRow>
              <IonSegment value="hybrid"  onIonChange={e => console.log('Segment selected', e.detail.value)} color="warning">
                <IonSegmentButton value="standard">
                  <IonLabel>
                     
                    
                    <IonIcon icon={thumbsDown} slot="icon-only" />
                  </IonLabel>
                
                </IonSegmentButton>
                <IonSegmentButton value="hybrid">
                <IonLabel>
                
                  <IonIcon icon={thumbsUp} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="sat">
                <IonLabel>
                
                  <IonIcon icon={heart} slot="icon-only" />
                </IonLabel>
                </IonSegmentButton>
              </IonSegment>
              </IonRow>
            </IonGrid>
          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-2.png" alt="" className="slide-image" />

          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-3.png" alt="" className="slide-image" />

          </SwiperSlide>

          <SwiperSlide>
            <img src="assets/img/ica-slidebox-img-4.png" alt="" className="slide-image" />

            <IonButton fill="clear" onClick={startApp}>
              Continue
              <IonIcon slot="end" icon={arrowForward} />
            </IonButton>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  );
};

export default connect<OwnProps, {}, DispatchProps>({
  mapDispatchToProps: ({
    setHasSeenTutorial
  }),
  component: Tutorial
});