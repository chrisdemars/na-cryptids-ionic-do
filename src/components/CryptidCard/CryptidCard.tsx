import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonLabel, IonList } from '@ionic/react';

interface Cryptid {
  image: string;
  name: string;
  description: string;
  firstSeen: string;
  location: string;
}

const CryptidCard: React.FC<Cryptid> = ({ image, name, description, firstSeen, location }) => (
  <>
    <IonCard>
      <img src={image} alt={name} />
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{location}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList lines="none">
          <IonItem>
            <IonLabel>Description: {description}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>First Seen: {firstSeen}</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  </>
);

export default CryptidCard;
