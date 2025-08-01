import { TrendingUp, Users, Settings } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: TrendingUp,
      title: "Product Management",
      color: "bg-primary",
      skills: ["Backlog Management", "Product Discovery", "Product Roadmapping", "A/B Testing"],
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      icon: Users,
      title: "Research & Analysis",
      color: "bg-accent",
      skills: ["User Interviews", "Market Research", "Competitive Analysis", "SQL (Analytics)"],
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
    {
      icon: Settings,
      title: "Methodologies",
      color: "bg-green-500",
      skills: ["Agile Methodologies", "Scrum", "Team Management", "Remote Teams"],
      bgColor: "bg-green-100",
      textColor: "text-green-700",
    },
  ];

  const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Advanced" },
    { name: "Spanish", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-secondary rounded-xl p-8 border border-border">
              <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-6`}>
                <category.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-block ${category.bgColor} ${category.textColor} px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 gradient-accent rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6 text-center">Languages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {languages.map((language, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{language.name}</div>
                <div className="text-primary-foreground/80">{language.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
