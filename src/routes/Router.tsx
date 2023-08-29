import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RootPage from '../pages/RootPage';
import IssueListPage from '../pages/IssueListPage';
import IssueDetailPage from '../pages/IssueDetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />}>
          <Route path="/" element={<IssueListPage />} />
          <Route path="/detail/:id" element={<IssueDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
