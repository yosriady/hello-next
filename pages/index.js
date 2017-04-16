import Header from '../components/Header'
import Link from 'next/link'

// Link is a Higher order component that takes a component and returns
// a new component. https://facebook.github.io/react/docs/higher-order-components.html

const Index = () => (
  <div>
    <Header />
    <p>This is the index page</p>
    <Link href='/about'>
      <a style={{ fontSize: 20 }}>About</a>
    </Link>
  </div>
)

export default Index
