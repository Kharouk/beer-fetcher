import styled, { keyframes } from 'styled-components'

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  margin: 2rem 1rem;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Emphasis = styled.em`
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    display: inline-block;
    animation: ${spin} 0.5s linear infinite;
  }
`
