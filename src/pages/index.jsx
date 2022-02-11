import Link from 'next/link'
import { getCache, storeCache } from '../utils/cache'

const Home = ({ cache }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>

    <section>{cache && <pre>{JSON.stringify(cache)}</pre>}</section>
  </>
)

export const getStaticProps = async () => {
  storeCache()

  const cache = getCache()

  return {
    props: {
      cache
    },
    revalidate: 60
  }
}

export default Home
