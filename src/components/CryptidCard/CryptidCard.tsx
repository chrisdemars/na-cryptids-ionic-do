import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonItem, IonLabel, IonList } from '@ionic/react';
import data from './../../data.json';

interface Cryptid {
  image: string;
  name: string;
  description: string;
  firstSeen: string;
  location: string;
}

interface MyComponentProps {
  cryptid: Cryptid;
}

const CryptidCard: React.FC<MyComponentProps> = ({ cryptid }) => {
  return (
    <>
      {data.map((cryptid) => (
        <IonCard>
          <IonImg src={cryptid.image} alt={cryptid.name} />
          <IonCardHeader>
            <IonCardTitle>{cryptid.name}</IonCardTitle>
            <IonCardSubtitle>{cryptid.location}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent fullscreen={true} scrollEvents={true}>
            <IonList>
              <IonItem>
                <IonLabel>Description: {cryptid.description}</IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel>First Seen: {cryptid.firstSeen}</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      ))}
    </>
  );
};

export default CryptidCard;
