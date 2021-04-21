import React, {  SyntheticEvent, useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, name, onFileChange}:any) => { 
    const inputRef = useRef<HTMLInputElement>(null);
    const onButtonClick = (event: SyntheticEvent) => {
        event.preventDefault();
        inputRef?.current?.click();
    };
    const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = (event.target as HTMLInputElement).files;
        console.log(files?.[0])
        const uploaded = await imageUploader.upload(files?.[0]);
        console.log(uploaded)
        onFileChange({
            name: uploaded.original_filename, url: uploaded.url
        })
    }
    return (
        <div className={styles.container}>
            <input ref={inputRef} type="file" accept="image/*" name="file" onChange={onChange} />
            <button className={styles.button} onClick={onButtonClick}>{name || 'No File'}</button>
        </div>
    );
};

export default ImageFileInput;
