import CMS from "@staticcms/core";
import { useEffect } from "react";
import "@staticcms/core/dist/main.css";

import type { TemplatePreviewProps } from "@staticcms/core";
import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import type { FC } from "react";
import { DynamicComponent } from "./ComponentMap";
import Layout from "./Layout";

const PagePreview: FC<TemplatePreviewProps<DsaPageProps>> = ({ entry }) => {
  return (
    <Layout>
      <main>
        {entry.data?.section?.map((section) => (
          <DynamicComponent {...section} />
        ))}
      </main>
    </Layout>
  );
};

const CMSPage: FC = () => {
  useEffect(() => {
    CMS.registerPreviewTemplate("pages", PagePreview);

    CMS.init();
  }, []);

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          height: 100%;
        }

        #__next {
          display: none;
        }
      `}</style>
    </div>
  );
};

CMSPage.displayName = "CMSPage";

export default CMSPage;
