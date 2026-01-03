import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  GraduationCapIcon,
  TrophyIcon,
  GlobeIcon,
  FileTextIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import {
  PROFILE,
  SKILLS,
  HIGHLIGHTED_SKILLS,
  FEATURED_PROJECT,
  OTHER_PROJECTS,
  WORK_EXPERIENCE,
  EDUCATION,
  OPEN_SOURCE,
} from "@/lib/data";

export default function Page() {
  return (
    <section className="space-y-12 sm:space-y-14">
      {/* Header */}
      <header className="space-y-4 sm:space-y-6">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-3 sm:gap-4 items-center">
            <Avatar className="h-14 w-14 sm:h-16 sm:w-16">
              <AvatarImage src={PROFILE.avatar} alt={PROFILE.name} />
              <AvatarFallback>RN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
                {PROFILE.name}
              </h1>
              <p className="text-xs sm:text-base text-muted-foreground">
                {PROFILE.subtitle}
              </p>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubLogoIcon className="h-5 w-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinLogoIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <EnvelopeSimpleIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Status badges */}
        <div className="flex gap-2 flex-wrap items-center">
          <Badge variant="secondary" className="gap-1.5 text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            {PROFILE.availability}
          </Badge>
          <Badge variant="secondary" className="gap-1.5 text-xs sm:text-sm">
            <GlobeIcon className="h-3.5 w-3.5" />
            {PROFILE.location}
          </Badge>
          <a href="/resume.pdf" download>
            <Badge variant="secondary" className="gap-1.5 text-xs sm:text-sm border border-foreground/30 hover:bg-accent transition-colors cursor-pointer">
              <FileTextIcon className="h-3.5 w-3.5" />
              Resume
              <ArrowUpRightIcon className="h-3 w-3" />
            </Badge>
          </a>
        </div>

        {/* Bio */}
        <p className="text-sm sm:text-base leading-relaxed max-w-xl">
          {PROFILE.bio}
        </p>
      </header>

      {/* Skills */}
      <section className="space-y-3 sm:space-y-4" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="text-base sm:text-lg font-semibold">
          Skills
        </h2>
        {/* Mobile: flowing list */}
        <div className="flex gap-2 flex-wrap sm:hidden">
          {[...SKILLS.frontend, ...SKILLS.backend, ...SKILLS.other].map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className={`text-xs ${HIGHLIGHTED_SKILLS.includes(skill) ? "ring-1 ring-primary/50" : ""}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
        {/* Desktop: categorized */}
        <div className="hidden sm:block space-y-3">
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm text-muted-foreground w-20">Frontend</span>
            {SKILLS.frontend.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-xs ${HIGHLIGHTED_SKILLS.includes(skill) ? "ring-1 ring-primary/50" : ""}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm text-muted-foreground w-20">Backend</span>
            {SKILLS.backend.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-xs ${HIGHLIGHTED_SKILLS.includes(skill) ? "ring-1 ring-primary/50" : ""}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-sm text-muted-foreground w-20">Other</span>
            {SKILLS.other.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className={`text-xs ${HIGHLIGHTED_SKILLS.includes(skill) ? "ring-1 ring-primary/50" : ""}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="space-y-4 sm:space-y-6" aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="text-base sm:text-lg font-semibold">
          Experience
        </h2>
        <div className="space-y-5 sm:space-y-6 relative">
          <div className="absolute left-0.75 top-2 bottom-2 w-px bg-border" />
          {WORK_EXPERIENCE.map((work) => (
            <WorkItem key={`${work.company}-${work.years}`} {...work} />
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="space-y-4 sm:space-y-6" aria-labelledby="project-heading">
        <h2 id="project-heading" className="text-base sm:text-lg font-semibold">
          Featured Project
        </h2>
        <Card>
          <CardHeader className="p-4 sm:p-6">
            <div className="flex justify-between items-start gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <a
                  href={FEATURED_PROJECT.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 hover:underline"
                >
                  <Image
                    src={FEATURED_PROJECT.logo}
                    alt={FEATURED_PROJECT.title}
                    width={24}
                    height={24}
                    className="rounded shrink-0"
                  />
                  <CardTitle className="text-base sm:text-lg truncate">
                    {FEATURED_PROJECT.title}
                  </CardTitle>
                  <ArrowUpRightIcon className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
                <CardDescription className="mt-2 text-xs sm:text-sm">
                  {FEATURED_PROJECT.description}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-xs shrink-0">
                {FEATURED_PROJECT.year}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 sm:space-y-4 p-4 pt-0 sm:p-6 sm:pt-0">
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
              {FEATURED_PROJECT.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="flex gap-1.5 sm:gap-2 flex-wrap">
              {FEATURED_PROJECT.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Other Projects (if any) */}
        {OTHER_PROJECTS.length > 0 && (
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-sm sm:text-base font-medium text-muted-foreground">
              Other Projects
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {OTHER_PROJECTS.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Education */}
      <section className="space-y-3 sm:space-y-4" aria-labelledby="education-heading">
        <h2 id="education-heading" className="text-base sm:text-lg font-semibold">
          Education
        </h2>
        <div className="flex gap-3 items-start">
          <GraduationCapIcon className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
          <div>
            <h3 className="text-sm sm:text-base font-medium">
              {EDUCATION.institution}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {EDUCATION.degree} · {EDUCATION.years}
            </p>
          </div>
        </div>
      </section>

      {/* Open Source */}
      {OPEN_SOURCE.length > 0 && (
        <section className="space-y-3 sm:space-y-4" aria-labelledby="opensource-heading">
          <h2 id="opensource-heading" className="text-base sm:text-lg font-semibold">
            Open Source
          </h2>
          <div className="flex gap-2 flex-wrap">
            {OPEN_SOURCE.map((contribution) => (
              <a
                key={contribution.project}
                href={contribution.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Badge variant="secondary" className="gap-1.5 text-xs sm:text-sm hover:bg-accent transition-colors cursor-pointer">
                  <GithubLogoIcon className="h-3.5 w-3.5" />
                  {contribution.project}
                  <ArrowUpRightIcon className="h-3 w-3" />
                </Badge>
              </a>
            ))}
          </div>
        </section>
      )}
    </section>
  );
}

function WorkItem({
  company,
  title,
  years,
  description,
  current,
  award,
}: {
  company: string;
  title: string;
  years: string;
  description: string;
  current?: boolean;
  award?: { title: string; link: string };
}) {
  return (
    <article className="relative pl-5 sm:pl-6">
      <div
        className={`absolute left-0 top-1.5 h-2 w-2 rounded-full ${current ? "bg-green-500" : "bg-muted-foreground/50"}`}
      />
      <div className="space-y-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-4">
          <h3 className="text-sm sm:text-base font-medium">{company}</h3>
          <span className="text-xs sm:text-sm text-muted-foreground tabular-nums">
            {years}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">{title}</p>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
          {description}
        </p>
        {award && (
          <a
            href={award.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pt-1 text-amber-500 hover:text-amber-400 transition-colors"
          >
            <TrophyIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span className="text-xs sm:text-sm">{award.title}</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectCard({
  title,
  description,
  link,
  tags,
  year,
}: {
  title: string;
  description: string;
  link: string;
  tags: string[];
  year: string;
}) {
  return (
    <article className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 py-2">
      <div className="flex-1 min-w-0">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 hover:underline text-sm sm:text-base font-medium"
        >
          {title}
          <ArrowUpRightIcon className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">
          {description}
        </p>
        <div className="flex gap-1.5 flex-wrap mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground tabular-nums">
        {year}
      </span>
    </article>
  );
}
