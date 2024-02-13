import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import { DynamicComponent } from "./ComponentMap";

const CmsPage = (props: DsaPageProps) => {
  return (
    <main>
      {props.section?.map((section, index) => (
        <DynamicComponent key={`section-${index}`} {...section} />
      ))}
    </main>
  );
};

export default CmsPage;
