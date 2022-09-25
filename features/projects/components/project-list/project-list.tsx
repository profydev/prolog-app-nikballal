import styled from "styled-components";
import { ProjectCard } from "../project-card";
import { useProjects } from "../../api/use-projects";
import { breakpoint, space } from "@styles/theme";
import { Badge, BadgeColor, BadgeSize } from "@features/ui";
import AiOutlineArrowRight from "react-icons/fa";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const Reload = styled.a`
  display: none;
  color: #b42318;
  padding: 15px 32px;
  @media (min-width: ${breakpoint("desktop")}) {
    display: flex;
  }
`;

const Icon = styled.img`
  transform: rotate(180deg);
  fill: #b42318;
`;

export function ProjectList() {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    console.error(error);
    return (
      <Badge color={BadgeColor.error} size={BadgeSize.lg}>
        {" "}
        There was a problem while loading the project data.{" "}
        <Reload href="http://localhost:3000/projects" className="btn">
          {" "}
          Try Again{" "}
        </Reload>
      </Badge>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
