import BeerDetails from '../../components/BeerDetails'
import Layout from '../../layout/Layout'
import { getAllBeers, getBeerById } from '../../utils/fetchData'

export default function BeerPage({ beerData }) {
  return (
    <Layout>
      <BeerDetails beerData={beerData} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const beers = await getAllBeers()
  const paths = beers.map((beer) => ({
    params: { beerId: beer.id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const id = params.beerId
  const beerData = await getBeerById(id)
  return { props: { beerData: beerData[0] } }
}
