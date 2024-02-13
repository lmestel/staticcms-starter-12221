import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import fg from "fast-glob";
import { DynamicComponent } from "@/components/ComponentMap";
import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout";

type PageProps = {
  content: { attributes: DsaPageProps };
};

const Page: NextPageWithLayout<PageProps> = ({ content }) => {
  const { attributes } = content;
  const { section } = attributes;
  return (
    <>
      <main>
        {section?.map((section) => (
          <DynamicComponent {...section} />
        ))}
      </main>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
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
  return { props: { content: content.default } };
};
