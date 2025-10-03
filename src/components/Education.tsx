import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Science",
    institution: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in Software Engineering and Web Technologies",
    achievements: [
      "GPA: 3.9/4.0",
      "Dean's List - All semesters",
      "Thesis: Modern Web Application Architecture",
    ],
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2012 - 2016",
    description: "Foundation in Computer Science and Programming",
    achievements: [
      "GPA: 3.8/4.0",
      "President, Computer Science Club",
      "Winner, University Hackathon 2015",
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{edu.degree}</h3>
                      <p className="text-lg text-primary">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{edu.description}</p>

                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
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
