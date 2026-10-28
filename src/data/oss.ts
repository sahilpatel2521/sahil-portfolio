import { OpenSourceContribution } from "@/types/oss";

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "detekt-9450",
    repo: "detekt / detekt",
    repoOwner: "detekt",
    repoName: "detekt",
    repoUrl: "https://github.com/detekt/detekt",
    prNumber: 9450,
    prTitle: "fix: false positive on private extension functions",
    prUrl: "https://github.com/detekt/detekt/pull/9450",
    status: "merged",
    technologies: ["Kotlin", "Static Analysis", "Compiler AST", "detekt"],
    summary:
      "Investigated and resolved an issue in detekt static code analysis where private extension functions in Kotlin files were incorrectly flagged as unused (false positives).",
    impact:
      "Merged into upstream detekt main branch; improved static analysis accuracy for thousands of production Kotlin repositories worldwide.",
  },
  {
    id: "detekt-9453",
    repo: "detekt / detekt",
    repoOwner: "detekt",
    repoName: "detekt",
    repoUrl: "https://github.com/detekt/detekt",
    prNumber: 9453,
    prTitle: "Target JVM 17 in detekt-rules-ktlint-wrapper",
    prUrl: "https://github.com/detekt/detekt/pull/9453",
    status: "merged",
    technologies: ["Kotlin", "ktlint", "JVM 17", "Gradle Build"],
    summary:
      "Enhanced JVM 17 compatibility within the detekt-rules-ktlint-wrapper module, aligning bytecode target configurations with modern Android and Kotlin toolchains.",
    impact:
      "Merged into upstream detekt; ensured seamless ktlint formatting rule execution on modern Java 17+ CI/CD environments.",
  },
  {
    id: "duckduckgo-8844",
    repo: "duckduckgo / Android",
    repoOwner: "duckduckgo",
    repoName: "Android",
    repoUrl: "https://github.com/duckduckgo/Android",
    prNumber: 8844,
    prTitle: "Add configurable download location via Storage Access Framework",
    prUrl: "https://github.com/duckduckgo/Android/pull/8844",
    status: "open",
    technologies: ["Kotlin", "Android SDK", "Storage Access Framework", "Scoped Storage"],
    summary:
      "Contributed an architectural enhancement enabling users to select custom download directories using Android's modern Storage Access Framework (SAF).",
    impact:
      "Under upstream review; strengthens file-access behavior, external SD card support, and permission handling across privacy-focused Android devices.",
  },
];
