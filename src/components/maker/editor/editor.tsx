import React from 'react';
import styles from './editor.module.css';
import {CardType} from '../maker';
import Card from '../card/card';
import CardEditForm from '../cardEditForm/cardEditForm';

type PropTypes = {
    cards : CardType[];
}

const Editor = ({cards}: PropTypes) => {
    return (
        <div className={styles.editor}>
            <h1>Editor</h1>
            {
                cards.map(card => <CardEditForm card={card} />)
            }
        </div>
    );
};

export default Editor;