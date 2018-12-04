import i18n from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <React.Fragment>
    <h1>404</h1>
    <h4>{i18n.t('errorMessages.404')}</h4>
    <Link to="/">{i18n.t('errorMessages.returnToHome')}</Link>
  </React.Fragment>
);

export default NotFoundPage;
