import React from 'react';
import { DiReact, DiBootstrap, DiCss3, DiHtml5 } from 'react-icons/di';
import {FaNodeJs} from "react-icons/fa"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider /><br/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br /> React.js </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <FaNodeJs size="3rem" />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br /> Node.js and DataBases </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <div>  <DiHtml5 size="3rem"/> <DiCss3 size="3rem"/>   <DiBootstrap size="3rem" /></div>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with <br /> tools like Bootstrap </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
