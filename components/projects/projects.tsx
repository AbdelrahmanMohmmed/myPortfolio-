import {
  ArrowRight,
  BookOpen,
  Bot,
  Gamepad2,
  LineChart,
  ScanLine,
  Workflow,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";
import { DottedPattern } from "@/components/ui/dotted-pattern";

/**
 * Add a screenshot to any project by setting `image` (and `imageAlt`).
 * Projects without an image fall back to a dotted placeholder so the grid
 * stays visually consistent. Remote image hosts must be allowed in
 * next.config.ts under `images.remotePatterns`.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image?: string;
  imageAlt?: string;
  url?: string;
  urlLabel?: string;
};

const PROJECTS: Project[] = [
  {
    id: "complaints",
    icon: Bot,
    iconLabel: "AI Complaints",
    title:
      "An end-to-end platform that collects, classifies, and analyzes 1,000+ customer feedback entries.",
    description:
      "Built the FastAPI backend with JWT authentication and role-based authorization, then trained NLP models for sentiment analysis and complaint categorization at 90% accuracy.",
    meta: "Graduation Project, 2025 – 2026",
    imageRatio: 1024 / 768,
    url: "https://github.com/AbdelrahmanMohmmed/complaints",
    urlLabel: "View code",
  },
  {
    id: "liarbar",
    icon: Gamepad2,
    iconLabel: "LiarBar",
    title:
      "A multiplayer party game website with real-time gameplay and in-browser voice chat.",
    description:
      "Built with React and Node.js, with REST APIs handling gameplay logic, player management, and state synchronization across desktop and mobile.",
    meta: "Full-Stack Developer, 2024 – 2025",
    imageRatio: 1024 / 768,
    url: "https://games.safariyat.live",
    urlLabel: "View live",
  },
  {
    id: "novel",
    icon: BookOpen,
    iconLabel: "Novel",
    title:
      "A complete book management website built in native PHP with a MySQL backend.",
    description:
      "Implemented user authentication and authorization, full CRUD for novels and categories, and separate responsive interfaces for readers and administrators.",
    meta: "Full-Stack Developer, 2024",
    imageRatio: 1024 / 768,
    url: "https://github.com/AbdelrahmanMohmmed/Novel_Website",
    urlLabel: "View code",
  },
  {
    id: "nha-112",
    icon: Workflow,
    iconLabel: "NHA-112",
    title:
      "An Azure ETL pipeline that extracts, cleans, transforms, and loads data from 5+ sources.",
    description:
      "Cut data processing time by 40% and data quality issues by 50% with validation rules that catch missing values, duplicate records, and schema inconsistencies.",
    meta: "Data Engineer, 2024 – 2025",
    imageRatio: 1024 / 768,
    url: "https://github.com/AbdelrahmanMohmmed/NHA-112",
    urlLabel: "View code",
  },
  {
    id: "retail",
    icon: LineChart,
    iconLabel: "Retail Analytics",
    title:
      "Customer segmentation and sales forecasting across 10,000+ retail transactions.",
    description:
      "Used K-Means clustering and RFM analysis to segment customers, then time series models to improve forecast accuracy by 18%, with key metrics visualized in Tableau.",
    meta: "Data Scientist, 2024 – 2025",
    imageRatio: 1024 / 768,
    url: "https://github.com/AbdelrahmanMohmmed/DSToolsProject",
    urlLabel: "View code",
  },
  {
    id: "smart-gate",
    icon: ScanLine,
    iconLabel: "Smart Gate",
    title:
      "A cloud-connected IoT access control system handling 1,000+ vehicle entries per day.",
    description:
      "Paired automated number plate recognition with backend validation, and synced edge devices to Firebase and AWS while reaching 99.9% data consistency.",
    meta: "IoT Developer, 2023 – 2024",
    imageRatio: 1024 / 768,
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;

  const card = (
    <article
      className={`project-card flex flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5 ${
        project.url ? "cursor-pointer" : ""
      }`}
    >
      <header className="flex items-center gap-2.5 px-1 pt-2">
        <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
          <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
        </span>
        <span className="text-sm font-medium tracking-tight text-foreground">
          {project.iconLabel}
        </span>
      </header>

      <div
        className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
        style={{ aspectRatio: project.imageRatio }}
      >
        {project.image ? (
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        ) : (
          <>
            <DottedPattern className="absolute inset-0" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="h-10 w-10 text-foreground/20" aria-hidden="true" />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2.5 px-1 pb-1">
        <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
          {project.title}
        </h3>
        <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
          {project.description}
        </p>
      </div>

      <div className="flex items-center justify-between gap-3 px-1 pb-2">
        <p className="text-[12px] tracking-tight text-foreground/50">
          {project.meta}
        </p>
        {project.url ? (
          <span className="inline-flex items-center gap-1 text-[12px] font-medium tracking-tight text-foreground/70 transition-colors group-hover:text-foreground">
            {project.urlLabel ?? "View project"}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </span>
        ) : null}
      </div>
    </article>
  );

  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      {project.url ? (
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring group block rounded-3xl"
        >
          {card}
        </Link>
      ) : (
        card
      )}
    </FadeIn>
  );
}
