import { createFileRoute } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Rocket, BarChart3, Shield, Cpu, Globe, Zap, Code2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const projects = [
    { title: "System Scalability Initiative", description: "Architecture for handling 10x traffic spikes using serverless edge functions.", icon: <Rocket className="w-5 h-5" /> },
    { title: "Secure Auth Gateway", description: "Zero-trust authentication layer with multi-factor biometric integration.", icon: <Shield className="w-5 h-5" /> },
    { title: "Real-time Data Pipeline", description: "Low-latency processing engine for streaming financial telemetry.", icon: <Zap className="w-5 h-5" /> },
    { title: "Legacy Modernization", description: "Incremental migration strategy for monolithic systems to microservices.", icon: <Cpu className="w-5 h-5" /> },
    { title: "Distributed Consensus Engine", description: "Fault-tolerant synchronization primitive for edge computing nodes.", icon: <Globe className="w-5 h-5" /> },
    { title: "Automated QA Framework", description: "End-to-end testing suite with AI-driven visual regression detection.", icon: <Code2 className="w-5 h-5" /> },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Professional Google Cloud Developer",
    "Certified Kubernetes Administrator (CKA)",
    "Meta Front-End Developer Professional",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12 px-6 md:px-24 font-sans">
      <header className="max-w-4xl mx-auto mb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Technical Portfolio</h1>
        <p className="text-lg text-slate-600">Specializing in Scalable Infrastructure & Full-Stack Systems Architecture</p>
      </header>

      <main className="max-w-6xl mx-auto space-y-24">
        {/* Projects Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 border-b pb-2">
            <h2 className="text-2xl font-semibold">Proposed Projects</h2>
            <Badge variant="outline">Planned & Conceptual</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Card key={i} className="hover:shadow-md transition-shadow border-slate-200">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-700">{project.icon}</div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8 border-b pb-2">Technical Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{cert}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Impact/Stats Section */}
          <section>
            <h2 className="text-2xl font-semibold mb-8 border-b pb-2">Operational Impact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Performance Optimization</h3>
                  <p className="text-sm text-slate-600">Demonstrated ability to reduce system latency by optimizing database query execution and caching layers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <BarChart3 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Scalability Growth</h3>
                  <p className="text-sm text-slate-600">Architected systems capable of horizontal scaling to accommodate significant concurrent user increases.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-4xl mx-auto mt-32 text-center text-slate-400 text-sm border-t pt-8">
        <p>Built for technical review. Source code available upon request in professional settings.</p>
      </footer>
    </div>
  );
}
