import { ReactElement, useEffect, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Script from "next/script";
import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import fg from "fast-glob";
import { NextPageWithLayout } from "./_app";
import CmsPage from "@/components/CmsPage";
import Layout from "@/components/Layout";

type PageProps = {
  content: { attributes: DsaPageProps };
};

const Page: NextPageWithLayout<PageProps> = ({ content }) => {
  const router = useRouter();
  const [isInviteConfirmation, setIsInviteConfirmation] = useState(false);

  useEffect(() => {
    if (router.asPath.startsWith("/#invite_token=")) {
      setIsInviteConfirmation(true);
    }
  }, []);

  const { attributes } = content;
  return (
    <>
      {isInviteConfirmation && (
        <Script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      )}
      <CmsPage {...attributes} />
    </>
  );
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
    const slug = pagePath.split("/").pop()?.split(".").shift();
    if (!slug) throw new Error("Missing slug for page");
    return {
      params: {
        slug: slug === "home" ? [] : [slug],
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string[] | undefined)?.join("/") || "home";
  if (!slug) throw new Error("Missing slug for page");
  const content = await import(`../content/pages/${slug}.md`);
  const settings = await import("../content/settings.md");
  return { props: { content: content.default, settings: settings.default } };
};
