export default function ExperienceSection() {
  const experiences = [
    {
      period: "Oct 2021 - Present",
      title: "Lead Product Owner",
      company: "OutSystems",
      description: "Product Owner for the AI Platform and Analytics & Insights teams. Currently working to enable OutSystems customers to achieve observability and intelligent analytics for their applications. Responsible for planning the team roadmap and coordinating multi-team initiatives.",
      isLeft: true,
      logo: "https://www.outsystems.com/Forge/resourceCaptionImage?ResourceId=566",
    },
    {
      period: "May 2019 - Oct 2021",
      title: "Senior Product Owner",
      company: "Kelvin Inc",
      description: "Product Owner for the frontend squads in the Kelvin Engineering team. Working across Product, Design and Engineering from product discovery, through the different phases of the design process, to the coordination of the development teams, including people management.",
      isLeft: false,
      logo: "https://avatars.githubusercontent.com/u/42174016?s=200&v=4",
    },
    {
      period: "July 2018 - May 2019",
      title: "Senior Product Manager",
      company: "Fever Labs",
      description: "Product Manager for iOS and Android apps (200k+ MAU). Collaborated with Engineers and UX through the full lifecycle of new features, from user research and competitor analysis to managing delivery and tracking performance via A/B testing.",
      isLeft: true,
      logo: "https://feverup.com/m/_nuxt/img/logotipo-fever-horizontal-positive.90daba7.svg",
    },
    {
      period: "Mar 2016 - June 2018",
      title: "Product Owner",
      company: "Blip (Flutter Entertainment Group)",
      description: "Product Owner working integrated in 2 Scrum teams. Projects in mobile (iOS & Android) and Desktop web applications for Betfair and Paddy Power.",
      isLeft: false,
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Betfair-Logo.png",
    },
    {
      period: "Jul 2013 - Mar 2016",
      title: "Quality Analyst",
      company: "Blip (Flutter Entertainment Group)",
      description: "Exploratory and Automated testing for Betfair Exchange web application.",
      isLeft: true,
      logo: "https://logos-world.net/wp-content/uploads/2021/11/Betfair-Logo.png",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Work Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-slate-400"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center mb-4">
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-slate-500 rounded-full border-4 border-background shadow-lg"></div>
                <div className={`ml-16 md:ml-0 ${experience.isLeft ? 'md:w-5/12 md:pr-8' : 'md:w-5/12 md:ml-auto md:pl-8'}`}>
                  <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="text-sm text-accent font-semibold">{experience.period}</span>
                        <h3 className="text-xl font-bold text-foreground mt-2 mb-1">{experience.title}</h3>
                        <h4 className="text-lg text-primary font-semibold mb-3">{experience.company}</h4>
                      </div>
                      <div className="w-12 h-12 ml-4 flex-shrink-0">
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`}
                          className="w-full h-full object-contain rounded-lg bg-white p-1"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.innerHTML = `<div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center"><span class="text-white font-bold text-xs">${experience.company.charAt(0)}</span></div>`;
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-muted-foreground">{experience.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
