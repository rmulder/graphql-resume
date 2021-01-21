import { ApolloProvider } from "@apollo/client";
import { useApollo } from "cms/lib/apolloClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const client = useApollo();
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
