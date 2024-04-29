import React from 'react';
import { IonCol, IonGrid, IonRow, setupIonicReact } from '@ionic/react';
import Title from './components/Title/Title';
import CryptidCard from './components/CryptidCard/CryptidCard';
import data from './data.json';

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

setupIonicReact();


const App: React.FC = () => {

  return (
    <>
      <Title />
      <IonGrid fixed={true}>
        <IonRow>
          {data.map((cryptid) => (
            <IonCol key={cryptid.name}>
              <CryptidCard cryptid={{ image: '', name: '', description: '', firstSeen: '', location: '' }} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    </>
  )
}

export default App