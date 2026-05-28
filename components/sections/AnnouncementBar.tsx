
const announcements = [
  {
    title: "🎉 Summer Sale! Get 40% off all courses this month",
  },
  {
    title: "JEE Nurture Batch New Timing from 10:00 Am Mon-Fri",
  },
  {
    title: "Upcoming JEE Dropper Batch",
  },
];

export function AnnouncementBar() {

  return (
    <div className="bg-accent bg-opacity-10 border-b border-accent border-opacity-20 text-center py-3">
      <div className="overflow-hidden relative">
        <div className="absolute animate-marquee space-y-6">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 relative"
            >
              <p className="text-sm text-foreground"><span className="font-semibold">{item.title}</span></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
