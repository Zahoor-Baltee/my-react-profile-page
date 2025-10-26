import { Card } from "@/components/ui/card";
import { Code2, Palette, Rocket } from "lucide-react";
import constantData from '@/constant/constant.ts'
export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                {constantData.aboutme.description1}
              </p>
              <p className="text-lg text-muted-foreground">
                {constantData.aboutme.description2}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">
                {constantData.aboutme.description3}
              </p>
              <p className="text-lg text-muted-foreground">
                {constantData.aboutme.description4}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {constantData.aboutme.tilesData.map((e, i) => (
              <Card key={i} className="p-6 shadow-card hover:shadow-elegant transition-all">
                <Code2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
                <p className="text-muted-foreground">
                  {e.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
