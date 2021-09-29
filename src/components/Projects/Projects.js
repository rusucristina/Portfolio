import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { DiOpensource } from 'react-icons/di';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>
              {title}
            </HeaderThree>
            <Hr />
            <CardInfo>
              {description}
            </CardInfo>
            <div>
              <TitleContent>
                stack
              </TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks >
                <FaLaptopCode/>  &nbsp;  Code 
              </ExternalLinks>
              <ExternalLinks >
                <DiOpensource />  &nbsp; Source
              </ExternalLinks>
            </UtilityList>
          </TitleContent>
        </BlogCard>
      ))}
    </GridContainer>

  </Section>
);

export default Projects;