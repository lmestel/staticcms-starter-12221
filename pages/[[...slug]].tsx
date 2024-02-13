import { GetStaticPaths, GetStaticProps } from "next";
import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import fg from "fast-glob";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import CmsPage from "@/components/CmsPage";
import Layout from "@/components/Layout";

type PageProps = {
  content: { attributes: DsaPageProps };
};

const Page: NextPageWithLayout<PageProps> = ({ content }) => {
  const { attributes } = content;
  return <CmsPage {...attributes} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
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

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fg.sync("content/pages/*.md").map((pagePath) => {
    return {
      params: {
        slug: [pagePath.split("/").pop()?.split(".").shift() || "home"],
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string[] | undefined)?.join("/") || "home";

  const content = await import(`../content/pages/${slug}.md`);
  const settings = await import("../content/settings.md");
  return { props: { content: content.default, settings: settings.default } };
};
