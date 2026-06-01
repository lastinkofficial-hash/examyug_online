"use client";

const announcements = [
  { title: "🎉 Summer Sale! Get 40% off all courses this month" },
  { title: "JEE Nurture Batch New Timing from 10:00 Am Mon-Fri" },
  { title: "Upcoming JEE Dropper Batch" },
];

export function AnnouncementBar() {
  return (
    <div className="bg-accent bg-opacity-10 border-b border-accent border-opacity-20 relative overflow-hidden">
      <div className="marquee flex space-x-12">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-4 flex items-center justify-center"
          >
            <p className="text-yellow-300 text-center font-bold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
