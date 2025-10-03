import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                I'm a passionate developer with over 5 years of experience in building
                modern web applications. My journey in tech started with a curiosity
                about how websites work, and it has evolved into a career I truly love.
              </p>
              <p className="text-lg text-muted-foreground">
                I specialize in React, TypeScript, and modern web technologies. I believe
                in writing clean, maintainable code and creating intuitive user
                experiences that make a difference.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge through
                technical blog posts and mentoring.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm always excited to work on challenging projects and collaborate with
                talented teams to build something amazing.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 shadow-card hover:shadow-elegant transition-all">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                Writing maintainable, scalable, and efficient code following best practices.
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all">
              <Palette className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating beautiful and intuitive user interfaces with attention to detail.
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-elegant transition-all">
              <Rocket className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-muted-foreground">
                Optimizing applications for speed and delivering exceptional user experiences.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
