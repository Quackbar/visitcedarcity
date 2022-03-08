import React, { useState } from 'react';
import { IonContent, IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, useIonViewWillEnter } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper';
import { arrowForward } from 'ionicons/icons';
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
          <SwiperSlide>
            <img src={img1} alt="" className="slide-image" /><br/>

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