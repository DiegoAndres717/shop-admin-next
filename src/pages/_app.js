import MainLayout from '@layout/mainLayout';
import '../styles/tailwind.css';
import { ProviderAuth } from 'hooks/useAuth';

export default function App({ Component, pageProps }) {
  return (
    <>
    <ProviderAuth>
      <MainLayout>
      <Component {...pageProps} />
      </MainLayout>
    </ProviderAuth>
    </>
  )
}
