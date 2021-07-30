import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'next-auth/client';
import Layout from '../components/layout';
function MyApp({ Component, pageProps }) {
    return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
            </Layout>

  )
}

export default MyApp
