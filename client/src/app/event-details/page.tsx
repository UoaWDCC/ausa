"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import EventHeroImage from "@/components/event-details/EventHeroImage";
import EventInfoCard from "@/components/event-details/EventInfoCard";
import EventAboutSection from "@/components/event-details/EventAboutSection";

export default function Page() {
  // Get query params
  const searchParams = useSearchParams();
  const eventTitle = searchParams.get("title") || "Event";
  const eventSubtitle = "By AUSA";

  // State for input fields
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  // State for showing components vs input forms
  const [aboutSubmitted, setAboutSubmitted] = useState(false);
  const [infoSubmitted, setInfoSubmitted] = useState(false);

  // Hover states for input boxes
  const [aboutHovered, setAboutHovered] = useState(false);
  const [infoHovered, setInfoHovered] = useState(false);

  return (
    <main
      style={{
        background: "#313338",
        minHeight: "120vh",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      {/* Hero Image */}
      <EventHeroImage
        imageUrl="https://picsum.photos/1200/400?blur=2"
        title={eventTitle}
        subtitle={eventSubtitle}
      />

      {/* Main content layout */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          padding: "2rem",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        {/* About section OR form */}
        <div style={{ flex: "2 1 600px" }}>
          {!aboutSubmitted ? (
            <section
              style={{
                background: "#1e1f22",
                padding: "1.5rem",
                borderRadius: "12px",
                marginTop: "1rem",
                minHeight: "220px",
                boxShadow: aboutHovered
                  ? "0 8px 24px rgba(0,0,0,0.4)"
                  : "0 4px 12px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                transform: aboutHovered ? "scale(1.05)" : "scale(1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setAboutHovered(true)}
              onMouseLeave={() => setAboutHovered(false)}
            >
              <h2 style={{ marginBottom: "1rem" }}>Enter About Section</h2>
              <input
                type="text"
                placeholder="Enter title"
                value={aboutTitle}
                onChange={(e) => setAboutTitle(e.target.value)}
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
                value={aboutDescription}
                onChange={(e) => setAboutDescription(e.target.value)}
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
                onClick={() => setAboutSubmitted(true)}
                style={{
                  marginTop: "1rem",
                  padding: "1rem 2rem",
                  background: aboutHovered ? "#4752c4" : "#5865f2",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  boxShadow: aboutHovered
                    ? "0 4px 16px rgba(88,101,242,0.3)"
                    : "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              >
                Add
              </button>
            </section>
          ) : (
            <EventAboutSection
              title={aboutTitle}
              description={aboutDescription}
            />
          )}
        </div>

        {/* Info section OR form */}
        <div style={{ flex: "1 1 250px" }}>
          {!infoSubmitted ? (
            <aside
              style={{
                background: "#2b2d31",
                padding: "1.2rem",
                borderRadius: "12px",
                minHeight: "220px",
                boxShadow: infoHovered
                  ? "0 8px 24px rgba(0,0,0,0.4)"
                  : "0 4px 12px rgba(0,0,0,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
                transform: infoHovered ? "scale(1.05)" : "scale(1)",
                cursor: "pointer",
              }}
              onMouseEnter={() => setInfoHovered(true)}
              onMouseLeave={() => setInfoHovered(false)}
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
                onClick={() => setInfoSubmitted(true)}
                style={{
                  marginTop: "1rem",
                  padding: "1rem 2rem",
                  background: infoHovered ? "#4752c4" : "#5865f2",
                  border: "none",
                  borderRadius: "8px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                  fontSize: "1rem",
                  boxShadow: infoHovered
                    ? "0 4px 16px rgba(88,101,242,0.3)"
                    : "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              >
                Add
              </button>
            </aside>
          ) : (
            <EventInfoCard
              date={date}
              location={location}
              startTime={startTime}
              endTime={endTime}
            />
          )}
        </div>
      </div>
    </main>
  );
}
