import Footer from '../components/footer'
import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='container mx-auto '>
        <Component {...pageProps} />
      </div>
      <Footer />
      <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>

    </>
  )
}

export default MyApp
