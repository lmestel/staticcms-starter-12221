"use client";

import dynamic from "next/dynamic";
import { FC, ReactElement, useMemo } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import Script from "next/script";

const Admin: NextPageWithLayout = () => {
  const CMSPage = useMemo(
    () =>
      dynamic(() => import("@/components/CmsPage"), {
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
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        async
      />
      {page}
    </>
  );
};

export default Admin;
