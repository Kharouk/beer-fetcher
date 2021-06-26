import styled from 'styled-components'

const FooterStyle = styled.footer`
  text-align: center;
  width: 75%;
  margin: 1rem auto;

  font-size: 1.2rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export default function Footer() {
  return (
    <FooterStyle>
      Powered by 🍺 - Developed by{' '}
      <a target="_blank" rel="noopener" href="https://alex.kharo.uk">
        Alex Kharouk
      </a>{' '}
      for{' '}
      <a target="_blank" rel="noopener" href="https://www.oodlecarfinance.com">
        Oodle
      </a>
      .
    </FooterStyle>
  )
}
