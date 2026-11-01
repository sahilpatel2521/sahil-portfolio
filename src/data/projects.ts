import { ProjectCaseStudy } from "@/types/project";

export const projects: ProjectCaseStudy[] = [
  {
    id: "nuconnect",
    slug: "nuconnect",
    systemCode: "BLE Platform · Medical Devices",
    title: "NUConnect",
    subtitle: "Unified BLE Companion Platform for Smart Hearing Aids",
    category: "Medical & Wearable Systems",
    period: "2023 – 2024",
    role: "Lead Android BLE Architect",
    teamScope:
      "Cross-functional team including hardware designers, embedded DSP firmware engineers, and clinical audiologists.",
    personalScope:
      "Designed and implemented the Android BLE abstraction layer, prioritized read/write GATT command queues, independent dual-channel (Left/Right) state synchronization, and remote fitting configuration engine.",
    overview:
      "NUConnect is an Android companion platform engineered to communicate reliably with multi-vendor smart hearing aids. It abstracts disparate hardware characteristics across 6 device families into a unified reactive state layer, reducing clinic visits and onboard connection drops.",
    problem:
      "Smart hearing aids operate under extreme power and bandwidth constraints. Vendor-specific GATT differences, independent left/right dual-device synchronization, and unreliable BLE connection drops created fragmented codebases and high latency during clinical fitting adjustments.",
    architecture: {
      summary:
        "Engineered a unified GATT abstraction layer that models hearing aids as stateful entities rather than raw Bluetooth sockets. Utilized Kotlin Coroutines, Flow, and serialized command queues to orchestrate asynchronous read/write operations without race conditions or dropped packets.",
      diagramType: "ble-protocol",
      diagramTitle: "Dual-Channel BLE GATT Command Orchestration Flow",
      diagramDescription:
        "Prioritized read/write queues with acknowledgment verification preventing packet collisions across independent left and right ear hearing-aid channels.",
      pillars: [
        {
          title: "Device-Family Abstraction",
          description:
            "Abstracted 6 hardware device families through vendor-specific GATT mappings, capability discovery contracts, and dynamic characteristic descriptors.",
        },
        {
          title: "Dual-Channel Command Serialization",
          description:
            "Implemented prioritized mutex queues for independent left and right ear channels to prevent concurrent GATT write operations and avoid BLE 133 status errors.",
        },
        {
          title: "Remote Fitting Assistant",
          description:
            "Built dynamic configuration workflows matching pre-assessment questionnaires to device audio profiles (volume, listening modes, frequency bands, noise reduction).",
        },
      ],
    },
    keyDecisions: [
      {
        title: "Serialized Command Queue vs Concurrent GATT Writes",
        context:
          "Android's native BluetoothGatt stack fails deterministically when concurrent characteristic writes are initiated before receiving onCharacteristicWrite callbacks.",
        decision:
          "Architected an asynchronous, prioritized command queue using Kotlin Mutex and CompletableDeferred acknowledgments.",
        rationale:
          "Ensured 100% deterministic delivery of volume, listening mode, and EQ parameter updates across both hearing-aid channels without collision.",
      },
      {
        title: "StateFlow vs LiveData for Connection Lifecycle",
        context:
          "Connection states require fine-grained recovery transitions (Connecting, Connected, DiscoveringServices, Bonded, Disconnected).",
        decision:
          "Utilized StateFlow with distinctUntilChanged operators and lifecycle-aware collection.",
        rationale:
          "Eliminated UI state desynchronization and prevented stale device status when returning from background states.",
      },
    ],
    reliability: [
      {
        title: "Targeted Scan Filters & Priority Tuning",
        description:
          "Applied manufacturer-data scan filters and setConnectionPriority(CONNECTION_PRIORITY_HIGH) during initial pairing, reducing discovery and connection time by ~70%.",
      },
      {
        title: "Exponential Backoff Reconnection",
        description:
          "Implemented automated retry policies with jittered backoff intervals to prevent battery drain while aggressively reconnecting when hearing aids come back into range.",
      },
    ],
    metrics: [
      {
        value: "~70%",
        label: "Scan/Connect Time Reduction",
        qualification:
          "Measured across 6 device families compared to previous unoptimized scan loops.",
      },
      {
        value: "~60%",
        label: "Fewer In-Person Clinic Visits",
        qualification:
          "Calculated from patient remote configuration usage vs historical in-clinic adjustments.",
      },
      {
        value: "6",
        label: "Hardware Families Unified",
        qualification:
          "Unified under a single Android communication abstraction layer.",
      },
    ],
    techStack: [
      "Kotlin",
      "Android BLE",
      "GATT Queues",
      "Coroutines",
      "StateFlow",
      "Jetpack Compose",
      "Clean Architecture",
    ],
    publicLinks: [
      {
        label: "Companion Platform Architecture (Internal Enterprise)",
        url: "#",
        type: "internal-enterprise",
        verified: false,
      },
    ],
    hardwareNotes:
      "Designed for Nordic Semiconductor and Audiowise Bluetooth Low Energy chipsets with custom audio DSP firmware.",
  },
  {
    id: "wehearapp",
    slug: "wehearapp",
    systemCode: "Translation Core · Real-Time Audio",
    title: "WeHearApp & PairHub™",
    subtitle: "Real-Time Translation Platform & Multi-Device Wearables Engine",
    category: "Real-Time Audio & Embedded Wearables",
    period: "2022 – Present",
    role: "Senior Android Engineer (Lead Architect)",
    teamScope:
      "Core Android team, backend speech-recognition engineers, on-site China firmware engineers, and international field test teams.",
    personalScope:
      "Led codebase modernization (Java/XML → Kotlin/XML → Compose); architected TranslationCoordinator; co-designed 42+ BLE firmware commands on-site in China; invented PairHub™ multi-device switching engine; built Baseline Profile pipelines.",
    overview:
      "WeHearApp is the flagship application powering WeHear's smart audio wearables. It enables real-time one-to-one, group, and live multilingual translation, coupled with PairHub™—an intelligent multi-device switching system supporting up to 4 simultaneous wearables.",
    problem:
      "Real-time spoken translation is sensitive to pipeline latency, out-of-order network responses, packet drops, and user interruption. Furthermore, switching audio between paired wearables previously required manual Bluetooth disconnect/re-pair cycles.",
    architecture: {
      summary:
        "Built around TranslationCoordinator, a centralized reactive state orchestrator that ingests streaming audio segments, manages translation API requests with cancellation debouncing, and enforces strict response sequencing before speech playback.",
      diagramType: "translation-pipeline",
      diagramTitle: "Asynchronous Response Ordering & Cancellation Pipeline",
      diagramDescription:
        "Structured concurrency pipeline coordinating speech segmentation, debounced API dispatch, cache deduplication, and ordered incremental rendering.",
      pillars: [
        {
          title: "TranslationCoordinator Core",
          description:
            "Coordinates session-level and segment-level states with Room caching, structured Coroutine cancellations, and response ordering.",
        },
        {
          title: "PairHub™ Multi-Device Switching",
          description:
            "Proprietary switching layer maintaining connection handles to up to 4 previously paired wearables for instant audio routing without manual re-pairing.",
        },
        {
          title: "Embedded BLE Firmware Protocol",
          description:
            "Co-designed on-site with firmware engineers in China across 5+ firmware versions: 42+ command types, packet structures, and deterministic error contracts.",
        },
      ],
    },
    keyDecisions: [
      {
        title: "Strict Response Sequencing via Monotonic Sequence IDs",
        context:
          "Network translation responses for consecutive speech segments can arrive out-of-order due to variable cloud processing latencies.",
        decision:
          "Tagged each speech segment with a monotonic sequence ID and buffered responses in a PriorityQueue before dispatching to audio rendering.",
        rationale:
          "Completely prevented speech desynchronization and overlapping audio playback during rapid conversational exchanges.",
      },
      {
        title: "Process Death Resilience with SavedStateHandle + Proto DataStore",
        context:
          "Android system-initiated process termination during active BLE sessions caused lost translation sessions and broken Bluetooth state.",
        decision:
          "Serialized active session tokens into SavedStateHandle and persisted device preferences asynchronously with DataStore Proto.",
        rationale:
          "Seamlessly restored active BLE sessions and translation history without user friction after OS memory reclamation.",
      },
    ],
    reliability: [
      {
        title: "Debouncing & Cooperative Cancellation",
        description:
          "Cancelled ongoing in-flight HTTP/WebSocket translation requests immediately when user speech was updated or invalidated, reducing cloud overhead and latency by ~60%.",
      },
      {
        title: "Baseline Profiles & Paging 3",
        description:
          "Generated custom Android Baseline Profiles reducing app cold start times by ~35%, paired with Room RemoteMediator for 60fps scrolling in translation archives.",
      },
    ],
    metrics: [
      {
        value: "~60%",
        label: "Faster Response Pipeline",
        qualification:
          "Measured across end-to-end cloud-to-wearable translation benchmarks.",
      },
      {
        value: "~55%",
        label: "Lower Device Switch Latency",
        qualification:
          "Measured switch time between active paired wearables via PairHub™.",
      },
      {
        value: "~35%",
        label: "Cold-Start Time Reduction",
        qualification:
          "Measured using Android Macrobenchmark cold-start traces with Baseline Profiles.",
      },
      {
        value: "42+",
        label: "Firmware Command Types",
        qualification:
          "Co-designed on-site in China across 5+ embedded firmware generations.",
      },
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines & Flow",
      "BLE Firmware Co-Design",
      "PairHub™",
      "Room RemoteMediator",
      "Baseline Profiles",
      "DataStore Proto",
    ],
    publicLinks: [
      {
        label: "WeHear on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.wehear.wehear",
        type: "play-store",
        verified: true,
      },
    ],
    hardwareNotes:
      "Integrated with WeHear OX, WeHear Earbuds, and custom bone-conduction audio headsets.",
  },
  {
    id: "nuscope",
    slug: "nuscope",
    systemCode: "UDP Video Streaming · Medical Systems",
    title: "NUScope",
    subtitle: "Medical Otoscope & Real-Time UDP Video Communication Platform",
    category: "Medical Diagnostics & Video Streaming",
    period: "2023 – 2024",
    role: "Lead Medical Device Android Engineer",
    teamScope:
      "Hardware engineers in China, firmware protocol specialists, Android engineers, and consulting clinical otolaryngologists.",
    personalScope:
      "Reverse-engineered the hardware otoscope communication protocol; engineered real-time UDP video frame reassembly and jitter buffering; implemented Wi-Fi Station-mode concurrent cloud routing and offline persistence.",
    overview:
      "NUScope is a specialized Android medical diagnostics platform that connects to digital video otoscopes over local Wi-Fi. It streams high-frame-rate examination video with packet sequencing and adaptive frame dropping, while sustaining simultaneous cloud connectivity.",
    problem:
      "The hardware otoscope communicated over raw UDP over an isolated local Wi-Fi network with no internet access. Video frames suffered from packet loss, out-of-order delivery, and jitter, and the phone was cut off from cloud electronic health records (EHR) during active examinations.",
    architecture: {
      summary:
        "Engineered a real-time UDP video ingestion pipeline. Designed Wi-Fi Station-mode routing so the device remains attached to the otoscope's local Wi-Fi interface for video while routing cloud API calls through cellular or secondary networks.",
      diagramType: "udp-jitter",
      diagramTitle: "UDP Video Frame Reassembly & Jitter Buffer Pipeline",
      diagramDescription:
        "Multi-stage video ingestion pipeline: raw UDP packet reception, sequence reordering, dynamic jitter buffer smoothing, and adaptive frame dropping.",
      pillars: [
        {
          title: "Hardware Protocol Reverse-Engineering",
          description:
            "Traced command sequences, decoded byte frames, and validated undocumented device states directly with the China manufacturing hardware team.",
        },
        {
          title: "Jitter Buffering & Packet Sequencing",
          description:
            "Reassembled raw UDP datagrams into complete H.264/MJPEG frames using custom packet headers, sliding-window reordering, and adaptive frame dropping.",
        },
        {
          title: "Wi-Fi Station Mode & Multi-Interface Routing",
          description:
            "Utilized Android NetworkCapabilities and ConnectivityManager network binding to preserve local otoscope video socket while routing cloud requests.",
        },
      ],
    },
    keyDecisions: [
      {
        title: "Sliding-Window Jitter Buffer vs Direct Frame Display",
        context:
          "Displaying UDP frames immediately upon packet arrival resulted in video tearing and stutter under micro-burst packet loss.",
        decision:
          "Implemented a dynamic 30–50ms sliding-window jitter buffer with adaptive frame dropping for late frames.",
        rationale:
          "Delivered ~99% smooth frame delivery with unnoticeable examination latency for clinical practitioners.",
      },
      {
        title: "Explicit Network Binding via ConnectivityManager",
        context:
          "Android automatically disconnects or marks Wi-Fi as 'No Internet', causing medical session disruption.",
        decision:
          "Bound the video UDP socket explicitly to the local Wi-Fi Network object, leaving the default Android active network for cloud persistence.",
        rationale:
          "Allowed uninterrupted medical video examinations without isolating the Android device from clinical cloud services.",
      },
    ],
    reliability: [
      {
        title: "Offline-First Examination Persistence",
        description:
          "Cached captured examination images and diagnostic video clips locally with encrypted Room and disk storage, syncing to the server once full internet was restored.",
      },
      {
        title: "Adaptive Frame Dropping",
        description:
          "Monitored buffer depth and frame timestamp deltas, gracefully dropping incomplete frames to keep the examination live rather than accumulating playback drift.",
      },
    ],
    metrics: [
      {
        value: "~99%",
        label: "Smooth Frame Delivery",
        qualification:
          "Achieved under unstable local Wi-Fi network conditions with packet loss.",
      },
      {
        value: "0 ms",
        label: "Cloud Interruption",
        qualification:
          "Maintained simultaneous local hardware connection and cloud sync.",
      },
      {
        value: "30-50ms",
        label: "Adaptive Jitter Buffer",
        qualification:
          "Ultra-low latency buffer depth optimized for real-time surgical/clinical inspection.",
      },
    ],
    techStack: [
      "Kotlin",
      "UDP Networking",
      "Jitter Buffering",
      "Wi-Fi Station Mode",
      "ConnectivityManager",
      "H.264/MJPEG Decoding",
      "Offline-First Room",
    ],
    publicLinks: [
      {
        label: "Medical Hardware Integration (Enterprise Device)",
        url: "#",
        type: "internal-enterprise",
        verified: false,
      },
    ],
    hardwareNotes:
      "Integrated with high-definition digital otoscopes and endoscopic camera modules over 2.4GHz Wi-Fi.",
  },
  {
    id: "tinnix",
    slug: "tinnix",
    systemCode: "Audio DSP · Hearing Diagnostics",
    title: "Tinni-X",
    subtitle: "Personalized Tinnitus Assessment, Therapy & Audio Processing",
    category: "Audio Engineering & Digital Health",
    period: "2023 – 2024",
    role: "Lead Audio Platform Android Engineer",
    teamScope:
      "Audiology consultants, DSP acoustic researchers, UI/UX designers, and Android engineers.",
    personalScope:
      "Engineered the self-guided tinnitus frequency assessment algorithm; designed the audio synthesis pipeline combining curated soundscapes; implemented Adaptive Tinnitus Notch Filtering (ATNF); built baseline-driven therapy scheduling.",
    overview:
      "Tinni-X is an evidence-based digital health and audio processing platform designed to assess patient-specific tinnitus pitch/loudness and deliver customized acoustic therapy with notch filtering.",
    problem:
      "Tinnitus sound profiles vary dramatically across individuals. Generic sound therapy lacks frequency specificity. Patients required continuous clinical audiometer visits to calibrate sound masking, and existing apps offered static, non-adaptive audio playback.",
    architecture: {
      summary:
        "Built a multi-stage audio generation and assessment engine. Converts patient frequency matching inputs into a calibrated baseline, then feeds real-time audio streams through an Adaptive Tinnitus Notch Filter (ATNF) centered around the patient's tinnitus pitch.",
      diagramType: "audio-processing",
      diagramTitle: "Tinnitus Assessment & Adaptive Notch Filtering (ATNF) Flow",
      diagramDescription:
        "Assessment testing algorithm establishing user baseline frequency, followed by parametric audio synthesis and custom notch-filter attenuation.",
      pillars: [
        {
          title: "Self-Guided Frequency Assessment",
          description:
            "Implemented an adaptive staircase testing algorithm allowing users to identify their dominant tinnitus frequency and minimum masking level across 50+ test sessions.",
        },
        {
          title: "Adaptive Tinnitus Notch Filtering (ATNF)",
          description:
            "Engineered configurable digital notch filtering that selectively attenuates audio frequencies in an octave band surrounding the patient's tinnitus baseline.",
        },
        {
          title: "Baseline-Driven Scheduling Engine",
          description:
            "Mapped clinical assessment findings to automated daily therapy durations, session frequencies, and sound volume progression curves.",
        },
      ],
    },
    keyDecisions: [
      {
        title: "Real-Time Parametric Notch Filter vs Pre-Rendered Audio",
        context:
          "Pre-rendering audio tracks for every possible frequency combination would consume gigabytes of storage and eliminate dynamic user customization.",
        decision:
          "Engineered a real-time parametric notch filter applied directly to the audio playback stream using Android AudioTrack and low-level DSP equations.",
        rationale:
          "Enabled instant toggling of notching parameters on any soundscape with zero storage overhead and negligible CPU usage.",
      },
      {
        title: "Decoupled Assessment State from Playback Session",
        context:
          "Assessment sessions require strict validation before updating clinical therapy parameters.",
        decision:
          "Enforced an immutable assessment transaction model where therapy parameters only update upon verified test completion.",
        rationale:
          "Protected patients from accidental parameter changes or incomplete evaluation runs.",
      },
    ],
    reliability: [
      {
        title: "Hearing Safety Volume Normalization",
        description:
          "Integrated strict peak limiting and audio normalization into the synthesis pipeline to prevent acoustic trauma or abrupt volume spikes during therapy.",
      },
      {
        title: "Adherence Monitoring & Session Persistence",
        description:
          "Logged active listening duration, profile history, and adherence metrics with offline-first persistence and daily progress reporting.",
      },
    ],
    metrics: [
      {
        value: "50+",
        label: "Assessment Sessions Tested",
        qualification:
          "Self-guided frequency matching evaluations conducted across patient cohorts.",
      },
      {
        value: "~55%",
        label: "Manual Configuration Reduction",
        qualification:
          "Calculated from automated baseline-driven scheduling vs manual audiologist setup.",
      },
      {
        value: "0 dB",
        label: "Clipping / Distortion",
        qualification:
          "Guaranteed dynamic range control and peak limiting across synthetic soundscapes.",
      },
    ],
    techStack: [
      "Kotlin",
      "AudioTrack",
      "DSP Notch Filtering (ATNF)",
      "Audio Synthesis",
      "Staircase Algorithm",
      "Clean Architecture",
    ],
    publicLinks: [
      {
        label: "Tinnitus Therapy Research Platform (Clinical Partner App)",
        url: "#",
        type: "internal-enterprise",
        verified: false,
      },
    ],
    hardwareNotes:
      "Tuned for high-precision acoustic playback across calibrated bone-conduction and in-ear transducer hardware.",
  },
];
