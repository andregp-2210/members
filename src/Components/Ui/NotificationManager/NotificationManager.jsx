import React from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

import Notification from '../Notification';

const NotificationManager = (type = '', message = '', autoClose = true) => {
  switch (type.toString()) {
    case '0':
      toast.success(<Notification icon='check' message={message} />, {
        autoClose: autoClose ? 10000 : false,
      });
      break;
    case '2':
      toast.warning(
        <Notification
          icon='exclamation-circle'
          message={message}
          type={type}
        />,
        {
          autoClose: autoClose ? 10000 : false,
        }
      );
      break;
    default:
      toast.error(
        <Notification icon='exclamation-triangle' message={message} />,
        {
          autoClose: autoClose ? 10000 : false,
        }
      );
      break;
  }
};

NotificationManager.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  autoClose: PropTypes.bool,
};

export default NotificationManager;
