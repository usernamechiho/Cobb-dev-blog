import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import Layout from '_Components/Layout'
import Header from '_Components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default MyApp
