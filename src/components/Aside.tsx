import styled from "styled-components";
import {
  Briefcase,
  GithubLogo,
  LinkedinLogo,
  MapPin,
  Envelope,
  TagChevron,
} from "phosphor-react";

const ProfileContainer = styled.div`
  height: 18.25rem;
  background-color: var(--bg-cards);
  border-radius: 20px;
  margin: 2.5rem 0 1.875rem 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  border: 2px solid var(--green);
`;

const ProfileName = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1.875rem;
`;

const ProfileRole = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  margin-top: 0.625rem;
`;

const DetailsContainer = styled.div`
  height: 14rem;
  background-color: var(--bg-cards);
  border-radius: 20px;
  margin: 0 0 1.875rem 2.5rem;
  padding-left: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.75rem;
  font-weight: 400;
`;

const TechnologiesContainer = styled.div`
  height: 13rem;
  background-color: var(--bg-cards);
  border-radius: 20px;
  margin: 0 0 1.875rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

const TechnologiesTitle = styled.h3`
  font-size: 1.25rem;
  margin: 2rem 0 1.25rem 1.25rem;
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin: 0 0 1.6rem 1.6rem;
`;

const TechnologyPill = styled.div`
  background-color: var(--bg-techs);
  height: 1.5rem;
  width: 4.5rem;
  border-radius: 30px;
  font-size: 0.625rem;
  font-weight: bold;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Aside = () => {
  return (
    <aside>
      <ProfileContainer>
        <ProfileImage src="https://github.com/MariaEmiliaAlcantara.png" />
        <ProfileName>Maria Emilia Alcantara</ProfileName>
        <ProfileRole>Front-end Developer</ProfileRole>
      </ProfileContainer>
      <DetailsContainer>
        <IconAndText>
          <MapPin size={24} />
          <p>Brasil</p>
        </IconAndText>
        <IconAndText>
          <Briefcase size={24} />
          <p>Freelancer</p>
        </IconAndText>
        <IconAndText>
          <GithubLogo size={24} />
          <p>MariaEmiliaAlcantara</p>
        </IconAndText>
        <IconAndText>
          <LinkedinLogo size={24} />
          <p>maria-emilia-alcantara</p>
        </IconAndText>
        <IconAndText>
          <Envelope size={24} />
          <p>mariaemilia.dev@gmail.com</p>
        </IconAndText>
      </DetailsContainer>
      <TechnologiesContainer>
        <TechnologiesTitle>Tecnologias</TechnologiesTitle>
        <Technologies>
          <TechnologyPill>HTML</TechnologyPill>
          <TechnologyPill>CSS</TechnologyPill>
          <TechnologyPill>JAVASCRIPT</TechnologyPill>
          <TechnologyPill>VUE</TechnologyPill>
          <TechnologyPill>REACT</TechnologyPill>
          <TechnologyPill>NEXT</TechnologyPill>
          <TechnologyPill>GIT</TechnologyPill>
          <TechnologyPill>GITHUB</TechnologyPill>
          <TechnologyPill>NODEJS</TechnologyPill>
        </Technologies>
      </TechnologiesContainer>
    </aside>
  );
};
