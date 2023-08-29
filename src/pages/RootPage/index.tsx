import React from 'react';
import { Outlet } from 'react-router-dom';

// import * as S from './RootPage.style';

const RootPage = () => {
  return (
    <div>
      루트 페이지입니다.
      <Outlet />
    </div>
  );
};

export default RootPage;
