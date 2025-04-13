import { ProjectProgress } from "@renderer/types/ProjectProgress";
import { OtherProjects } from "@renderer/types/OtherProjects";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrls: string[];
  tags: string[];
  difficulty: number;
  startDate: string;
  endDate: string;
  materials: string[];
  dimensions: string;
  projectProgress: ProjectProgress;
  otherProjects: OtherProjects[];
}
