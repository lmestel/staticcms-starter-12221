import React, { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { DynamicComponent } from "./ComponentMap";
import { NextPageWithLayout } from "@/pages/_app";
import { AppProps } from "next/app";
// @ts-expect-error
import IconSprite from "@kickstartds/ds-agency/icon-sprite";
import DsaProviders from "@kickstartds/ds-agency/providers";
import { Section as DsaSection } from "@kickstartds/ds-agency/section";
import { SectionContext } from "@kickstartds/base/lib/section";

// import { Header } from "@kickstartds/ds-agency/header";
// import { Footer } from "@kickstartds/ds-agency/footer";
// import Meta from "@/components/Meta";

import "lazysizes/plugins/attrchange/ls.attrchange";

import palette from "@kickstartds/ds-agency/global.client.js";
import "@kickstartds/ds-agency/global.css";
import "@kickstartds/ds-agency/tokens/tokens.css";

if (typeof window !== "undefined") {
  console.log(palette);
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

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

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DsaProviders>
      {/* <Meta
        globalSeo={settings?.seo[0]}
        pageSeo={story?.content.seo[0]}
        fallbackName={story?.name}
      /> */}
      <IconSprite />
      {/* {headerProps && <Header logo={{}} {...unflatten(headerProps)} />} */}
      <SectionProvider>{children}</SectionProvider>
      {/* {footerProps && <Footer logo={{}} {...unflatten(footerProps)} />} */}
    </DsaProviders>
  );
}
