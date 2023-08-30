import { styled } from 'styled-components';

export const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e1e4e8;
  &:hover {
    background-color: #f6f8fa;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const MainInfo = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
`;

export const SubInfo = styled.div`
  font-size: 0.875rem;
  color: #586069;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  min-width: 20%;
`;

export const Comment = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #6a737d;
`;
