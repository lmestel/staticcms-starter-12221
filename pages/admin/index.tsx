"use client";

import dynamic from "next/dynamic";
import { ReactElement, useMemo } from "react";
import { NextPageWithLayout } from "../_app";
import Script from "next/script";
import Head from "next/head";

const Admin: NextPageWithLayout = () => {
  const CMSPage = useMemo(
    () =>
      dynamic(() => import("@/components/AdminPage"), {
        ssr: false,
      }),
    []
  );

  return useMemo(() => <CMSPage key="admin" />, [CMSPage]);
};

Admin.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity.js"></script>
      </Head>
      <Script>
        {`if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function () {
            window.netlifyIdentity.init({
              APIUrl: 'https://dsa-stackbit-starter-identity.netlify.app/.netlify/identity',
            });
          });
        } else {
          window.netlifyIdentity.init({
            APIUrl: 'https://dsa-stackbit-starter-identity.netlify.app/.netlify/identity',
          });
        }`}
      </Script>
      {page}
    </>
  );
};

export default Admin;
