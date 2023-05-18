import React from "react";
import { RestfulProvider } from "restful-react";
import { MovieProvider } from "../providers/movies";

function MyApp({ Component, pageProps }) {
  return (
    <>
       <RestfulProvider base="https://localhost:44311/api/services/app/">
            <MovieProvider>
                <Component {...pageProps} />
            </MovieProvider>
            
       </RestfulProvider>
</>
  );
}
export default MyApp;