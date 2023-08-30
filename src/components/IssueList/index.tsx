import React from 'react';

import { useGetIssues } from '../../hooks/useGet';

import * as S from './IssueList.styled';
import { IssueItem } from './IssueItem';

export const IssueList = () => {
  const { data, error, isError, isLoading } = useGetIssues();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <S.Container>
      {data?.map(issue => (
        <IssueItem
          key={issue.id}
          number={issue.number}
          title={issue.title}
          login={issue.user.login}
          created_at={issue.created_at}
          comments={issue.comments}
        />
      ))}
    </S.Container>
  );
};
