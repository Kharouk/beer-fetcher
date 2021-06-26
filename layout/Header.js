import Button from '../components/Button'
import { Title, Emphasis } from './headerStyles'

export default function Header({ isHomePage }) {
  return (
    <header>
      <Title>
        Get ready to drink <Emphasis>oodles</Emphasis> of beer.
      </Title>
      {!isHomePage && (
        <div style={{ textAlign: 'center' }}>
          <Button link="/">Go back!</Button>
        </div>
      )}
    </header>
  )
}
