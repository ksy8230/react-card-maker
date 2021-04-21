import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IAuthService } from '../../service/auth_service';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from './editor/editor';
import styles from './maker.module.css';
import Preview from './preview/preview';

type PropTypes = {
    authService: IAuthService
    FileInput: React.FunctionComponent
}

export interface NormalizedObjects<T> {
  [idx: string]: T;
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

const Maker = ({ FileInput, authService }: PropTypes) => {
  const [cards, setCards] = useState({
    '1': {
      id: '1',
      name: 'sy',
      company: 'est',
      theme: 'dark',
      title: 'sw engineer',
      email: 'mollog@email.com',
      message: 'go for it',
      fileName: 'sy',
      fileURL: null,
    },
    '2': {
      id: '2',
      name: 'v',
      company: 'est',
      theme: 'light',
      title: 'sw engineer',
      email: 'mollog@email.com',
      message: 'go for it',
      fileName: 'sy',
      fileURL: '',
    },
    '3': {
      id: '3',
      name: 'v2',
      company: 'est',
      theme: 'colorful',
      title: 'sw engineer',
      email: 'mollog@email.com',
      message: 'go for it',
      fileName: 'sy',
      fileURL: '',
    }
  } as NormalizedObjects<CardType>);

 

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  
  const addCard = (card: CardType) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
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