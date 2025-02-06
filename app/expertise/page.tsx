import { Cpu } from "lucide-react";
import Image from "next/image";

const frontendSkills = [
  {
    name: "React",
    icon: "/logos/react.svg",
  },
  {
    name: "TypeScript",
    icon: "/logos/typescript.svg",
  },
  {
    name: "JavaScript ES6+",
    icon: "/logos/javascript.svg",
  },
  {
    name: "HTML5",
    icon: "/logos/html.svg",
  },
  {
    name: "CSS3",
    icon: "/logos/css.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/logos/tailwind.svg",
  },
  {
    name: "Sass",
    icon: "/logos/sass.svg",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: "/logos/nodejs.svg",
  },
  {
    name: "Express",
    icon: "/logos/express.svg",
  },
  {
    name: "Java",
    icon: "/logos/java.svg",
  },
  {
    name: "Spring Boot",
    icon: "/logos/spring.svg",
  },
  {
    name: "RESTful APIs",
  },
  {
    name: "GraphQL",
    icon: "/logos/graphql.svg",
  },
  {
    name: "MongoDB",
    icon: "/logos/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    icon: "/logos/postgresql.svg",
  },
  {
    name: "MySQL",
    icon: "/logos/mysql.svg",
  },
  {
    name: "SQLite",
    icon: "/logos/sqlite.svg",
  },
  {
    name: "Firebase",
    icon: "/logos/firebase.svg",
  },
];

const mobileSkills = [
  {
    name: "Flutter",
    icon: "/logos/flutter.svg",
  },
  {
    name: "Dart",
    icon: "/logos/dart.svg",
  },
];

const cloudSkills = [
  {
    name: "AWS",
    icon: "/logos/aws.svg",
  },
  {
    name: "Google Cloud",
    icon: "/logos/gcp.svg",
  },
  {
    name: "Supabase",
    icon: "/logos/supabase.svg",
  },
  {
    name: "Firebase",
    icon: "/logos/firebase.svg",
  },
];

const otherSkills = [
  {
    name: "Git",
    icon: "/logos/git.svg",
  },
  {
    name: "Docker",
    icon: "/logos/docker.svg",
  },
  {
    name: "Jest",
    icon: "/logos/jest.svg",
  },
  {
    name: "Cypress",
    icon: "/logos/cypress.svg",
  },
  {
    name: "GitHub Actions",
    icon: "/logos/github.svg",
  },
  {
    name: "Jira",
    icon: "/logos/jira.svg",
  },
  {
    name: "Confluence",
    icon: "/logos/confluence.svg",
  },
  {
    name: "Slack",
    icon: "/logos/slack.svg",
  },
  {
    name: "Stripe",
    icon: "/logos/stripe.svg",
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-white">Expertise</h2>
      <div className="h-[3px] bg-gradient-to-r from-green-600 to-green-800 w-16 rounded-xl mt-4" />
      <div className="max-w-3xl mt-8">
        <div className="flex items-center gap-3 mb-8">
          <Cpu className="w-6 h-6 text-green-500" />
          <h2 className="text-2xl font-bold text-white">My tech stack</h2>
        </div>

        {/* Frontend Development */}
        <div className="relative border-l border-zinc-800 pl-8 ml-3">
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Frontend Development
              </h3>
              <div className="flex flex-row flex-wrap gap-4 p-4 max-w-full overflow-x-auto whitespace-nowrap">
                {frontendSkills.map(({ name, icon }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 font-semibold text-sm bg-zinc-800 rounded-lg flex items-center gap-2"
                  >
                    {icon ? (
                      <Image
                        src={icon}
                        alt={name}
                        className="w-6 h-6 mr-2"
                        width={24}
                        height={24}
                      />
                    ) : null}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Backend Development */}
        <div className="relative border-l border-zinc-800 pl-8 ml-3">
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Backend Development
              </h3>
              <div className="flex flex-row flex-wrap gap-4 p-4 max-w-full overflow-x-auto whitespace-nowrap">
                {backendSkills.map(({ name, icon }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 font-semibold text-sm bg-zinc-800 rounded-lg flex items-center gap-2"
                  >
                    {icon ? (
                      <Image
                        src={icon}
                        alt={name}
                        className="w-6 h-6 mr-2"
                        width={24}
                        height={24}
                      />
                    ) : null}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Development */}
        <div className="relative border-l border-zinc-800 pl-8 ml-3">
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Mobile Development
              </h3>
              <div className="flex flex-row flex-wrap gap-4 p-4 max-w-full overflow-x-auto whitespace-nowrap">
                {mobileSkills.map(({ name, icon }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 font-semibold text-sm bg-zinc-800 rounded-lg flex items-center gap-2"
                  >
                    {icon ? (
                      <Image
                        src={icon}
                        alt={name}
                        className="w-6 h-6 mr-2"
                        width={24}
                        height={24}
                      />
                    ) : null}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Cloud skills */}
        <div className="relative border-l border-zinc-800 pl-8 ml-3">
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Cloud Development
              </h3>
              <div className="flex flex-row flex-wrap gap-4 p-4 max-w-full overflow-x-auto whitespace-nowrap">
                {cloudSkills.map(({ name, icon }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 font-semibold text-sm bg-zinc-800 rounded-lg flex items-center gap-2"
                  >
                    {icon ? (
                      <Image
                        src={icon}
                        alt={name}
                        className="w-6 h-6 mr-2"
                        width={24}
                        height={24}
                      />
                    ) : null}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Other skills */}
        <div className="relative border-l border-zinc-800 pl-8 ml-3">
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">Other Skills</h3>
              <div className="flex flex-row flex-wrap gap-4 p-4 max-w-full overflow-x-auto whitespace-nowrap">
                {otherSkills.map(({ name, icon }, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 font-semibold text-sm bg-zinc-800 rounded-lg flex items-center gap-2"
                  >
                    {icon ? (
                      <Image
                        src={icon}
                        alt={name}
                        className="w-6 h-6 mr-2"
                        width={24}
                        height={24}
                      />
                    ) : null}
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
