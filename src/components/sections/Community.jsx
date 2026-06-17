import { MessageSquare, Users, Globe } from 'lucide-react';
import Button  from '@/components/ui/button';


export default function Community() {
  return (
    <section className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="container-lg px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 fs-md-1 fw-bold text-dark mb-4">Join Our Community</h2>
          <p className="fs-6 text-muted">
            Connect with thousands of learners worldwide
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="bg-white rounded-2 p-4 text-center h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="d-inline-flex p-3 rounded-2 mb-4" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                <MessageSquare className="w-6 h-6" style={{ color: '#dc2626' }} />
              </div>
              <h3 className="fw-bold text-dark mb-2 fs-6">Discussion Forums</h3>
              <p className="text-muted mb-4 small">
                Ask questions, share insights, and learn from peer discussions on any topic.
              </p>
              <Button variant="outline">Join Forums</Button>
            </div>
          </div>

          <div className="col">
            <div className="bg-white rounded-2 p-4 text-center h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="d-inline-flex p-3 rounded-2 mb-4" style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)' }}>
                <Users className="w-6 h-6" style={{ color: '#fbbf24' }} />
              </div>
              <h3 className="fw-bold text-dark mb-2 fs-6">Study Groups</h3>
              <p className="text-muted mb-4 small">
                Form or join study groups to collaborate and prepare together with peers.
              </p>
              <Button variant="outline">Find Groups</Button>
            </div>
          </div>

          <div className="col">
            <div className="bg-white rounded-2 p-4 text-center h-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="d-inline-flex p-3 rounded-2 mb-4" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
                <Globe className="w-6 h-6" style={{ color: '#dc2626' }} />
              </div>
              <h3 className="fw-bold text-dark mb-2 fs-6">Global Network</h3>
              <p className="text-muted mb-4 small">
                Connect with students from around the world and expand your learning horizons.
              </p>
              <Button variant="outline">Explore Network</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
