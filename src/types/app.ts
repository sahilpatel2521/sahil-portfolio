export interface AppFeature {
  title: string;
  description: string;
}

export interface AppRelease {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  category: string;
  platform: "Google Play" | "GitHub" | "Google Play & GitHub" | "Android Prototype";
  status: "live" | "open-source" | "prototype";
  statusLabel: string;
  iconUrl: string;
  screenshots: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  overview: string;
  problemSolved: string;
  features: AppFeature[];
  architecture: {
    pattern: string;
    details: string;
    highlights: string[];
  };
  technologies: string[];
  externalLinks: {
    label: string;
    url?: string;
    type: "play-store" | "github" | "unavailable";
    verified: boolean;
    note?: string;
  }[];
}
