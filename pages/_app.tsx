import React from "react";
import { RestfulProvider } from "restful-react";

function MyApp({ Component, pageProps }) {
  return (
    <>
       <RestfulProvider base="https://localhost:44311/api/services/app/">
       <Component {...pageProps} />
       </RestfulProvider>
</>
  );
}
export default MyApp;