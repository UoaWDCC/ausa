"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import EventHeroImage from "@/components/event-details/EventHeroImage";
import EventInfoCard from "@/components/event-details/EventInfoCard";
import EventAboutSection from "@/components/event-details/EventAboutSection";
import AboutInputBox from "@/components/event-details/AboutInputBox";
import InfoInputBox from "@/components/event-details/InfoInputBox";

export default function Page() {
  // Get query params
  const searchParams = useSearchParams();
  const eventTitle = searchParams.get("title") || "Event";
  const eventSubtitle = "By AUSA";

  // About state
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");
  const [aboutSubmitted, setAboutSubmitted] = useState(false);

  // Info state
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [infoSubmitted, setInfoSubmitted] = useState(false);

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
        imageUrl=""
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
            <AboutInputBox
              title={aboutTitle}
              description={aboutDescription}
              setTitle={setAboutTitle}
              setDescription={setAboutDescription}
              onSubmit={() => setAboutSubmitted(true)}
            />
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
            <InfoInputBox
              date={date}
              location={location}
              startTime={startTime}
              endTime={endTime}
              setDate={setDate}
              setLocation={setLocation}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
              onSubmit={() => setInfoSubmitted(true)}
            />
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
