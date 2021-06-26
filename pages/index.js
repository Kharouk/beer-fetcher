import { useState } from 'react'
import styled from 'styled-components'
import BeerList from '../components/BeerList'
import Layout from '../layout/Layout'
import { getAllBeers } from '../utils/fetchData'

const SearchContainer = styled.section`
  text-align: center;
  label,
  input {
    font-size: 1.2rem;
  }
`

export default function Home(props) {
  const { beers } = props
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const showFilteredBeers = query
    ? beers.filter((beer) =>
        beer.name.toLowerCase().includes(query.toLowerCase())
      )
    : beers
  console.log(showFilteredBeers)
  return (
    <Layout isHomePage>
      <SearchContainer>
        <label>
          <p>Know what you want?</p>
          <input
            value={query}
            onChange={handleChange}
            placeholder="Alpha dog"
          />
        </label>
      </SearchContainer>
      <BeerList beers={showFilteredBeers} />
    </Layout>
  )
}

export async function getStaticProps() {
  const beers = await getAllBeers()
  return { props: { beers } }
}
