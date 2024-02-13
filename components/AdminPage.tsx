import CMS from "@staticcms/core";
import { useEffect } from "react";
import "@staticcms/core/dist/main.css";

import type { TemplatePreviewProps } from "@staticcms/core";
import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import { BlogOverviewProps as DsaBlogOverviewProps } from "@kickstartds/ds-agency/index";
import { BlogPostProps as DsaBlogPostProps } from "@kickstartds/ds-agency/index";
import { SettingsProps as DsaSettingsProps } from "@kickstartds/ds-agency/index";
import type { FC } from "react";
import Layout from "./Layout";
import CmsPage from "./CmsPage";
import CmsBlogPost from "./CmsBlogPost";
import CmsBlogOverview from "./CmsBlogOverview";
import CmsSettings from "./CmsSettings";

const PagePreview: FC<TemplatePreviewProps<DsaPageProps>> = ({ entry }) => {
  return (
    <Layout>
      <CmsPage
        seo={entry.data?.seo || { title: "Lorem Ipsum" }}
        {...entry.data}
      />
    </Layout>
  );
};

const BlogOverviewPreview: FC<TemplatePreviewProps<DsaBlogOverviewProps>> = ({
  entry,
}) => {
  return (
    <Layout>
      <CmsBlogOverview
        seo={entry.data?.seo || { title: "Lorem Ipsum" }}
        {...entry.data}
      />
    </Layout>
  );
};

const BlogPostPreview: FC<TemplatePreviewProps<DsaBlogPostProps>> = ({
  entry,
}) => {
  return (
    <Layout>
      <CmsBlogPost
        seo={entry.data?.seo || { title: "Lorem Ipsum" }}
        {...entry.data}
      />
    </Layout>
  );
};

const SettingsPreview: FC<TemplatePreviewProps<DsaSettingsProps>> = ({
  entry,
}) => {
  return (
    <Layout>
      <CmsSettings
        header={entry.data?.header || { logo: { src: "" } }}
        footer={entry.data?.footer || { logo: { src: "" } }}
        seo={entry.data?.seo || { title: "Lorem Ipsum" }}
        {...entry.data}
      />
    </Layout>
  );
};

const CMSPage: FC = () => {
  useEffect(() => {
    CMS.registerPreviewTemplate("pages", PagePreview);
    CMS.registerPreviewTemplate("blog-posts", BlogPostPreview);
    CMS.registerPreviewTemplate("blog-overview", BlogOverviewPreview);
    CMS.registerPreviewTemplate("settings", SettingsPreview);
    CMS.registerPreviewTemplate("cta", SettingsPreview);

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
