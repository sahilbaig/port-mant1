import { ActionsGrid } from "./ActionGrid";
import {
  IconBrandPython,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandHtml5,
  IconBrandCss3,
  IconDatabase,
  IconBrandMongodb,
  IconTerminal2,
  IconServer,
  IconServer2,
  IconBrandDjango,
  IconBrandGithub,
} from "@tabler/icons-react";

const About = () => {
  const backend = [
    { title: "Python", icon: IconBrandPython, color: "violet" },
    { title: "TypeScript", icon: IconBrandTypescript, color: "violet" },
    { title: "NodeJS", icon: IconBrandNodejs, color: "violet" },
    { title: "Flask", icon: IconServer, color: "indigo" },
    { title: "ExpressJS", icon: IconServer2, color: "blue" },
    { title: "Django", icon: IconBrandDjango, color: "green" },
    { title: "SQL", icon: IconDatabase, color: "teal" },
    { title: "MongoDB", icon: IconBrandMongodb, color: "teal" },
  ];

  const frontend = [
    { title: "Next.js", icon: IconBrandNextjs, color: "violet" },
    { title: "HTML", icon: IconBrandHtml5, color: "indigo" },
    { title: "CSS", icon: IconBrandCss3, color: "blue" },
  ];

  const devOps = [
    { title: "Linux", icon: IconBrandCss3, color: "violet" },
    { title: "Bash Scripting", icon: IconTerminal2, color: "indigo" },
    { title: "Github CI/CD", icon: IconBrandGithub, color: "indigo" },
  ];

  return (
    <div>
      <h1 style={{ color: "white" }}> About Me </h1>
      <p style={{ color: "white" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quidem
        alias odit inventore, eos provident repudiandae nihil, atque quo ipsum
        eveniet dolores, ullam tenetur totam accusamus voluptatem magnam
        explicabo iure?
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        <ActionsGrid data={backend} title="Backend" />
        <ActionsGrid data={frontend} title="Frontend" />
        <ActionsGrid data={devOps} title="DevOps" />
      </div>
    </div>
  );
};

export default About;
