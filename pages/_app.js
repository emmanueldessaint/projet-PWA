import '../styles/globals.css';
import { Poppins } from '@next/font/google';
import localFont from '@next/font/local';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  style: ['normal']
})

const myFont = localFont({ src: '../public/fonts/enchanted_land-webfont.woff' })

function MyApp({ Component, pageProps }) {
  return (
    // <main>
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
