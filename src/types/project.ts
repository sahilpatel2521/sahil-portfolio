export interface ProjectMetric {
  value: string;
  label: string;
  qualification: string;
}

export interface ProjectDecision {
  title: string;
  context: string;
  decision: string;
  rationale: string;
}

export type DiagramType = "ble-protocol" | "translation-pipeline" | "udp-jitter" | "audio-processing";

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  systemCode: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  teamScope: string;
  personalScope: string;
  overview: string;
  problem: string;
  architecture: {
    summary: string;
    diagramType: DiagramType;
    diagramTitle: string;
    diagramDescription: string;
    pillars: { title: string; description: string }[];
  };
  keyDecisions: ProjectDecision[];
  reliability: {
    title: string;
    description: string;
  }[];
  metrics: ProjectMetric[];
  techStack: string[];
  publicLinks: {
    label: string;
    url: string;
    type: "play-store" | "github" | "external" | "internal-enterprise";
    verified: boolean;
  }[];
  hardwareNotes?: string;
}
