import { MessageSquare, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Community() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Join Our Community</h2>
          <p className="text-lg text-muted-foreground">
            Connect with thousands of learners worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg p-8 text-center">
            <div className="inline-block p-3 bg-primary bg-opacity-10 rounded-lg mb-4">
              <MessageSquare className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Discussion Forums</h3>
            <p className="text-muted-foreground mb-4">
              Ask questions, share insights, and learn from peer discussions on any topic.
            </p>
            <Button variant="outline">Join Forums</Button>
          </div>

          <div className="bg-background rounded-lg p-8 text-center">
            <div className="inline-block p-3 bg-accent bg-opacity-10 rounded-lg mb-4">
              <Users className="w-6 h-6 text-yellow-300" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Study Groups</h3>
            <p className="text-muted-foreground mb-4">
              Form or join study groups to collaborate and prepare together with peers.
            </p>
            <Button variant="outline">Find Groups</Button>
          </div>

          <div className="bg-background rounded-lg p-8 text-center">
            <div className="inline-block p-3 bg-primary bg-opacity-10 rounded-lg mb-4">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">Global Network</h3>
            <p className="text-muted-foreground mb-4">
              Connect with students from around the world and expand your learning horizons.
            </p>
            <Button variant="outline">Explore Network</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
