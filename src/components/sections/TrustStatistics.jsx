export default function TrustStatistics() {
  
  const stats = [
    { number: '19+ Years', label: 'of Legacy' },
    { number: '10 Lakh+', label: 'Students Nurtured' },
    { number: '80+ Centers', label: 'Across India' },
    { number: '10 Lakh+', label: 'App Downloads' }
  ];
  
  return (
    <section className="py-5" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="container-lg px-3">
        <h1 className="fs-3 fs-md-1 fw-bold text-center text-dark mb-5 py-5">
          Trusted by Millions of Students Nationwide
        </h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col">
              <div className="text-center p-4 rounded-2 border border-light bg-white h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <p className="fs-3 fs-md-2 fw-bold mb-2" style={{color:"#dc2626"}}>
                  {stat.number}
                </p>
                <p className="text-muted small">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
