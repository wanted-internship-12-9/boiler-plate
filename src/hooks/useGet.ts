import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';

import { axiosFetch } from '../api/axiosInstance';
import {
  useIsSearchModeStore,
  usePageNumberStore,
  useRepoNameStore,
  useRepoOwnerNameStore,
} from './useStore';
import { GITHUB_API_PATH } from '../api/apiConfig';
import { IssueType } from '../types';

export const useGetIssues = () => {
  const [data, setData] = useState<IssueType[] | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // FIXME: isSearchMode 로 useGetIssues 를 호출하는 로직을 분리해보기(클라/서버 상태 분리)
  const { isSearchMode } = useIsSearchModeStore();
  const { pageNumber } = usePageNumberStore();
  const { repoName } = useRepoNameStore();
  const { repoOwnerName } = useRepoOwnerNameStore();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setIsError(false);
      try {
        const response = await axiosFetch.get(
          GITHUB_API_PATH.getIssues(repoOwnerName, repoName, pageNumber),
        );
        const { data } = response;
        setData(data);
      } catch (error) {
        setError(error as AxiosError);
        setIsError(true);
      }
    };
    if (!isSearchMode) {
      fetchData();
    }
    setIsLoading(false);
  }, [isSearchMode]);

  return {
    data,
    error,
    isError,
    isLoading,
  };
};
