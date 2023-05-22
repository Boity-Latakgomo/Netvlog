import React from "react";
import { RestfulProvider } from "restful-react";
import { MovieProvider } from "../providers/movies";
import { UserProvider } from "./users/providers";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RestfulProvider base="https://localhost:44311/api/services/app/">
        <UserProvider>
          <MovieProvider>
            <Component {...pageProps} />
          </MovieProvider>
        </UserProvider>
      </RestfulProvider>
    </>
  );
}
export default MyApp;
