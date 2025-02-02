import { Button } from "@mantine/core";
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
    <div
      style={{
        color: "white",
        textAlign: "center",
        padding: "40px 10px 10px", // Increased top padding
        marginTop: "-30px", // Moves everything higher
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>
        Hi There{" "}
        <span
          style={{
            display: "inline-block",
            animation: "wave 1.5s infinite",
          }}
        >
          👋
        </span>
      </h1>

      <p
        style={{
          maxWidth: "600px",
          margin: "auto",
          lineHeight: "1.5",
          marginBottom: "15px",
        }}
      >
        I'm Sahil Baig, a Software Developer with expertise in Next.js,
        React.js, and Python. I'm passionate about building efficient and
        user-friendly applications, optimizing performance, and automating
        workflows. Always eager to learn and tackle new challenges!
      </p>

      <Button style={{ marginBottom: "15px" }}>Download CV</Button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "10px", // Reduced top margin to push up
        }}
      >
        <ActionsGrid data={backend} title="Backend" />
        <ActionsGrid data={frontend} title="Frontend" />
        <ActionsGrid data={devOps} title="DevOps" />
      </div>

      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            20% { transform: rotate(20deg); }
            40% { transform: rotate(0deg); }
            60% { transform: rotate(20deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>
    </div>
  );
};

export default About;
