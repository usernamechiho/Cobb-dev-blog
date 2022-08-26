import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import Layout from '_Components/Layout'
import Header from '_Components/Header'
import ProgressBar from '_Components/ProgressBar'
import Loading from '_Components/Loading'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleLoadingStart = (url: any) => url !== router.asPath && setIsLoading(true)
    const handleLoadingComplete = (url: any) => url === router.asPath && setIsLoading(false)

    router.events.on('routeChangeStart', handleLoadingStart)
    router.events.on('routeChangeComplete', handleLoadingComplete)
    router.events.on('routeChangeError', handleLoadingComplete)

    return () => {
      router.events.off('routeChangeStart', handleLoadingStart)
      router.events.off('routeChangeComplete', handleLoadingComplete)
      router.events.off('routeChangeError', handleLoadingComplete)
    }
  })

  return (
    <RecoilRoot>
      {isLoading && <Loading />}
      <ProgressBar />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
