import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackLink, PageHeader } from "@/components/ui/chrome";
import { allProjects, getProject } from "@/lib/utils";

export function generateStaticParams() {
  return allProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.desc };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="page">
      <Link href="/projects/" className="back-link">
        back to projects
      </Link>

      <PageHeader label={`/projects/${project.slug}`} title={project.name} desc={project.desc} />

      {project.href && (
        <p className="build-actions">
          <a href={project.href} className="btn-github" target="_blank" rel="noopener noreferrer">
            github →
          </a>
        </p>
      )}

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
    </main>
  );
}
