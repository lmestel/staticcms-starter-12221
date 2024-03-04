"use client";

import { ReactElement, useMemo } from "react";
import dynamic from "next/dynamic";
import Script from "next/script";
import { NextPageWithLayout } from "../_app";

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
      <Script
        strategy="beforeInteractive"
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />
      {page}
    </>
  );
};

export default Admin;
