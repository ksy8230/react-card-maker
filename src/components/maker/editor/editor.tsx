import React from 'react';
import styles from './editor.module.css';
import {CardType} from '../maker';
import Card from '../card/card';
import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../card_add_form/card_add_form';

type PropTypes = {
    cards : CardType[];
    addCard: (card:CardType) => void;
}

const Editor = ({cards, addCard}: PropTypes) => {
    return (
        <div className={styles.editor}>
            <h1>Editor</h1>
            {
                cards.map(card => <CardEditForm card={card} />)
            }
            <CardAddForm onAdd={addCard} />
        </div>
    );
};

export default Editor;