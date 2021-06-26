import styled from 'styled-components'

export const Article = styled.article`
  display: grid;
  grid-gap: 1em;
  grid-template-rows: 1fr auto;
  padding: 2em;
  font-size: 1.1rem;
  justify-items: center;
  align-items: center;

  @media (min-width: 52em) {
    grid-template-columns: 12em 40em;
    grid-gap: 5em;
    justify-content: center;
    font-size: 1.2rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
  }

  p strong {
    border-bottom: 2px solid black;
  }

  ul {
    list-style: none;
    padding-left: 0;
    li {
      padding-bottom: 1rem;
    }
  }

  .sub-heading {
    font-size: 2rem;
  }
`
