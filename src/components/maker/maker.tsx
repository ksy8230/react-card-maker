import React, { useEffect, useState } from 'react';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { IAuthService } from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from './editor/editor';
import styles from './maker.module.css';
import Preview from './preview/preview';

type PropTypes = {
    authService: IAuthService
    FileInput: React.FunctionComponent
    CardRepository: any // todo write type
}

export interface NormalizedObjects<T> {
  [idx: string]: T;
}

interface LocationState {
  id: string
}

export type CardType = {
  id: string,
  name: string,
  company: string,
  theme: string,
  title: string,
  email: string,
  message: string,
  fileName: string,
  fileURL: string | null,
}

const Maker = ({ FileInput, authService, CardRepository }: PropTypes) => {
  const historyState = useHistory();
  const [cards, setCards] = useState({} as NormalizedObjects<CardType>);
  const [userId, setUserId] = useState(historyState && (historyState.location.state as LocationState).id);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (user) {
        setUserId(user.uid);
        console.log(historyState);
        console.log(user.uid);
      } else {
        history.push('/');
      }
    });
  });

  useEffect(() => {
    console.log(userId);
    if (!(userId)) {
      console.log('no id')
      return;
    }
    
    const stopSync = CardRepository.syncCards(userId, (cards: NormalizedObjects<CardType>) => {
      console.log('have id');
      setCards(cards);
    });
    return () => {stopSync()};
  }, [userId]);
  
  const addCard = (card: CardType) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    CardRepository.saveCard(userId, card);
  };
  const updateCard = (card: CardType) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  }
  const deleteCard =(card: CardType) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    CardRepository.deleteCard(userId, card);
  }
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor FileInput={FileInput} cards={cards}  addCard={addCard} updateCard={updateCard} deleteCard={deleteCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;