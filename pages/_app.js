import { AuthProvider } from '../hook/auth'
import AuthStateChanged from '../hook/AuthStateChanged';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <AuthProvider>
    <AuthStateChanged>
  <Component {...pageProps} />
  </AuthStateChanged>
  </AuthProvider>
  );
}

export default MyApp
