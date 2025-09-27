"use client";

import { useState } from "react";
import { FileDown, Eye } from "lucide-react";

export default function ResumePage() {
  const [view, setView] = useState<"download" | "inline">("inline");

  return (
    <div className="py-12 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="text-neutral-400">
        Download a PDF copy or preview it inline below. The resume highlights my strongest technical and project experience.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Saurav Resume 2025 (Dev).pdf";
            link.download = "Saurav Resume 2025 (Dev).pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded border ${
            view === "download"
              ? "bg-accent text-white"
              : "text-neutral-300 border-neutral-700 hover:text-white hover:border-white"
          }`}
        >
          <FileDown size={16} />
          Download PDF
        </button>


        <button
          onClick={() => setView("inline")}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded border ${
            view === "inline"
              ? "bg-accent text-white"
              : "text-neutral-300 border-neutral-700 hover:text-white hover:border-white"
          }`}
        >
          <Eye size={16} />
          View Inline
        </button>
      </div>

      {view === "download" ? (
        <a
          href="/Saurav Resume 2025 (Dev).pdf"
          download
          className="inline-block mt-4 text-blue-400 hover:underline"
        >
          Click here if download doesn’t start automatically
        </a>
      ) : (
        <div className="mt-6 border border-neutral-700 rounded-md overflow-hidden">
          <iframe
            src="/Saurav Resume 2025 (Dev).pdf"
            className="w-full h-[800px]"
            title="Saurav Dhakal Resume"
          />
        </div>
      )}
    </div>
  );
}
