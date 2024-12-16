import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/lib/types";

export default function ProjectCard({ data }: ProjectCardProps) {
  return (
    <Link
      key={data.key}
      href={data.link}
    >
      <Image src={data.image} width={1000} height={500} alt={data.alt} />
    </Link>
  );
}
