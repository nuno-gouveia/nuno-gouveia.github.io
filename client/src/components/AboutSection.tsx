export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-foreground">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 8 years of experience in product management, I've evolved from a Quality Analyst to a Lead Product Owner, gaining deep expertise in AI platforms, analytics, and product strategy.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Currently at OutSystems, I lead product strategy for AI Platform and Analytics & Insights teams, focusing on enabling customers to achieve observability and intelligent analytics for their applications.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines technical understanding with user-centered design thinking, ensuring products not only solve real problems but also deliver exceptional user experiences.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Location</h4>
                <p className="text-muted-foreground">Porto, Portugal</p>
              </div>
              <div className="bg-secondary p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Experience</h4>
                <p className="text-muted-foreground">8+ Years</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Professional headshot" 
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">200k+</div>
                <div className="text-sm opacity-90">MAU Managed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
