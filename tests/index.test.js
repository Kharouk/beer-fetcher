import React from 'react'
import { fireEvent, getByText, render, screen } from '@testing-library/react'
import Header from '../layout/Header'
import BeerPage from '../components/BeerDetails'
import '@testing-library/jest-dom'

const stubData = {
  name: 'Best Beer',
  description: "Can't find it anywhere else",
  abv: '99',
  image_url: '/pic.jpg',
  food_pairing: ['sushi', 'sweets'],
}

it('Should render the Beer Page', async () => {
  const { findByText } = render(<BeerPage beerData={stubData} />)
  const badElement = screen.queryByText('Bad Beer')
  const goodElement = await findByText(/Best Beer/i)
  expect(badElement).not.toBeInTheDocument()
  expect(goodElement).toBeInTheDocument()
})
