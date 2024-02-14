import { BlogOverviewProps as DsaBlogOverviewProps } from "@kickstartds/ds-agency/index";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import CmsBlogOverview from "@/components/CmsBlogOverview";
import { GetStaticPaths, GetStaticProps } from "next";

type BlogOverviewProps = {
  content: { attributes: DsaBlogOverviewProps };
};

const BlogOverview: NextPageWithLayout<BlogOverviewProps> = ({ content }) => {
  const { attributes } = content;
  return <CmsBlogOverview {...attributes} />;
};

BlogOverview.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      header={page.props.settings.attributes.header}
      footer={page.props.settings.attributes.footer}
      seo={page.props.settings.attributes.seo}
    >
      {page}
    </Layout>
  );
};

export default BlogOverview;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const overview = await import(`../../content/blog-overview.md`);
  const settings = await import("../../content/settings.md");
  return { props: { content: overview.default, settings: settings.default } };
};
