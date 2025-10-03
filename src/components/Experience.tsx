import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise-level web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.",
    highlights: [
      "Architected and deployed microservices infrastructure",
      "Improved application performance by 40%",
      "Led team of 5 developers",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and RESTful APIs. Collaborated with cross-functional teams to deliver high-quality products.",
    highlights: [
      "Built 10+ production-ready applications",
      "Implemented CI/CD pipelines",
      "Reduced bugs by 30% through comprehensive testing",
    ],
  },
  {
    title: "Frontend Developer",
    company: "StartUp Ventures",
    period: "2018 - 2020",
    description:
      "Created engaging user interfaces and improved website performance. Worked closely with designers to implement pixel-perfect designs.",
    highlights: [
      "Redesigned company website, increasing conversions by 25%",
      "Implemented responsive design across all platforms",
      "Optimized load times by 50%",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
