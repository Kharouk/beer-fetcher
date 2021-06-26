import Image from 'next/image'
import Link from 'next/link'

function BeerItem({ beer }) {
  const { name, tagline, image_url } = beer
  return (
    <li>
      <p>{name}</p>
      <p>{tagline}</p>
      <Image
        src={image_url}
        alt={name}
        height={200}
        width={100}
        placeholder="blur"
      />
      <Link href={`/beers/${beer.id}`}>Have a gander</Link>
    </li>
  )
}

export default function BeerList({ beers }) {
  console.log(beers)
  return (
    <ul>
      {beers.map((beer) => (
        <BeerItem key={beer.id} beer={beer} />
      ))}
    </ul>
  )
}
