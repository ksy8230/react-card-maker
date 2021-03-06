import React, { SyntheticEvent } from 'react';
import styles from './card_edit_form.module.css';
import Button from '../../button/button';

import { CardType, NormalizedObjects } from '../maker';

// type PropTypes = {
//     card : CardType;
//     updateCard: (card:CardType) => void;
//     deleteCard: (card:CardType) => void;
//     FileInput: React.FunctionComponent;
// }

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const {name, company, title, email, message, theme, fileName, fileURL} = card;
    const onFileChage = (file) => {
        console.log(file);
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url,
        });
    }
    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({...card, [event.target.name]: event.target.value})
    }
    const onSubmit = () => {
        deleteCard(card)
    };
    return (
        <form className={styles.form}>
            <input className={styles.input} type="text" name="name" value={name} onChange={onChange} />
            <input
                className={styles.input}
                type="text"
                name="company"
                value={company} onChange={onChange}
            />
            <select className={styles.select} name="theme" value={theme} onChange={onChange}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="title" value={title} onChange={onChange} />
            <input className={styles.input} type="text" name="email" value={email} onChange={onChange} />
            <textarea className={styles.textarea} name="message" value={message} onChange={onChange} />
            <div className={styles.fileInput}>
                <FileInput onFileChange={onFileChage} />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
};

export default CardEditForm;