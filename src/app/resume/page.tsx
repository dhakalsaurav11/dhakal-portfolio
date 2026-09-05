"use client";

import { useState } from "react";

export default function ResumePage() {
  const [view, setView] = useState<"download" | "inline">("inline");

  return (
    <div className="min-h-screen bg-[#FBFBFA] py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4 border-b border-[#EAEAEA] pb-10">
          <h1 className="font-serif text-4xl text-[#111111] tracking-[-0.03em]">
            Resume
          </h1>
          <p className="text-[#787774] text-lg">
            Download a PDF copy or preview inline below. The resume highlights
            technical and project experience.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/Saurav Resume 2025 (Dev).pdf";
              link.download = "Saurav Resume 2025 (Dev).pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200 ${
              view === "download"
                ? "bg-[#111111] text-white"
                : "text-[#2F3437] border border-[#EAEAEA] hover:bg-[#F7F6F3]"
            }`}
          >
            Download PDF
          </button>

          <button
            onClick={() => setView("inline")}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200 ${
              view === "inline"
                ? "bg-[#111111] text-white"
                : "text-[#2F3437] border border-[#EAEAEA] hover:bg-[#F7F6F3]"
            }`}
          >
            View Inline
          </button>
        </div>

        {view === "download" ? (
          <a
            href="/Saurav Resume 2025 (Dev).pdf"
            download
            className="inline-block text-sm text-[#111111] border-b border-[#111111] pb-0.5 hover:text-[#555555] hover:border-[#555555] transition-colors duration-200"
          >
            Click here if download does not start automatically
          </a>
        ) : (
          <div className="border border-[#EAEAEA] rounded-lg overflow-hidden">
            <iframe
              src="/Saurav Resume 2025 (Dev).pdf"
              className="w-full h-[800px]"
              title="Saurav Dhakal Resume"
            />
          </div>
        )}
      </div>
    </div>
  );
}
