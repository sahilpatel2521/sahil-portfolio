export interface ImpactMetric {
  id: string;
  displayValue: string;
  numericTarget: number;
  suffix: string;
  prefix: string;
  title: string;
  system: string;
  qualification: string;
  methodology: string;
}

export const impactMetrics: ImpactMetric[] = [
  {
    id: "ble-latency",
    displayValue: "~70%",
    numericTarget: 70,
    prefix: "~",
    suffix: "%",
    title: "BLE Scan & Connection Time Reduction",
    system: "NUConnect Platform",
    qualification:
      "Achieved through targeted scan filters, connection-priority tuning, and automatic reconnection policies.",
    methodology:
      "Benchmarked against previous unoptimized scanning loops across 6 supported hearing-aid device families.",
  },
  {
    id: "translation-speed",
    displayValue: "~60%",
    numericTarget: 60,
    prefix: "~",
    suffix: "%",
    title: "Faster Translation Response Pipeline",
    system: "WeHearApp Translation Core",
    qualification:
      "Achieved using structured concurrency, cancellation, debouncing, caching, controlled parallelism, and ordered response dispatching.",
    methodology:
      "Measured across controlled benchmark scenarios comparing end-to-end network-to-audio rendering pipelines.",
  },
  {
    id: "device-switch",
    displayValue: "~55%",
    numericTarget: 55,
    prefix: "~",
    suffix: "%",
    title: "Lower Multi-Device Switch Latency",
    system: "PairHub™ Connectivity Engine",
    qualification:
      "Achieved through seamless transition between up to 4 previously paired wearables without manual Bluetooth re-pairing.",
    methodology:
      "Measured switch handoff time between active audio output states on paired BLE wearables.",
  },
  {
    id: "startup-time",
    displayValue: "~35%",
    numericTarget: 35,
    prefix: "~",
    suffix: "%",
    title: "Cold-Start Time Reduction",
    system: "WeHearApp Modernization",
    qualification:
      "Achieved using Android Baseline Profiles, Room RemoteMediator, and asynchronous Proto DataStore initialization.",
    methodology:
      "Benchmarked using Android Macrobenchmark cold-start profile traces on production device builds.",
  },
];
