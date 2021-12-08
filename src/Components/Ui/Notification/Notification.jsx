import React from 'react';
import PropTypes from 'prop-types';

import {
  NotificationContainer,
  NotificationIcon,
  NotificationMessage,
} from './styles';

const Notification = ({ icon = '', message = '' }) => {
  return (
    <NotificationContainer>
      <NotificationIcon />
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationContainer>
  );
};

Notification.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
