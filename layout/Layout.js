import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, isHomePage }) {
  return (
    <>
      <Header isHomePage={isHomePage} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
