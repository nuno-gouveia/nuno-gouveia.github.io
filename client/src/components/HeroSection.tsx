import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const downloadCV = () => {
    // Create a download link for the CV
    const link = document.createElement('a');
    link.href = '/assets/CV_Nuno_Gouveia.pdf';
    link.download = 'CV_Nuno_Gouveia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-20 pb-16 gradient-primary text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-accent">Nuno Gouveia</span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-primary-foreground/80">
            Lead Product Owner & AI Platform Expert
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/80 leading-relaxed">
            Passionate about building intelligent products that drive business value. Currently leading AI Platform and Analytics & Insights teams at OutSystems, helping customers achieve observability and intelligent analytics for their applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-background text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors duration-200"
            >
              Get In Touch
            </Button>
            <Button
              onClick={downloadCV}
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
