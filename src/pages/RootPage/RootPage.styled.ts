import { styled } from 'styled-components';

export const Header = styled.header`
  width: 100%;
  min-height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.default};
`;

export const Container = styled.section`
  width: 100%;
  min-height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 40%;
  height: 4rem;
  font-size: 1.5rem;
  border: 1px solid none;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const Text = styled.span<{ color?: string }>`
  height: 4rem;
  line-height: 4rem;
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.color || 'black'};
  text-align: center;
`;

export const Button = styled.button`
  width: 50%;
  height: 3rem;
  border: 1px solid none;
  border-radius: 0.5rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const Main = styled.main`
  width: 100%;
  min-height: 76vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const ScrollTopButton = styled.button`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border: 1px solid none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
`;
