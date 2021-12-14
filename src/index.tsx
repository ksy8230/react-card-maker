import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './App';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/maker/image_file_input/image_file_input';
import CardRepository from './service/card_repository';

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository();
const FileInput = (props:any) => (<ImageFileInput {...props} imageUploader={imageUploader} />)

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} CardRepository={CardRepository} />
  </React.StrictMode>,
  document.getElementById('root')
);

