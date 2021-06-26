import Image from 'next/image'
import { Article } from './beerStyles'

export default function BeerPage({ beerData }) {
  const {
    name,
    description,
    abv,
    image_url: imageUrl,
    food_pairing: foodPairing,
  } = beerData

  return (
    <Article>
      <Image
        src={imageUrl}
        height={300}
        width={100}
        layout="fixed"
        alt={name}
      />
      <section>
        <h2>{name}</h2>
        <p>
          <strong>ABV:</strong> {abv}%
        </p>
        <p>
          <em>{description}</em>
        </p>
        <h3 className="sub-heading">Why not try with:</h3>
        <ul>
          {foodPairing.map((food) => (
            <li key={food}>{food}</li>
          ))}
        </ul>
      </section>
    </Article>
  )
}
