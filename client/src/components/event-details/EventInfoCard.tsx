import React from "react";

type EventInfoCardProps = {
  date: string;
  location: string;
  startTime: string;
  endTime: string;
};

export default function EventInfoCard({ date, location, startTime, endTime }: EventInfoCardProps) {
  return (
    <aside
      style={{
        background: "#2b2d31",
        color: "white",
        padding: "1.5rem",
        borderRadius: "12px",
        maxWidth: "300px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
      }}
    >
      <h2 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>📍 When & Where</h2>
      <p style={{ margin: "0.3rem 0" }}>{date}</p>
      <p style={{ margin: "0.3rem 0", fontSize: "0.9rem", opacity: 0.8 }}>{location}</p>

      <div style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
        <strong>Start:</strong> {startTime}
        <br />
        <strong>Finish:</strong> {endTime}
      </div>

      <button
        style={{
          marginTop: "1.5rem",
          width: "100%",
          padding: "0.7rem",
          background: "#5865f2",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Register
      </button>
    </aside>
  );
}
