import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "../../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found — chandlerOS" };
  }

  return {
    title: `${project.title} — chandlerOS`,
    description: project.description,
    openGraph: {
      title: `${project.title} — chandlerOS`,
      description: project.shortDescription || project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — chandlerOS`,
      description: project.shortDescription || project.description,
    },
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
