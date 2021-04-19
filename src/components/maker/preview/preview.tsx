import React from 'react';
import Card from '../card/card';
import { CardType, NormalizedObjects } from '../maker';
import styles from './preview.module.css';

type PropTypes = {
    cards : NormalizedObjects<CardType>;
}

const Preview = ({cards}: PropTypes) => {
    return (
        <div className={styles.preview}>
            <h1>Preview</h1>
            <ul className={styles.cards}>
                {
                    Object.keys(cards).map(key => <Card key={key} card={cards[key]} />)
                }
            </ul>
        </div>
    );
};

export default Preview;