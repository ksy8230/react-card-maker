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
  fileURL: string | null
}

const Maker = ({ authService }: PropTypes) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'sy',
      company: 'est',
      theme: 'dark',
      title: 'sw engineer',
      email: 'mollog@email.com',
      message: 'go for it',
      fileName: 'sy',
      fileURL: null
    },
    {
      id: '2',
      name: 'v',
      company: 'est',
      theme: 'light',
      title: 'sw engineer',
      email: 'mollog@email.com',
      message: 'go for it',
      fileName: 'sy',
      fileURL: ''
    },
    {
      id: '3',
      name: 'v2',
      company: 'est',
      theme: 'colorful',
      title: 'sw engineer',
      email: 'mollog@email.com',
      message: 'go for it',
      fileName: 'sy',
      fileURL: ''
    }
  ] as CardType[]);
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
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards}  addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;