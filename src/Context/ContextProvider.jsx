/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import NotificationManager from '../Components/Ui/NotificationManager';

export const Context = createContext({});

const baseUrl = process.env.REACT_APP_BASE_API_URL;
const time = process.env.REACT_APP_TIMER;

const ContextProvider = ({ children }) => {
  const [members, setMembers] = useState([]);
  const [token, setToken] = useState(null);
  const [timer, setTimer] = useState(time);

  const getToken = () => {
    axios
      .post(`${baseUrl}/auth`, {
        username: 'sarah',
        password: 'connor',
      })
      .then((res) => {
        if (res.status === 200) {
          const { token } = res.data;
          setToken(token);
        }
      })
      .catch((error) => {
        NotificationManager('3', error.message);
      });
  };
  const getMembers = () => {
    axios
      .get(`${baseUrl}/api/members`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setMembers(res.data);
        }
      })
      .catch((error) => {
        NotificationManager('3', error.message);
      });
  };
  const addMember = ({ member }) => {
    setTimer(time);
    if (members.some(({ ssn }) => ssn === member.ssn)) {
      NotificationManager('3', 'El ssn ingresado ya se encuentra registrado.');
      return;
    }
    axios
      .post(`${baseUrl}/api/members`, member, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          setMembers([...members, res.data]);
        }
      })
      .catch((error) => {
        NotificationManager('3', error.message);
      });
  };
  useEffect(() => {
    getToken();
  }, []);
  useEffect(() => {
    if (token) {
      getMembers();
    }
  }, [token]);
  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
      return;
    }
    if (timer === 0) {
      getMembers();
      setTimer(time);
    }
  }, [timer]);
  return (
    <Context.Provider
      value={{
        members,
        addMember,
        timer,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
