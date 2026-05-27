export function TrustStatistics() {
  const stats = [
    { number: '50K+', label: 'Active Students' },
    { number: '500+', label: 'Expert Courses' },
    { number: '98%', label: 'Satisfaction Rate' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
