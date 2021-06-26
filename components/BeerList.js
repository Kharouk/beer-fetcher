import Image from 'next/image'
import styled from 'styled-components'
import Button from './Button'

const ListContainer = styled.ul`
  padding: 0.5rem;
  list-style: none;
  display: flex;
  column-gap: 2rem;
  row-gap: 2rem;
  flex-wrap: wrap;

  @media (min-width: 800px) {
    padding: 5rem;
  }
`

const ListItem = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.offWhite};
  flex: 1 0 33%;
  text-align: center;
  padding: 1rem 5rem;

  .p-name-beer {
    font-size: 2rem;
    font-weight: bold;
  }

  .p-name-tag {
    padding-bottom: 1rem;
  }
`

function BeerItem({ beer }) {
  const { name, tagline, image_url } = beer
  return (
    <ListItem>
      <Image src={image_url} alt={name} height={450} width={211} />
      <p className="p-name-beer">{name}</p>
      <p className="p-name-tag">{tagline}</p>

      <Button link={`/beers/${beer.id}`}>have a gander..</Button>
    </ListItem>
  )
}

export default function BeerList({ beers }) {
  return (
    <ListContainer>
      {beers.map((beer) => (
        <BeerItem key={beer.id} beer={beer} />
      ))}
    </ListContainer>
  )
}
