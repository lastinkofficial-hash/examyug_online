export function TrustStatistics() {
  const stats = [
    { number: '19+ Years', label: 'of Legacy' },
    { number: '10 Lakh+', label: 'Students Nurtured' },
    { number: '80+ Centers', label: 'Across India' },
    { number: '10 Lakh+', label: 'App Downloads' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 py-20">
          Trusted by Millions of Students Nationwide
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg border border-gray-200 bg-gray-50">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
