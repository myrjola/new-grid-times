import React from 'react';
import styled, {css} from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import {QUERIES} from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList $isOpinion>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories'
      'advertisement advertisement'
      'opinion-stories opinion-stories';
    
    & > *:nth-child(1) {
      border-right: 1px solid var(--color-gray-300);
      padding-right: 24px;
      margin-right: -24px;
    }
  }
  
  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-areas:
      'main-story secondary-stories opinion-stories'
      'main-story advertisement advertisement';

    & > *:nth-child(2) {
      border-right: 1px solid var(--color-gray-300);
      padding-right: 24px;
      margin-right: -24px;
    }
    
    & > *:nth-child(4) {
      border-top: 1px solid var(--color-gray-300);
      padding-top: 24px;
      margin-top: -24px;
    }
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const opinionListCss = css`
  @media ${QUERIES.tabletOnly} {
    flex-direction: row;
    gap: 32px;

    & > * {
      flex: 1;
    }

    & > *:not(:last-child) {
      border-bottom: unset;
      padding-bottom: unset;
    }

    & > *:not(:first-child) {
      padding-top: unset;
    }
  }
`

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
    padding-bottom: 20px;
  }

  & > *:not(:first-child) {
    padding-top: 20px;
  }
  
  ${p => p.$isOpinion && opinionListCss}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
`;

export default MainStoryGrid;
