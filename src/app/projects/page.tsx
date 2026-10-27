import type { Metadata } from "next";
import Link from "next/link";
import { BackLink, PageHeader } from "@/components/ui/chrome";
import { allProjects } from "@/lib/utils";

export const metadata: Metadata = {
  title: "projects",
  description: "Stuff I build, configure, and tinker with.",
};

export default function ProjectsPage() {
  return (
    <main className="page">
      <BackLink />

      <PageHeader
        label="/projects"
        title="Things I Build"
        desc="Stuff I build, configure, and tinker with. Dotfiles, widget shells, self-hosted services."
      />

      {allProjects().map((project) => (
        <section className="build-project" key={project.slug}>
          <div className="project-head">
            <span className="project-num">{project.num}</span>
            <Link className="project-name" href={`/projects/${project.slug}/`}>
              {project.name}
            </Link>
            {project.wip && <span className="btn-planned">wip</span>}
          </div>
          <p className="project-desc">{project.desc}</p>
          <div className="build-actions">
            <Link href={`/projects/${project.slug}/`} className="btn-github">
              details →
            </Link>
            {project.href && (
              <a href={project.href} className="btn-github" target="_blank" rel="noopener noreferrer">
                github →
              </a>
            )}
          </div>
          {project.details && (
            <div className="project-detail">
              {project.details.map((detail) => (
                <div className="detail-item" key={detail.label}>
                  <p className="detail-label">{detail.label}</p>
                  <p className="detail-desc">{detail.desc}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
