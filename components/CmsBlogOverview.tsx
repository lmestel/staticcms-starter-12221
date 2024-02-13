import { BlogOverviewProps as DsaBlogOverviewProps } from "@kickstartds/ds-agency/index";
import { BlogOverview as DsaBlogOverview } from "@kickstartds/ds-agency/blog-overview";
import {
  TagLabelContext,
  TagLabelContextDefault,
} from "@kickstartds/base/lib/tag-label";

const Tag = ({ label, ...props }: any) => (
  <TagLabelContextDefault label={label?.entry} {...props} />
);

const CmsBlogOverview = ({ latest, seo, more }: DsaBlogOverviewProps) => {
  return (
    <main>
      {/* @ts-expect-error */}
      <TagLabelContext.Provider value={Tag}>
        <DsaBlogOverview latest={latest} seo={seo} more={more} />
      </TagLabelContext.Provider>
    </main>
  );
};
export default CmsBlogOverview;
