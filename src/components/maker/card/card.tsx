import React from 'react';
import { CardType } from '../maker';
import styles from './card.module.css';

type PropTypes = {
    card : CardType;
}

const DEFAULT_IMAGE = '/images/'

const Card = ({card}: PropTypes) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${pickStyles(theme)}`}>
            <img src={url} alt="user_photo"/>
            <div>
                <h1>{name}</h1>
                <p>{company}</p>
                <p>{title}</p>
                <p>{email}</p>
                <p>{message}</p>
            </div>
        </li>
    );
};

function pickStyles(theme:string) {
    switch(theme) {
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error('unknown theme!');
    }
}

export default Card;