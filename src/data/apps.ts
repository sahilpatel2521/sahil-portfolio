import { AppRelease } from "@/types/app";

export const releasedApps: AppRelease[] = [
  {
    id: "styledrobe",
    slug: "styledrobe",
    name: "Styledrobe",
    tagline: "Offline AI Wardrobe & Outfit Recommendation System",
    category: "On-Device ML & Lifestyle",
    platform: "Google Play",
    status: "live",
    statusLabel: "Google Play Verified",
    iconUrl: "/images/apps/styledrobe/icon.webp",
    screenshots: [
      {
        url: "/images/apps/styledrobe/screen-1.webp",
        alt: "Styledrobe wardrobe catalog and outfit recommendations screen",
        caption: "On-device garment classification interface",
      },
      {
        url: "/images/apps/styledrobe/screen-2.webp",
        alt: "Styledrobe smart outfit combinations and local inference screen",
        caption: "Privacy-first offline outfit generation",
      },
    ],
    overview:
      "Styledrobe is a privacy-first smart wardrobe assistant that utilizes on-device machine learning to categorize clothing items and recommend coordinated outfits without uploading photos to external cloud servers.",
    problemSolved:
      "Traditional wardrobe styling apps upload user photos to remote clouds for computer vision processing, raising significant personal privacy concerns and requiring continuous network connectivity. Styledrobe executes all classification locally on the device.",
    features: [
      {
        title: "On-Device Garment Classification",
        description:
          "Runs an optimized TensorFlow Lite model directly on the Android Neural Networks API (NNAPI) / GPU delegate, classifying apparel categories in real time.",
      },
      {
        title: "100% Offline Inference",
        description:
          "Guarantees that user clothing photos and personal style metadata never leave the physical device, ensuring absolute privacy.",
      },
      {
        title: "Local Outfit Generation Engine",
        description:
          "Combines classified garment attributes (color, type, formal/casual) using a local heuristic matching algorithm to generate cohesive wardrobe suggestions.",
      },
    ],
    architecture: {
      pattern: "Clean Architecture + MVI",
      details:
        "Separated into presentation (Jetpack Compose), domain use cases (GarmentClassifier, OutfitRecommender), and local data layers (Room database + TFLite inference runner) with Hilt dependency injection.",
      highlights: [
        "TensorFlow Lite with GPU acceleration delegate",
        "Jetpack Compose declarative UI with fluid image transitions",
        "Room database with encrypted local image URI indexing",
        "Hilt dependency injection for testable ML runner abstraction",
      ],
    },
    technologies: [
      "Kotlin",
      "TensorFlow Lite",
      "Jetpack Compose",
      "Room",
      "Hilt",
      "Clean Architecture",
    ],
    externalLinks: [
      {
        label: "View on Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.aquacore.stylo",
        type: "play-store",
        verified: true,
      },
      {
        label: "Source Code Repository",
        type: "unavailable",
        verified: false,
        note: "Proprietary / Closed-source production application",
      },
    ],
  },
  {
    id: "zbukk",
    slug: "zbukk",
    name: "Zbukk",
    tagline: "AI-Powered Hands-Free Android Accessibility Platform",
    category: "Accessibility & Computer Vision",
    platform: "Google Play & GitHub",
    status: "live",
    statusLabel: "Google Play & Open Source",
    iconUrl: "/images/apps/zbukk/icon.webp",
    screenshots: [
      {
        url: "/images/apps/zbukk/screen-1.webp",
        alt: "Zbukk eye-blink detection configuration and gesture sensitivity screen",
        caption: "Blink sensitivity calibration and CameraX preview",
      },
      {
        url: "/images/apps/zbukk/screen-2.webp",
        alt: "Zbukk accessibility service settings and gesture translation setup",
        caption: "Android Accessibility Service integration controls",
      },
    ],
    overview:
      "Zbukk is a touch-free accessibility tool that enables users to scroll and navigate through Android applications using intentional eye blinks and facial gestures detected via the front camera.",
    problemSolved:
      "Individuals with motor impairments or situational touch limitations (e.g. wet/gloved hands, kitchen cooking, reading while multitasking) struggle with standard touchscreen gestures. Zbukk translates natural eye blinks into system scrolling events across any third-party app.",
    features: [
      {
        title: "Real-Time Eye Blink Detection",
        description:
          "Analyzes front-facing CameraX image frames with Google ML Kit Face Mesh detection to compute eye open probability ratios at low latency.",
      },
      {
        title: "System-Wide Accessibility Service",
        description:
          "Hooks into the Android AccessibilityService API to dispatch global scroll-up and scroll-down gestures to whichever third-party application is currently in the foreground.",
      },
      {
        title: "On-Device Computer Vision",
        description:
          "Processes camera buffers entirely in-memory with immediate frame recycling, keeping biometric facial landmarks strictly local to the device.",
      },
    ],
    architecture: {
      pattern: "Foreground Service + Accessibility Engine",
      details:
        "Runs an ultra-low-overhead background camera analyzer via CameraX ImageAnalysis, feeding face landmark coordinates to a gesture state machine that communicates with the AccessibilityService via an IPC broadcast bus.",
      highlights: [
        "CameraX ImageAnalysis with YUV to RGB efficient conversion",
        "ML Kit Face Detection with EYE_OPEN_PROBABILITY thresholds",
        "Android AccessibilityService dispatchGesture API for smooth scrolling",
        "Battery-conscious frame throttling to prevent device heating",
      ],
    },
    technologies: [
      "Kotlin",
      "CameraX",
      "ML Kit Face Detection",
      "Android Accessibility Service",
      "Foreground Service",
    ],
    externalLinks: [
      {
        label: "View on Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.sahil.eyeblikscroll",
        type: "play-store",
        verified: true,
      },
      {
        label: "GitHub Repository",
        url: "https://github.com/sahilpatel2521/Zbukk",
        type: "github",
        verified: true,
      },
    ],
  },
  {
    id: "reachme",
    slug: "reachme",
    name: "ReachMe",
    tagline: "Privacy-First QR Vehicle Contact Platform",
    category: "Full-Stack Android & Real-Time Communication",
    platform: "Android Prototype",
    status: "prototype",
    statusLabel: "System Prototype // R&D",
    iconUrl: "/images/apps/styledrobe/icon.webp", // Fallback to styledrobe icon
    screenshots: [],
    overview:
      "ReachMe is an anonymous vehicle communication platform that allows anyone to contact a parked car owner by scanning a dynamic windshield QR code—without exposing either party's personal phone number.",
    problemSolved:
      "In urban parking disputes, blocked driveways, or emergency vehicle situations, car owners have to leave phone numbers on paper or face towed vehicles. ReachMe enables masked, authenticated two-way contact with push notifications, chat, and low-latency audio.",
    features: [
      {
        title: "Masked QR Contact Initiation",
        description:
          "Generates dynamic, tamper-resistant QR tokens linked to vehicle profiles, allowing passersby to initiate an anonymous web/app session without phone number exchange.",
      },
      {
        title: "Real-Time WebSocket & Push Alerts",
        description:
          "Dispatches urgent parking notifications via Firebase Cloud Messaging (FCM) and initiates low-latency one-way audio alerts using Socket.IO.",
      },
      {
        title: "Full-Stack Architecture",
        description:
          "Native Jetpack Compose Android client paired with a Node.js/Express REST backend, MongoDB cluster, and real-time Socket.IO communication layer.",
      },
    ],
    architecture: {
      pattern: "Client-Server Full Stack with WebSocket Proxy",
      details:
        "The Android client registers vehicle identifiers, manages active session tokens, and receives push notifications via FCM, connecting to a Node.js/Socket.IO backend that anonymizes communication endpoints.",
      highlights: [
        "Jetpack Compose with MVVM and Retrofit HTTP interceptors",
        "Node.js + Express backend with JWT token authorization",
        "Socket.IO real-time duplex communication channel",
        "MongoDB vehicle registry and dynamic QR token mapping",
      ],
    },
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Cloud Messaging",
      "Socket.IO",
    ],
    externalLinks: [
      {
        label: "Google Play Store",
        type: "unavailable",
        verified: false,
        note: "Unpublished prototype — not released on Google Play",
      },
      {
        label: "GitHub Repository",
        type: "unavailable",
        verified: false,
        note: "Repository private / pending open-source release",
      },
    ],
  },
  {
    id: "wehear",
    slug: "wehear",
    name: "WeHear",
    tagline: "Flagship Wearables Companion & Live Translation Platform",
    category: "Wearable Audio & Speech AI",
    platform: "Google Play",
    status: "live",
    statusLabel: "Google Play Verified",
    iconUrl: "/images/apps/wehear/icon.webp",
    screenshots: [
      {
        url: "/images/apps/wehear/screen-1.webp",
        alt: "WeHear live translation session and language selection interface",
        caption: "Multilingual translation and speech engine",
      },
      {
        url: "/images/apps/wehear/screen-2.webp",
        alt: "WeHear device manager and audio equalizer configuration",
        caption: "Device connection and sound profile management",
      },
    ],
    overview:
      "WeHear is the official companion application for WeHear smart hearing devices and bone-conduction headsets, supporting multilingual real-time translation, device configuration, and audio wellness tracking.",
    problemSolved:
      "Wearable audio devices typically suffer from clunky Bluetooth pairing and slow cloud translation handoffs. WeHear provides a seamless ecosystem experience with custom firmware coordination and low-latency speech pipelines.",
    features: [
      {
        title: "Real-Time 1-on-1 & Live Translation",
        description:
          "Translates spoken conversations across 100+ languages with synchronized audio playback to connected WeHear headsets.",
      },
      {
        title: "Custom BLE Hardware Control",
        description:
          "Directly interfaces with device firmware for equalizer tuning, touch-button remapping, and battery health telemetry.",
      },
      {
        title: "PairHub™ Multi-Device Ecosystem",
        description:
          "Enables instant audio handoff between up to 4 previously paired wearables without manual Bluetooth re-pairing.",
      },
    ],
    architecture: {
      pattern: "Clean Architecture + Jetpack Compose",
      details:
        "Modernized across 3 generations from Java/XML to Kotlin/Compose. Uses TranslationCoordinator to handle structured Coroutines pipelines, Room caching, and Baseline Profiles.",
      highlights: [
        "Jetpack Compose with MVI state modeling",
        "Proprietary BLE protocol co-designed on-site in China",
        "PairHub™ multi-device connection management",
        "Baseline Profiles reducing cold-start latency by ~35%",
      ],
    },
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Coroutines & Flow",
      "BLE GATT",
      "Room",
      "Baseline Profiles",
    ],
    externalLinks: [
      {
        label: "View on Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.wehear.wehear",
        type: "play-store",
        verified: true,
      },
      {
        label: "Source Code Repository",
        type: "unavailable",
        verified: false,
        note: "Proprietary production application",
      },
    ],
  },
];
