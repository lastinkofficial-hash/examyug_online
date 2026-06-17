"use client";

const announcements = [
  { title: "🎉 Summer Sale! Get 40% off all courses this month" },
  { title: "JEE Nurture Batch New Timing from 10:00 Am Mon-Fri" },
  { title: "Upcoming JEE Dropper Batch" },
];

export default function AnnouncementBar() {
  return (
    <div className="border-bottom py-2 d-flex align-items-center overflow-hidden" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', borderColor: '#fbbf24', minHeight: '48px' }}>
      <div className="d-flex align-items-center gap-4 h-100" style={{ animation: 'scroll 15s linear infinite', whiteSpace: 'nowrap' }}>
        {announcements.map((item, index) => (
          <div key={index} className="flex-shrink-0 px-3 d-flex align-items-center">
            <p className="mb-0 fw-bold" style={{ color: '#fbbf24' }}>
              {item.title}
            </p>
          </div>
        ))}
        {announcements.map((item, index) => (
          <div key={`repeat-${index}`} className="flex-shrink-0 px-3 d-flex align-items-center">
            <p className="mb-0 fw-bold" style={{ color: '#fbbf24' }}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
