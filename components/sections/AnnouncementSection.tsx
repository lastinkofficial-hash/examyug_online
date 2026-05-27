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
    <div>
      <div className="overflow-hidden h-32 relative">
        <div className="absolute animate-marquee space-y-6">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="bg-blue-100 border-l-4 border-blue-500 p-3 rounded-md"
            >
              <h3 className="font-semibold text-blue-700">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
              <span className="text-xs text-gray-500">{item.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for marquee */}
      {/* <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style> */}
    </div>
  );
}
