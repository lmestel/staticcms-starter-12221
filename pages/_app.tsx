import type { NextPage } from "next";
import type { AppProps } from "next/app";
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
// import "@kickstartds/ds-agency/tokens/tokens.css";
import "@kickstartds/ds-agency/global.css";
import "../token/tokens.css";
import { ComponentProps, FC, PropsWithChildren } from "react";
import { DynamicComponent } from "@/components/ComponentMap";

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

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPage;
}) {
  // const { settings, story } = pageProps;
  // const headerProps = settings?.header[0];
  // const footerProps = settings?.footer[0];

  return (
    <DsaProviders>
      {/* <StoryblokProviders> */}
      {/* <Meta
          globalSeo={settings?.seo[0]}
          pageSeo={story?.content.seo[0]}
          fallbackName={story?.name}
        /> */}
      <IconSprite />
      {/* {headerProps && <Header logo={{}} {...unflatten(headerProps)} />} */}
      <SectionProvider>
        <Component {...pageProps} />
      </SectionProvider>
      {/* {footerProps && <Footer logo={{}} {...unflatten(footerProps)} />} */}
      {/* </StoryblokProviders> */}
    </DsaProviders>
  );
}
