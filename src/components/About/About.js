import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Attentive and creative developer experienced in building reusable
        components and interface features with the React.js framework.
        Experience in using React.js components, Forms, Events, Route, Redux,
        and MobX. Used React-Router to turn the application into a Single Page
        Application. Added dynamic functionality by creating and dispatching
        Action Creators that deployed Actions. Created and used Reducers that
        received said Actions to modify the Store State Tree. Extensively used
        Git for version control. Used Jira for issue tracking. Excellent
        communication skills, well-organized, goal-oriented.
      </SectionText>
      <SectionDivider />
    </Section>
  );
};

export default About;
