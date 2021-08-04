import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { PokemonProvider } from '../contexts/PokemonContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>

    <PokemonProvider>
      <Component {...pageProps} />
    </PokemonProvider>
  </div>
  );
}
export default MyApp
