export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Learn from Industry Experts
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-balance">
          Master your skills with personalized courses and expert instructors. Join thousands of students already transforming their careers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Learning Today
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
}
