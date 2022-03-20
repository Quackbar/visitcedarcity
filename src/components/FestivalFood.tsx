import React from "react";
import {
  IonCard, IonCardHeader, IonText, IonTitle,
} from "@ionic/react";

const rn = new Date();

const lunchEnd = new Date()
lunchEnd.setHours(15, 0, 0)

const lunchStart = new Date()
lunchStart.setHours(11, 0, 0)

const breakStart = new Date()
breakStart.setHours(7, 0, 0)

const dinnerEnd = new Date()
dinnerEnd.setHours(21, 0, 0)


const breakfast = rn.getHours() >= breakStart.getHours() && rn.getHours() < lunchStart.getHours()
const lunch = rn.getHours() <= lunchEnd.getHours() && rn.getHours() >= lunchStart.getHours()
const dinner = rn.getHours() > lunchEnd.getHours() && rn.getHours() <= dinnerEnd.getHours()

function firstChoice(){
    if(breakfast){
        return (
                <IonCard class="centered">
                    <img src="https://lh3.googleusercontent.com/-Xt2ZvykFyH0/X-PNAoaIIMI/AAAAAAAAA84/Zk-E5NecNAUkPjLm91h_sGoF1MLhrfuKQCJUFGAYYCw/w768-h768-n-o-k-v1/" />
                    <h1>
                    Grind Coffee House
                    </h1>
                </IonCard>
        )
    }else if(lunch){
        return (
            
                <IonCard class="centered">
                    <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/54514215_608479516242321_562273564791668736_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0ZzAld2Gs80AX8Fn1Iv&_nc_ht=scontent-lax3-2.xx&oh=00_AT__NHUJNrHzwD1xQHHjw3VxxktvbPP9jC8JxSNVYRzbgg&oe=625CFA03" />
                    <h1>
                    Bunnisa's Thai Cuisine
                    </h1>
                </IonCard>
            
        )

    }else if(dinner){
        return (
                <IonCard class="centered">
                <img src="https://images.squarespace-cdn.com/content/v1/5ce2e2957873390001631a70/1584648977627-ZZK0F60Q0SRS6ZYST0X5/573A87F1-241C-4210-A951-FEA4CE8718C4.jpg?format=2500w" />

                <h1>
                Centro Woodfired Pizzaria
                </h1>
                </IonCard>
        )

    }else{
        return (
                <IonCard class="centered">
                    

                    <h1>
                        Everythings Closed
                    </h1>
                    <p>Sorry but its likely that most things are closed within walking distance. Please do check for yourself though as this could be out of date.</p>
                </IonCard>
        )
    }

}

function secondChoice(){
    if(breakfast){
        return (
            <>
                <IonCard class="centered">
                    <img src="https://bristleconeco.com/wp-content/uploads/2020/06/connection.png" />
                    <h1>
                        Bristlecone Coffee
                    </h1>
                </IonCard>
            </>
        )
    }else if(lunch){
        return (
            <>
                <IonCard class="centered">
                <img src="https://secureservercdn.net/198.71.233.83/lzw.0ad.myftpupload.com/wp-content/uploads/IMG-9047-1-scaled-1.jpg" />

                    <h1>
                    Pastry Pub
                    </h1>
                </IonCard>
            </>
        )

    }else if(dinner){
        return (
            <>
               <IonCard class="centered">
               <img src="https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/54514215_608479516242321_562273564791668736_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=0ZzAld2Gs80AX8Fn1Iv&_nc_ht=scontent-lax3-2.xx&oh=00_AT__NHUJNrHzwD1xQHHjw3VxxktvbPP9jC8JxSNVYRzbgg&oe=625CFA03" />

                    <h1>
                    Bunnisa's Thai Cuisine
                    </h1>
                </IonCard> 
            </>
        )

    }else{
        return (
            <></>
        )
    }
}

function thirdChoice(){
    if(breakfast){
        return (
            <>
                <IonCard class="centered">
                <img src="https://secureservercdn.net/198.71.233.83/lzw.0ad.myftpupload.com/wp-content/uploads/IMG-9047-1-scaled-1.jpg" />

                    <h1>
                    Pastry Pub
                    </h1>
                </IonCard>
            </>
        )
    }else if(lunch){
        return (
            <>
                <IonCard class="centered">
                <img src="" />

                    <h1>
                        Lunch Spot
                    </h1>
                </IonCard>
            </>
        )

    }else if(dinner){
        return (
            <>
                <IonCard class="centered">
                <img src="" />

                    <h1>
                        Dinner Spot
                    </h1>
                </IonCard>
            </>
        )

    }else{
        return (
            <>
                
            </>
        )
    }
}

function titleMeal(){
    var returnable = "";
    returnable += breakfast ? "Breakfast" : "";
    returnable += lunch ? "Lunch" : "";
    returnable += dinner ? "Dinner" : "";
    if(returnable === ""){
        returnable = "the night"
    }
    return returnable;
}


const FestivalFood: React.FC = ({}) => {    

    return (
            <IonCard>
                <IonCardHeader>
                <IonTitle class="centered">
                    <h1>
                        Walking Distance From<br/> the Shakespeare Festival
                    </h1>
                    <h2>
                       for {titleMeal()}
                    </h2>
                </IonTitle>

                {firstChoice()}
                <IonText class="centered">
                    <p>
                        - or - 
                    </p>
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
