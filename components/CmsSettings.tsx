import { SettingsProps as DsaSettingsProps } from "@kickstartds/ds-agency/index";
import { Header } from "@kickstartds/ds-agency/header";
import { Footer } from "@kickstartds/ds-agency/footer";
import { Cta } from "@kickstartds/ds-agency/cta";
import { Section } from "@kickstartds/ds-agency/section";

const CmsSettings = ({ header, footer, seo }: DsaSettingsProps) => {
  return (
    <main>
      <Header {...header} />
      <Section
        headerSpacing
        style="stagelights"
        content={{
          width: "default",
          mode: "list",
        }}
      >
        <Cta
          headline="We simplify the process of building a **Design System**"
          sub="With your headless experts"
          text={`Experience the speed & scalability unlike anything seen before with our Headless CMS powered websites, web apps & composable architecture.`}
          highlightText
          buttons={[
            {
              label: "What can we do for you?",
              target: "#startit",
              icon: "chevron-down",
            },
            {
              label: "Book a meeting",
              target: "https://app.lemcal.com/@daniel-ley",
              icon: "date",
            },
          ]}
        />
      </Section>
      <Footer {...footer} />
    </main>
  );
};

export default CmsSettings;
