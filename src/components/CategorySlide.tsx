import React from 'react';
import { IonHeader,IonCardHeader, IonSlides, IonChip, IonSlide, IonIcon, IonLabel,IonItem,IonCardContent,IonAvatar, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonGrid, IonRow, IonCol, IonMenuToggle, IonCard } from '@ionic/react';

import { home , pin, fastFood, wine, trailSign, storefront, colorPalette, bed, shield, bonfire, telescope, ticket, carSport, fish} from 'ionicons/icons';

import '../assets/scss/app.scss'


interface Category {
    icon: string;
    title: string;
}
interface CategoryProps {
    Categories: Category[];
}

const CategorySlides: React.FC = ({ }) => {


    return (
        <>
        <br/>
               <IonSlides pager={false} scrollbar={false}>
                    <IonSlide>
    
                                    <IonChip>
                                        <IonIcon icon={fastFood} color="primary" />
                                        <IonLabel>Food</IonLabel>
                                    </IonChip>

                                    <IonChip>
                                        <IonIcon icon={shield} color="primary" />
                                        <IonLabel>National Parks</IonLabel>
                                    </IonChip>
                                    <IonChip>
                                        <IonIcon icon={bed} color="primary" />
                                        <IonLabel>Lodging</IonLabel>
                                    </IonChip>
                                    <IonChip>
                                        <IonIcon icon={trailSign} color="primary" />
                                        <IonLabel>Trails</IonLabel>
                                    </IonChip>

                    </IonSlide>
                    <IonSlide>    
                    <IonChip>
                                        <IonIcon icon={storefront} color="primary" />
                                        <IonLabel>Shops</IonLabel>
                                    </IonChip>
                                    <IonChip>
                                        <IonIcon icon={colorPalette} color="primary" />
                                        <IonLabel>Art</IonLabel>
                                    </IonChip>
                                    <IonChip>
                                        <IonIcon icon={wine} color="primary" />
                                        <IonLabel>Drinks</IonLabel>
                                    </IonChip>



                                    <IonChip>
                                        <IonIcon icon={bonfire} color="primary" />
                                        <IonLabel>Camping Grounds</IonLabel>
                                    </IonChip>


                    </IonSlide>
                    <IonSlide>    
                    <IonChip>
                                        <IonIcon icon={carSport} color="primary" />
                                        <IonLabel>Drives</IonLabel>
                                    </IonChip>
                                    <IonChip>
                                        <IonIcon icon={fish} color="primary" />
                                        <IonLabel>Fishing</IonLabel>
                                    </IonChip>

                                    <IonChip>
                                        <IonIcon icon={ticket} color="primary" />
                                        <IonLabel>Shows</IonLabel>
                                    </IonChip>

                                    <IonChip>
                                        <IonIcon icon={telescope} color="primary" />
                                        <IonLabel>Lookouts</IonLabel>
                                    </IonChip>

                    </IonSlide>
                </IonSlides>
        </>

    );
    
}
export default CategorySlides;
