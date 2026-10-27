import { projects, type Project } from "@/content/projects";

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function allProjects(): Project[] {
  return projects;
}
