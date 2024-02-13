import { BlogPostProps as DsaBlogPostProps } from "@kickstartds/ds-agency/index";
import { BlogPost as DsaBlogPost } from "@kickstartds/ds-agency/blog-post";

const CmsBlogPost = ({ cta, seo, aside, head, content }: DsaBlogPostProps) => {
  return (
    <main>
      <DsaBlogPost
        cta={cta}
        seo={seo}
        aside={aside}
        head={head}
        content={content}
      />
    </main>
  );
};
export default CmsBlogPost;
