import CMS from "@staticcms/core";
import { useEffect } from "react";
import "@staticcms/core/dist/main.css";

import IconSprite from "@kickstartds/ds-agency/icon-sprite";
import DsaProviders from "@kickstartds/ds-agency/providers";
import { Section as DsaSection } from "@kickstartds/ds-agency/section";
import { SectionContext } from "@kickstartds/base/lib/section";

import type { TemplatePreviewProps } from "@staticcms/core";
import { PageProps as DsaPageProps } from "@kickstartds/ds-agency/index";
import type { ComponentProps, FC, PropsWithChildren } from "react";
import { DynamicComponent } from "./ComponentMap";

import "lazysizes/plugins/attrchange/ls.attrchange";

import palette from "@kickstartds/ds-agency/global.client.js";
// import "@kickstartds/ds-agency/tokens/tokens.css";
import "@kickstartds/ds-agency/global.css";
import "@kickstartds/ds-agency/tokens/tokens.css";

if (typeof window !== "undefined") {
  console.log(palette);
}

const Section: React.FC<PropsWithChildren<any>> = (
  props: ComponentProps<typeof DsaSection>
) => {
  const { components, ...rest } = props;
  return (
    <DsaSection {...rest}>
      {components?.map((component: any, index: number) => (
        <DynamicComponent key={index} {...component} />
      ))}
    </DsaSection>
  );
};

const SectionProvider: FC<PropsWithChildren<any>> = (props) => {
  return <SectionContext.Provider value={Section} {...props} />;
};

const PagePreview: FC<TemplatePreviewProps<DsaPageProps>> = ({ entry }) => {
  return (
    <>
      <DsaProviders>
        <IconSprite />
        <SectionProvider>
          <main>
            {entry.data?.section?.map((section) => (
              <DynamicComponent {...section} />
            ))}
          </main>
        </SectionProvider>
      </DsaProviders>
    </>
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
