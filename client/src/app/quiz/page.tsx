"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const Quiz = () => {
  return (
    <div className="mt-20 px-6 py-12 max-w-3xl mx-auto bg-[#FAF7F2] text-[#2D3B4E]">
      <h1 className="text-2xl font-bold mb-6">Support Quiz</h1>
      <p className="mb-10">
        Answer a few quick questions so we can guide you to the right resources.
      </p>

      <Button variant="default" size="lg">
        Submit
      </Button>
    </div>
  );
};

export default Quiz;
