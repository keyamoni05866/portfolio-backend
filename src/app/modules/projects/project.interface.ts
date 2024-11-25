export type TProject = {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveLink: string;
  clientRepo: string;
  serverRepo: string;
  credentials?: string[];
};
export type TUpdateProject = {
  title?: string;
  description?: string;
  technologies?: string[];
  features?: string[];
  image?: string;
  liveLink?: string;
  clientRepo?: string;
  serverRepo?: string;
  credentials?: string[];
};
