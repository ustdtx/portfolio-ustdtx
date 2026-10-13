import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const alt = `${profile.shortName} — Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0c0d0f",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>
          {profile.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 600, letterSpacing: -2 }}>
            {profile.shortName}
          </div>
          <div style={{ display: "flex", fontSize: 30, color: "#a1a1aa" }}>
            Software Engineer · Full-stack · AI/ML
          </div>
        </div>
      </div>
    ),
    size,
  );
}
