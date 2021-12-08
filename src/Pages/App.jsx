import React from 'react';
import { ToastContainer } from 'react-toastify';

import Main from '../Components/Layout/Main';
import RegisterForm from '../Components/Ui/RegisterForm';
import MembersList from '../Components/Ui/MembersList';

import { GlobalStyles } from '../Assets/Styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Main>
        <RegisterForm />
        <MembersList />
      </Main>
    </>
  );
};
