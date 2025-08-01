import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const certifications = [
    { name: "CSM & CSPO", issuer: "Scrum Alliance" },
    { name: "Data Engineering Essentials", issuer: "IBM" },
    { name: "AI for Everyone & Generative AI for Everyone", issuer: "DeepLearning.AI" },
    { name: "How to Manage a Remote Team", issuer: "GitLab" },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Education</h3>
            <div className="border-l-4 border-primary pl-6">
              <span className="text-sm text-accent font-semibold">2007 - 2012</span>
              <h4 className="text-xl font-bold text-foreground mt-1 mb-2">Masters in Software Engineering</h4>
              <p className="text-muted-foreground">Faculty of Engineering, University of Porto</p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
              <Award className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.name}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
