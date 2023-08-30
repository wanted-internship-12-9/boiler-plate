import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { RootPage } from '../pages/RootPage';
import { IssueList } from '../components/IssueList';
import { IssueDetail } from '../components/IssueDetail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route path="/" element={<IssueList />} />
          <Route path="/detail/:id" element={<IssueDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
