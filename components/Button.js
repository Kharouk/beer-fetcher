import Link from 'next/link'
import styled from 'styled-components'

const LinkStyle = styled.a`
  padding: 0.5rem 1rem;
  background-color: red;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #eee;
  }
`

export default function Button({ link, children }) {
  return (
    <Link href={link}>
      <LinkStyle>{children}</LinkStyle>
    </Link>
  )
}
