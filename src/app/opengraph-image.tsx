import { ImageResponse } from "next/og";

export const alt = "SIGNAL / SYSTEM — Sahil Patel | Senior Android Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#171717",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "8px solid #202020",
        }}
      >
        {/* Top telemetry */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                backgroundColor: "#e10600",
              }}
            />
            <span style={{ fontSize: "18px", color: "#c0c0c0", letterSpacing: "3px", textTransform: "uppercase" }}>
              SIGNAL / SYSTEM // SR_ANDROID_PORTFOLIO
            </span>
          </div>

          <span style={{ fontSize: "16px", color: "#8e8e8e", letterSpacing: "2px" }}>
            AHMEDABAD, IN // BLE & REAL-TIME
          </span>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#f4f4f4",
              letterSpacing: "-2px",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            SOFTWARE THAT CONNECTS TO THE REAL WORLD.
          </h1>
          <p style={{ fontSize: "24px", color: "#c0c0c0", margin: 0, maxWidth: "900px" }}>
            Architecting deterministic Android platforms across smart hearing-aid BLE, low-latency video streaming, and on-device ML.
          </p>
        </div>

        {/* Bottom Metadata */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2a2a",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", fontSize: "16px", color: "#8e8e8e" }}>
            <span>• JETPACK COMPOSE</span>
            <span>• BLE GATT QUEUES</span>
            <span>• UDP STREAMING</span>
            <span>• TENSORFLOW LITE</span>
          </div>

          <span style={{ fontSize: "20px", fontWeight: "bold", color: "#f4f4f4" }}>
            SAHIL PATEL
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
