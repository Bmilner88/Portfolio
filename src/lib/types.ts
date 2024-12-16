export interface ProjectCard {
  key: number;
  image: string;
  alt: string;
  name: string;
  link: string;
  desc: string;
}

export type ProjectCardProps = {
  data: ProjectCard;
};
