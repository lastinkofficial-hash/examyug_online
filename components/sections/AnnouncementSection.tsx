"use client";

import React from "react";

const announcements = [
  {
    title: "NEET Nurture Batch",
    desc: "For Class 10th to 11th Moving Students (English & Hindi Medium)",
    date: "Batch Date: 20th May 2026",
  },
  {
    title: "JEE Nurture Batch",
    desc: "For Class 10th to 11th Moving Students (English & Hindi Medium)",
    date: "Batch Date: 20th May 2026",
  },
  {
    title: "JEE Dropper Batch",
    desc: "For 12th Pass Students (English & Hindi Medium)",
    date: "Batch Date: 20th May 2026",
  },
];

export default function AnnouncementSection() {
  return (
    <div className="bg-blue-50 border-b border-blue-200 py-4 overflow-hidden relative">
      {/* Marquee wrapper */}
      <div className="animate-marquee whitespace-nowrap">
        {announcements.map((item, index) => (
          <span
            key={index}
            className="mx-8 inline-block text-blue-700 font-medium"
          >
            {item.title} — {item.desc} — {item.date}
          </span>
        ))}
      </div>

    
    </div>
  );
}
