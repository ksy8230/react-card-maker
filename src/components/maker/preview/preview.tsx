import React from 'react';
import Card from '../card/card';
import { CardType } from '../maker';
import styles from './preview.module.css';

type PropTypes = {
    cards : CardType[];
}

const Preview = ({cards}: PropTypes) => {
    return (
        <div className={styles.preview}>
            <h1>Preview</h1>
            <ul className={styles.cards}>
                {
                    cards.map(card => <Card card={card} />)
                }
            </ul>
        </div>
    );
};

export default Preview;