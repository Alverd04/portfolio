"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { ProjectDetailModal } from "./project-detail-modal";

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  features?: string[];
  technicalDetails?: string;
}

const projects: Project[] = [
  {
    title: "Edin",
    description:
      "An AI-powered recruitment tool that analyzes CVs and identifies the best candidates based on a given prompt. Designed to streamline the hiring process with accurate and unbiased recommendations.",
    image: "/projects/edin.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "AI"],
    githubUrl: "https://github.com/your-repo",
    liveUrl: "https://edin-hr-nextjs-627830091010.europe-west1.run.app/",
    features: [
      "AI-driven CV analysis",
      "Candidate ranking based on job requirements",
      "Fast and efficient resume parsing",
      "User-friendly dashboard for recruiters",
      "Seamless integration with existing hiring workflows",
    ],
    technicalDetails:
      "Built using Next.js 14 with TypeScript for scalability and type safety. Tailwind CSS ensures a sleek and responsive UI. The backend leverages Supabase for database management and authentication, while AI models process and rank CVs efficiently. The app is deployed on Vercel with CI/CD automation for seamless updates.",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold text-white">Projects</h2>
      <div className="h-[3px] bg-gradient-to-r from-green-600 to-green-800 w-16 rounded-xl mt-4" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-zinc-900/50 rounded-lg overflow-hidden border border-zinc-800 hover:border-green-600/50 transition-colors cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-green-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="h-5 w-5" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-green-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
