import BeerList from '../components/BeerList'
import Layout from '../layout/Layout'
import { getAllBeers } from '../utils/fetchData'

export default function Home(props) {
  return (
    <Layout isHomePage>
      <BeerList beers={props.beers} />
    </Layout>
  )
}

export async function getStaticProps() {
  const beers = await getAllBeers()
  return { props: { beers } }
}
