import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import Layout from '_Components/Layout'
import Header from '_Components/Header'
import ProgressBar from '_Components/ProgressBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ProgressBar />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
