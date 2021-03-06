import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";

import TogglePropsTable from "./api.jsx";

import defaultToggle from "././examples/default";
import toggleWithIcons from "././examples/toggleWithIcons";
import toggleDarkTheme from "././examples/toggleDarkTheme";
import outlinedToggle from "././examples/outlinedToggle";

function Dropdown() {
  return (
    <ComponentDoc>
      <ComponentHeader
        title="Toggle"
        status="ready"
      ></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <TogglePropsTable />
              </Section>
            )
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Default Toggle"
                  example={defaultToggle}
                ></Example>
                <Example
                  title="Toggle with Icons"
                  example={toggleWithIcons}
                ></Example>
                <Example
                  title="Outlined Toggle"
                  example={outlinedToggle}
                ></Example>
                <Example
                  title="Dark theme Toggle"
                  example={toggleDarkTheme}
                ></Example>
              </Section>
            )
          }
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Dropdown;
