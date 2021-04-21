import React from 'react';
import styles from './editor.module.css';
import {CardType, NormalizedObjects} from '../maker';

import CardEditForm from '../cardEditForm/cardEditForm';
import CardAddForm from '../card_add_form/card_add_form';

type PropTypes = {
    cards : NormalizedObjects<CardType>;
    addCard: (card:CardType) => void;
    updateCard: (card:CardType) => void;
    deleteCard: (card:CardType) => void;
    FileInput: React.FunctionComponent;
}

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}: PropTypes) => {
    return (
        <div className={styles.editor}>
            <h1>Editor</h1>
            {
                Object.keys(cards).map(key => <CardEditForm key={key} FileInput={FileInput} card={cards[key]} updateCard={updateCard} deleteCard={deleteCard} />)
            }
            <CardAddForm FileInput={FileInput} onAdd={addCard} />
        </div>
    );
};

export default Editor;