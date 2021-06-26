import Image from 'next/image'
import { getAllBeers, getBeerById } from '../../utils/fetchData'

export default function BeerPage({ beerData }) {
  const {
    name,
    description,
    abv,
    image_url: imageUrl,
    food_pairing: foodPairing,
  } = beerData
  return (
    <article>
      <Image src={imageUrl} height={500} width={200}></Image>
      <h2>{name}</h2>
      <section>
        <p>
          <strong>ABV:</strong> {abv}%
        </p>
        <p>{description}</p>
      </section>
      <section>
        <h3>Why not try with:</h3>
        <ul>
          {foodPairing.map((food) => (
            <li>{food}</li>
          ))}
        </ul>
      </section>
    </article>
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
