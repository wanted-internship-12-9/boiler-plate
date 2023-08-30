import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  useIsSearchModeStore,
  useRepoNameStore,
  useRepoOwnerNameStore,
} from '../../hooks/useStore';

import { Layout } from '../Layout';
import * as S from './RootPage.styled';

export const RootPage = () => {
  const { repoOwnerName, changeRepoOwnerName } = useRepoOwnerNameStore();
  const { repoName, changeRepoName } = useRepoNameStore();
  const { isSearchMode, toggleIsSearchMode } = useIsSearchModeStore();

  return (
    <Layout>
      <S.Header>
        {isSearchMode ? (
          <S.Container>
            <S.Input
              type="text"
              value={repoOwnerName}
              onChange={e => changeRepoOwnerName(e.target.value)}
              placeholder="Owner name"
            />
            <S.Input
              type="text"
              value={repoName}
              onChange={e => changeRepoName(e.target.value)}
              placeholder="Repo name"
            />
          </S.Container>
        ) : (
          <S.Container>
            <S.Text>{repoOwnerName}</S.Text>
            <S.Text>{'|'}</S.Text>
            <S.Text>{repoName}</S.Text>
          </S.Container>
        )}
        <S.Button type="button" onClick={toggleIsSearchMode}>
          {isSearchMode ? '검색' : '다시 검색'}
        </S.Button>
      </S.Header>
      <S.Main>
        <Outlet />
      </S.Main>
      <S.Footer>
        <S.ScrollTopButton>▲</S.ScrollTopButton>
      </S.Footer>
    </Layout>
  );
};
