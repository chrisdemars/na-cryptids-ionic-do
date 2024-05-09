import { IonCol, IonGrid, IonRow, IonContent, setupIonicReact, IonApp, IonPage } from '@ionic/react';
import Title from './components/Title/Title';
import CryptidCard from './components/CryptidCard/CryptidCard';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import data from './data.json';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonContent fullscreen={true} scrollEvents={true}>
        <header className="header-section">
          <Title />
        </header>
        <IonGrid fixed={true}>
          <IonRow>
            {data.map((cryptid, index) => (
              <IonCol>
                <CryptidCard key={index} {...cryptid} />
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent >
    </IonPage >
  </IonApp>
);

export default App