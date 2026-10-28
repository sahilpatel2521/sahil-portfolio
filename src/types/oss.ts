export interface OpenSourceContribution {
  id: string;
  repo: string;
  repoOwner: string;
  repoName: string;
  repoUrl: string;
  prNumber: number;
  prTitle: string;
  prUrl: string;
  status: "merged" | "open" | "closed";
  technologies: string[];
  summary: string;
  impact: string;
}
