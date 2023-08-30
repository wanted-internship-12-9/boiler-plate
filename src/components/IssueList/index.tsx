import React from 'react';

import { useGetIssues } from '../../hooks/useGet';

import * as S from './IssueList.styled';

const IssueList = () => {
  const { data, error, isError, isLoading } = useGetIssues();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return <S.Container>{data?.map(issue => <li key={issue.id}>{issue.title}</li>)}</S.Container>;
};

export default IssueList;
