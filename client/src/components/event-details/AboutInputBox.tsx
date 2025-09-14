'use client'

import React, { useState } from "react";

type AboutInputBoxProps = {
  title: string;
  description: string;
  setTitle: (val: string) => void;
  setDescription: (val: string) => void;
  onSubmit: () => void;
};

export default function AboutInputBox({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
}: AboutInputBoxProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        background: "#1e1f22",
        padding: "1.5rem",
        borderRadius: "12px",
        marginTop: "1rem",
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
      <h2 style={{ marginBottom: "1rem" }}>Enter About Section</h2>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "0.7rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "transparent",
          color: "white",
        }}
      />
      <textarea
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          width: "100%",
          minHeight: "100px",
          padding: "0.7rem",
          borderRadius: "8px",
          border: "1px solid #555",
          background: "transparent",
          color: "white",
          resize: "vertical",
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
    </section>
  );
}