import { AppProps } from 'next/dist/next-server/lib/router/router';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return <Component {...pageProps} />;
}
