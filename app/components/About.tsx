import { Button } from "@mantine/core";
import { ActionsGrid } from "./ActionGrid";
import {
  IconBrandPython,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandMongodb,
  IconBrandDjango,
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandReact,
  IconFlask,
  IconBrandUbuntu,
} from "@tabler/icons-react";

const About = () => {
  const languages = [
    { title: "Python", icon: IconBrandPython, color: "violet" },
    { title: "TypeScript", icon: IconBrandTypescript, color: "indigo" },
    { title: "JavaScript", icon: IconBrandJavascript, color: "blue" },
    { title: "SQL", icon: IconBrandMysql, color: "violet" },
    { title: "HTML", icon: IconBrandHtml5, color: "indigo" },
  ];

  const frameworks = [
    { title: "NextJS", icon: IconBrandNextjs, color: "violet" },
    { title: "ReactJS", icon: IconBrandReact, color: "indigo" },
    { title: "ExpressJS", icon: IconBrandJavascript, color: "blue" },
    { title: "NodeJS", icon: IconBrandNodejs, color: "violet" },
    { title: "Flask", icon: IconFlask, color: "indigo" },
    { title: "Django", icon: IconBrandDjango, color: "blue" },
  ];

  const tools = [
    { title: "Linux", icon: IconBrandUbuntu, color: "violet" },
    { title: "Github CI/CD", icon: IconBrandGithub, color: "indigo" },
    { title: "MongoDB", icon: IconBrandMongodb, color: "blue" },
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

      <Button
        style={{ marginBottom: "15px" }}
        component="a"
        href="https://drive.google.com/file/d/1S3hkdDsmCZIS5QhYCw140sQ2__Q_8iXv/view?usp=sharing "
        download="cv"
      >
        Download CV
      </Button>

      {/* https://drive.google.com/file/d/1S3hkdDsmCZIS5QhYCw140sQ2__Q_8iXv/view?usp=sharing */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "10px", // Reduced top margin to push up
        }}
      >
        <ActionsGrid data={languages} title="Languages" />
        <ActionsGrid data={frameworks} title="Frameworks" />
        <ActionsGrid data={tools} title="Tools" />
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
