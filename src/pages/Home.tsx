import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import HomeCarousel from "../components/HomeCarousel";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AniFind</IonTitle>
          {/* TODO: display the search icon */}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <HomeCarousel></HomeCarousel>
      </IonContent>
    </IonPage>
  );
};

export default Home;
