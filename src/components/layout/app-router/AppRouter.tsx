import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../../pages/Home';
import NotFoundPage from '../../../pages/404';
import Franchise from '../../../pages/franchise';
import InProcess from '../../../pages/in-process';
import Games from '../../../pages/Games';
import Admin from '../../../pages/Admin';

const AppRouter = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/franchise" element={<Franchise />} />
      <Route path="/inprocess" element={<InProcess />} />
      <Route path="/games" element={<Games />} />
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  );
};

export default AppRouter;
