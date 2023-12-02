import Layout from 'src/components/layout'
import './globals.scss'

export default function MyApp({ Component, pageProps }: any) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
