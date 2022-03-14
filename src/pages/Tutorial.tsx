import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonLabel, IonSegment, IonSegmentButton, IonGrid, IonRow, IonCard } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import { arrowForward, chevronForward, heart, thumbsDown, thumbsUp } from 'ionicons/icons';
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

      <IonContent fullscreen>

        <Swiper pagination={true} onSwiper={setSwiper} onSlideChangeTransitionStart={handleSlideChangeStart}>

        <SwiperSlide>
          <IonCard class="yellow">
        <IonGrid>
            <IonRow>
              {/* <IonTitle color="primary"> */}
              <h1 className="centered">
              <br/>
                <br/>
              </h1>

              <img className="centered" src="assets/img/cover.png" alt=""/>
              {/* </IonTitle> */}
            </IonRow>

            <IonRow>
              {/* <IonTitle color="primary"> */}
              <h1 className="centered"><br/><br/><br/>
                Let Wonder Be
                <br/>
                Your Guide
              </h1>
              {/* </IonTitle> */}
            </IonRow>
            <IonRow>
              {/* <IonTitle color="primary"> */}
              <IonLabel className="centered">
              <h3 className="centered"><br/>
              <br/><br/>
                Swipe to help us<br/> get to know you...
                <br/><br/>
              </h3>
              <IonIcon icon={chevronForward} slot="icon-only" />
              <IonIcon icon={chevronForward} slot="icon-only" />
              <IonIcon icon={chevronForward} slot="icon-only" />
              <IonIcon icon={chevronForward} slot="icon-only" />
              </IonLabel>
              {/* </IonTitle> */}
            </IonRow>
            </IonGrid>
            </IonCard>
          </SwiperSlide>


          <SwiperSlide >
          <IonCard class="yellow">

            {/*-- Segment with secondary color --*/}
            <IonGrid class="centered">
            <IonRow>
              {/* <IonTitle color="primary"> */}
              <h1 className="centered"><br/>
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
            </IonGrid>
            <h1><br/></h1>

            </IonCard>
          </SwiperSlide>

          <SwiperSlide>
          <IonCard class="yellow">

            <IonGrid>
              <IonRow>
              <img src="assets/img/ica-slidebox-img-4.png" alt="" className="slide-image" />
              </IonRow>
              <IonRow>
              <IonButton fill="clear" class="centered" onClick={startApp}>
                  Continue
                  <IonIcon slot="end" icon={arrowForward} />
              </IonButton>
              </IonRow>
            </IonGrid>
            </IonCard>
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