"use client";

import dynamic from "next/dynamic";
import { FC, useMemo } from "react";

const Admin: FC = () => {
  const CMSPage = useMemo(
    () =>
      dynamic(() => import("@/components/CmsPage"), {
        ssr: false,
      }),
    []
  );

  return useMemo(() => <CMSPage key="admin" />, [CMSPage]);
};

export default Admin;
