import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { Project } from "./page";

interface ProjectDetailModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-zinc-900 border-zinc-800 p-0">
        <div className="relative h-[300px] w-full">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <DialogTitle className="text-2xl font-bold text-white mb-2">
            {project.title}
          </DialogTitle>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="grid gap-6">
            <section>
              <h3 className="text-lg font-semibold text-white mb-2">
                Overview
              </h3>
              <p className="text-zinc-400">{project.description}</p>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-zinc-400 space-y-1">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-white mb-2">
                Technical Details
              </h3>
              <div className="prose prose-invert max-w-none text-zinc-400">
                <p>{project.technicalDetails}</p>
              </div>
            </section>

            <div className="flex gap-4 pt-4 border-t border-zinc-800">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Source Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
