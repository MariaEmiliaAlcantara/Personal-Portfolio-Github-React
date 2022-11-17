import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { IRepo } from "../types/IRepo";
import { Folder } from "phosphor-react";

const MyProjects = styled.div`
  height: 5.4rem;
  margin: 2.5rem 2.5rem 1.875rem 0;
  padding: 1.875rem 0 1.875rem 1.875rem;
  background-color: var(--bg-cards);
  border-radius: 20px;

  display: flex;
  align-items: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LinkRepo = styled.a`
  color: inherit;
  text-decoration: none;
`;

const RepoContainer = styled.div`
  width: 27rem;
  height: 11.6rem;
  background-color: var(--bg-cards);
  border-radius: 20px;
  margin: 0 1.875rem 1.875rem 0;
  padding: 1.875rem 0 1.875rem 1.875rem;

  display: flex;
  flex-direction: column;
`;

const RepoTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  gap: 1rem;
`;

const RepoDescription = styled.p`
  height: 4rem;
  font-size: 0.875rem;
  font-weight: 400;
  padding-right: 1rem;
  margin-top: 1.25rem;
`;

const RepoLanguage = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  line-height: 0;
  font-size: 0.875rem;
  margin-top: 1.8rem;
`;

const LanguageColor = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid var(--text-color);
  background-color: ${(props) => props.color};
  visibility: ${(props) => (props.color == null ? "hidden" : "visible")};
`;

export const Main = () => {
  const [dataRepo, setDataRepo] = useState<IRepo[]>();

  useEffect(() => {
    axios
      .get("https://api.github.com/users/MariaEmiliaAlcantara/repos")
      .then((response) =>
        setDataRepo(
          response.data.sort(
            (a: IRepo, b: IRepo) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
        )
      );
    console.log(dataRepo);
  }, []);

  const color = (language: string) => {
    switch (language) {
      case "TypeScript":
        return "#3178C6";
        break;
      case "JavaScript":
        return "#F1E05A";
        break;
      case "Vue":
        return "#000000";
        break;
      case "CSS":
        return "#563D7C";
        break;
      case "HTML":
        return "#E34C26";
        break;
    }
  };

  return (
    <main>
      <MyProjects>Meus projetos</MyProjects>
      <ProjectsContainer>
        {dataRepo &&
          dataRepo.map((repo) => {
            return (
              <LinkRepo href={repo.html_url} target="_blank">
                <RepoContainer>
                  <RepoTitle>
                    <Folder size={20} />
                    <p>{repo.name}</p>
                  </RepoTitle>
                  <RepoDescription>
                    <p>
                      {repo.description || "No description for this project"}
                    </p>
                  </RepoDescription>
                  <RepoLanguage>
                    <LanguageColor color={color(repo.language)} />
                    <p>{repo.language}</p>
                  </RepoLanguage>
                </RepoContainer>
              </LinkRepo>
            );
          })}
      </ProjectsContainer>
    </main>
  );
};
