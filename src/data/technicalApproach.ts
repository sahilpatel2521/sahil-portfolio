export interface EngineeringStage {
  id: "understand" | "architect" | "engineer" | "measure";
  step: string;
  name: string;
  tagline: string;
  summary: string;
  focusAreas: string[];
  deliverable: string;
  layerKey: "ingress" | "control" | "execution" | "telemetry";
  layerLabel: string;
  relatedCaseStudy?: {
    title: string;
    href: string;
  };
}

export interface ApproachPillar {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const engineeringStages: EngineeringStage[] = [
  {
    id: "understand",
    step: "01",
    name: "Understand",
    tagline: "Constraints, Protocols & Failure Modes",
    summary:
      "Deconstruct hardware specifications, Android OS lifecycle boundaries, and transmission failure points before writing code.",
    focusAreas: [
      "RF & BLE environment profiling: MTU limits, packet loss, RSSI fluctuation",
      "Process death & OS pressure: memory reclamation, orientation state recovery",
      "Firmware co-validation: packet framing, byte alignment, acknowledgment handshakes",
    ],
    deliverable: "Protocol Specification & Hardware State Matrix",
    layerKey: "ingress",
    layerLabel: "01 // HARDWARE_INGRESS",
    relatedCaseStudy: {
      title: "NUConnect BLE Platform",
      href: "/projects/nuconnect",
    },
  },
  {
    id: "architect",
    step: "02",
    name: "Architect",
    tagline: "Deterministic Contracts & State Flow",
    summary:
      "Define immutable state boundaries, serialized hardware queues, and clean domain layers that isolate hardware volatility from the UI.",
    focusAreas: [
      "MVI Unidirectional Data Flow with explicit sealed UI states",
      "Prioritized GATT command queue with thread-safe mutual exclusion",
      "Sliding-window jitter buffers for low-latency UDP audio/video streaming",
    ],
    deliverable: "Deterministic State Machine & Queue Hierarchy",
    layerKey: "control",
    layerLabel: "02 // QUEUE_STATE_CONTROL",
    relatedCaseStudy: {
      title: "WeHear Translation Pipeline",
      href: "/projects/wehearapp",
    },
  },
  {
    id: "engineer",
    step: "03",
    name: "Engineer",
    tagline: "Lifecycle-Aware Kotlin & Compose Execution",
    summary:
      "Implement defensive, high-performance Android code using structured concurrency, zero-memory-leak scopes, and edge ML.",
    focusAreas: [
      "Structured coroutines with explicit cancellation hierarchies and SupervisorJob",
      "Declarative Jetpack Compose UI decoupled from presentation business logic",
      "On-device ML pipelines (TFLite, MediaPipe, ML Kit) with zero cloud egress",
    ],
    deliverable: "Zero-Leak Production Binary & Clean Architecture",
    layerKey: "execution",
    layerLabel: "03 // CONCURRENCY_UI_EXECUTION",
    relatedCaseStudy: {
      title: "Styledrobe On-Device ML",
      href: "/apps/styledrobe",
    },
  },
  {
    id: "measure",
    step: "04",
    name: "Measure",
    tagline: "Empirical Benchmarks & Telemetry Verification",
    summary:
      "Validate performance, latency, and resource constraints against objective benchmarks under real-world device conditions.",
    focusAreas: [
      "Macrobenchmark & Baseline Profiles for ~35% cold-start latency reduction",
      "LeakCanary and Android Studio Memory Profiler heap dump verification",
      "Automated unit and integration test suites for simulated hardware states",
    ],
    deliverable: "Macrobenchmark Telemetry & Verification Matrix",
    layerKey: "telemetry",
    layerLabel: "04 // TELEMETRY_BENCHMARK",
    relatedCaseStudy: {
      title: "Tinni-X Audio Synthesis",
      href: "/projects/tinnix",
    },
  },
];

export const technicalApproachPillars: ApproachPillar[] = [
  {
    code: "PIL-01",
    title: "Unidirectional Data Flow & State Determinism",
    subtitle: "Predictable Reactive Architecture",
    description:
      "Modern Android applications require immutable, lifecycle-aware state boundaries. I model complex system states with MVI/MVVM patterns, ensuring single sources of truth, pure state reducers, and predictable UI rendering.",
    bullets: [
      "StateFlow & SharedFlow with lifecycle-aware repeatOnLifecycle collection",
      "Explicit UI State sealed interfaces (Loading, Content, Error, Reconnecting)",
      "Separation of domain Use Cases from persistence and UI presentation layers",
      "Coroutines structured concurrency with cooperative cancellation hierarchies",
    ],
    tags: ["StateFlow", "MVI / MVVM", "Clean Architecture", "Coroutines Flow"],
  },
  {
    code: "PIL-02",
    title: "Hardware Protocols & Embedded Systems Co-Design",
    subtitle: "Low-Level Communication Engineering",
    description:
      "Connecting mobile apps to physical hardware requires deterministic contracts. Rather than treating Bluetooth as a simple pipe, I design explicit command structures, prioritized serialization queues, and robust error recovery contracts.",
    bullets: [
      "Prioritized read/write GATT command queues with mutual exclusion",
      "Co-designing packet headers, CRC checksums, and acknowledgment handshakes with firmware teams",
      "Sliding-window jitter buffers and packet reassembly for real-time UDP video/audio",
      "Multi-device topology orchestration (PairHub™) without manual Bluetooth re-pairing",
    ],
    tags: ["BLE GATT", "UDP Streaming", "Firmware Co-Design", "Jitter Buffers"],
  },
  {
    code: "PIL-03",
    title: "Defensive Lifecycle & Resource Management",
    subtitle: "Resilience Under Memory & OS Pressure",
    description:
      "Enterprise systems must survive Android OS process termination, network handoffs, and resource constraints without dropping user context or leaking memory.",
    bullets: [
      "Process death recovery using SavedStateHandle and asynchronous Proto DataStore",
      "Memory leak elimination using LeakCanary, strict CoroutineScope scoping, and Profiler analysis",
      "Android Baseline Profiles reducing cold-start latency by up to ~35%",
      "Room RemoteMediator with Paging 3 for memory-efficient historical event infinite scrolling",
    ],
    tags: ["Process Death", "Baseline Profiles", "Proto DataStore", "Paging 3"],
  },
  {
    code: "PIL-04",
    title: "On-Device Intelligence & Privacy-First Computation",
    subtitle: "Edge AI Without Cloud Dependency",
    description:
      "Machine learning on mobile should be fast, private, and capable of offline operation. I implement edge computer vision and audio processing pipelines that preserve user privacy.",
    bullets: [
      "Local TensorFlow Lite and MediaPipe model execution for real-time inference",
      "CameraX image analysis with local ML Kit face/eye gesture detection (Zbukk)",
      "Zero cloud egress for sensitive medical diagnostics or wardrobe imagery (Styledrobe)",
      "Real-time DSP parametric audio filtering and synthesized soundscapes (Tinni-X)",
    ],
    tags: ["TensorFlow Lite", "MediaPipe", "CameraX", "Edge ML"],
  },
];
