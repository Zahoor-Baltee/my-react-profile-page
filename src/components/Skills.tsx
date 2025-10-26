import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import constantData from '@/constant/constant.ts'


export function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {constantData.skills.map((category, index) => (
              <Card
                key={index}
                className="p-6 shadow-card hover:shadow-elegant transition-all"
              >
                <h3 className="text-2xl font-semibold mb-4 gradient-primary bg-clip-text text-white">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
