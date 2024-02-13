import React, { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import { DynamicComponent } from "./ComponentMap";
import { NextPageWithLayout } from "@/pages/_app";
import { AppProps } from "next/app";
// @ts-expect-error
import IconSprite from "@kickstartds/ds-agency/icon-sprite";
import DsaProviders from "@kickstartds/ds-agency/providers";
import { Section as DsaSection } from "@kickstartds/ds-agency/section";
import { SectionContext } from "@kickstartds/base/lib/section";

import { SettingsProps } from "@kickstartds/ds-agency/index";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";
import Meta from "@/components/Meta";

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

type HeaderProps = React.ComponentProps<typeof Header>;
type FooterProps = React.ComponentProps<typeof Footer>;
type SeoProps = SettingsProps["seo"];

export default function Layout({
  header,
  footer,
  seo,
  children,
}: {
  header?: HeaderProps;
  footer?: FooterProps;
  seo?: SeoProps;
  children: ReactNode;
}) {
  return (
    <DsaProviders>
      <Meta globalSeo={seo} pageSeo={{ title: "Lorem Ipsum" }} />
      <IconSprite />
      {header && <Header {...header} />}
      <SectionProvider>{children}</SectionProvider>
      {footer && <Footer {...footer} />}
    </DsaProviders>
  );
}
