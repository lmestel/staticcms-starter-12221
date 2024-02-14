import { GetStaticPaths, GetStaticProps } from "next";
import { BlogPostProps as DsaBlogPostProps } from "@kickstartds/ds-agency/index";
import fg from "fast-glob";
import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import Layout from "@/components/Layout";
import CmsBlogPost from "@/components/CmsBlogPost";

type BlogPostProps = {
  content: { attributes: DsaBlogPostProps };
};

const BlogPost: NextPageWithLayout<BlogPostProps> = ({ content }) => {
  const { attributes } = content;
  return <CmsBlogPost {...attributes} />;
};

BlogPost.getLayout = function getLayout(page: ReactElement) {
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

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fg.sync("content/blog-posts/*.md").map((postPath) => {
    const slug = postPath.split("/").pop()?.split(".").shift();
    if (!slug) throw new Error("Missing slug for blog post");
    return {
      params: {
        slug: `blog/${slug}`,
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params?.slug as string | undefined)?.split("/").pop();
  if (!slug) throw new Error("Missing slug for blog post");
  const content = await import(`../../content/blog-posts/${slug}.md`);
  const settings = await import("../../content/settings.md");
  return { props: { content: content.default, settings: settings.default } };
};
