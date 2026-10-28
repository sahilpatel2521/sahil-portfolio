import { WorkExperienceItem, EducationItem } from "@/types/experience";

export const workExperience: WorkExperienceItem[] = [
  {
    company: "WeHear Innovations Pvt. Ltd.",
    role: "Senior Android Engineer",
    period: "Jan 2022 – Present",
    location: "Ahmedabad, Gujarat, India",
    summary:
      "Leading Android architecture across smart hearing aids, multilingual translation systems, and medical diagnostics. Modernized 3 codebase generations to Jetpack Compose, co-designed embedded BLE firmware protocols on-site in China, and invented PairHub™.",
    responsibilities: [
      "Architected real-time translation platform with TranslationCoordinator, Room, Flow, and debounced Coroutines pipelines (~60% faster response times).",
      "Invented PairHub™—multi-device switching engine supporting up to 4 simultaneous wearables without manual Bluetooth re-pairing (~55% lower switch latency).",
      "Co-designed BLE communication protocols across 5+ firmware generations on-site with hardware engineers in China (42+ command types).",
      "Engineered NUConnect hearing-aid platform abstracting 6 hardware families with prioritized GATT command queues (~70% scan/connect latency reduction).",
      "Reverse-engineered digital otoscope protocol and engineered real-time UDP video streaming with packet reassembly and jitter buffering (~99% smooth delivery).",
      "Led cross-functional engineering team delivering WeConverse for BNI Global Convention 2024, Hawaii—streaming live translated audio to 3,000+ attendees across 100+ languages.",
    ],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "BLE GATT",
      "Coroutines & Flow",
      "Hilt",
      "Room",
      "UDP Video Streaming",
      "Baseline Profiles",
      "SavedStateHandle",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institution: "Government Engineering College, Modasa",
    period: "Aug 2019 – May 2022",
    location: "Modasa, Gujarat, India",
    focus: "Data Structures, Systems Architecture, Computer Networks, and Object-Oriented Software Engineering.",
  },
  {
    degree: "Diploma in Information Technology",
    institution: "R.C Technical Institute",
    period: "Aug 2016 – May 2019",
    location: "Ahmedabad, Gujarat, India",
    focus: "Core Java, C/C++, Database Management Systems, and Fundamental Operating System Concepts.",
  },
];
