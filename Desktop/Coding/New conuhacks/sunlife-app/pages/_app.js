import '../styles/globals.css'
import Header from '../components/header.js'
//import styles from '../styles/buttons.module.css'

import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )


}

export default MyApp