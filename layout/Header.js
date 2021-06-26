import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`

const Emphasis = styled.em`
  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  }
`

export default function Header() {
  return (
    <Title>
      Get ready to drink <Emphasis>oodles</Emphasis> of beer.
    </Title>
  )
}
