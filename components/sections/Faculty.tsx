export function Faculty() {
  const facultyMembers = [
    {
      name: 'Prof. John Smith',
      subject: 'Mathematics',
      bio: '20+ years of teaching experience',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Sarah Johnson',
      subject: 'Physics',
      bio: 'PhD from Cambridge University',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Prof. Michael Chen',
      subject: 'Chemistry',
      bio: 'Research scientist and educator',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Emily Davis',
      subject: 'Biology',
      bio: 'Published researcher in biochemistry',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    {
      name: 'Prof. Robert Wilson',
      subject: 'Literature',
      bio: 'English literature expert',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Dr. Amanda Thompson',
      subject: 'History',
      bio: 'Historian with global perspectives',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Faculty</h2>
          <p className="text-lg text-muted-foreground">
            Learn from the best minds in education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-primary font-medium mb-2">{member.subject}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
