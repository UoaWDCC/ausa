'use client'

import React, { useState } from "react";

type InfoInputBoxProps = {
  date: string;
  location: string;
  startTime: string;
  endTime: string;
  setDate: (val: string) => void;
  setLocation: (val: string) => void;
  setStartTime: (val: string) => void;
  setEndTime: (val: string) => void;
  onSubmit: () => void;
};

export default function InfoInputBox({
  date,
  location,
  startTime,
  endTime,
  setDate,
  setLocation,
  setStartTime,
  setEndTime,
  onSubmit,
}: InfoInputBoxProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      style={{
        background: "#2b2d31",
        padding: "1.2rem",
        borderRadius: "12px",
        minHeight: "220px",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.4)"
          : "0 4px 12px rgba(0,0,0,0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h2 style={{ marginBottom: "1rem" }}>Enter Event Info</h2>
      <input
        type="text"
        placeholder="Enter date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{
          width: "100%",
          padding: "0.7rem",
          marginBottom: "0.8rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "transparent",
          color: "white",
        }}
      />
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{
          width: "100%",
          padding: "0.7rem",
          marginBottom: "0.8rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "transparent",
          color: "white",
        }}
      />
      <input
        type="text"
        placeholder="Start time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        style={{
          width: "100%",
          padding: "0.7rem",
          marginBottom: "0.8rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "transparent",
          color: "white",
        }}
      />
      <input
        type="text"
        placeholder="End time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        style={{
          width: "100%",
          padding: "0.7rem",
          marginBottom: "0.8rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "transparent",
          color: "white",
        }}
      />
      <button
        onClick={onSubmit}
        style={{
          marginTop: "1rem",
          padding: "1rem 2rem",
          background: hovered ? "#4752c4" : "#5865f2",
          border: "none",
          borderRadius: "8px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "1rem",
          boxShadow: hovered
            ? "0 4px 16px rgba(88,101,242,0.3)"
            : "none",
          transition: "background 0.2s, box-shadow 0.2s",
        }}
      >
        Add
      </button>
    </aside>
  );
}