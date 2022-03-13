import type { AppProps } from 'next/app'
import Link from 'next/link'
import { App, NavBar } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  return <App>
    <NavBar>
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/signin">Sign in</Link>
        </li>
        <li>
          <Link href="/signup">Sign up</Link>
        </li>
      </ul>
    </NavBar>
    <Component {...pageProps} />
  </App>
}
export default MyApp
