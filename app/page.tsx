import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Globe, Server } from "lucide-react";

const services = [
  {
    icon: <Smartphone className="w-12 h-12 text-primary" />,
    title: "Mobile Development",
    description:
      "Professional cross-platform applications development for iOS and Android devices.",
  },
  {
    icon: <Globe className="w-12 h-12 text-primary" />,
    title: "Web Development",
    description:
      "Creating responsive and modern web applications using the latest technologies.",
  },
  {
    icon: <Server className="w-12 h-12 text-primary" />,
    title: "Backend Development",
    description: "Building robust and scalable server-side solutions and APIs.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold text-white">About me</h2>
      <div className="h-[3px] bg-gradient-to-r from-green-600 to-green-800 w-16 rounded-xl" />
      <p className="text-zinc-300 leading-relaxed">
        I&apos;m Albert Font Fernández, a 24-year-old Full Stack Developer with
        expertise in React, TypeScript, Node.js, and cloud technologies. As the
        Chief Technology Officer at Fined, I lead the development of an online
        course platform, ensuring seamless user experiences with modern web
        technologies like Supabase, Stripe, and Tailwind CSS. I thrive on
        transforming complex challenges into simple, elegant, and intuitive
        solutions. Passionate about cutting-edge technologies, I&apos;m always
        eager to expand my knowledge and refine my skills. I emphasize
        scalability, maintainability, and performance, ensuring that the
        software I build is not just functional but also robust and adaptable.
        My goal is to develop applications that are efficient, user-friendly,
        and visually appealing, while adding a personal touch to create engaging
        digital experiences.
      </p>
      <h2 className="text-2xl font-bold text-white mt-8">
        What Can I do for your needs
      </h2>
      <p className="text-zinc-300 leading-relaxed">
        It is easier to entrust the work to the experts because they are able to
        provide the best results with reliable quality.
      </p>
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-zinc-900 border-zinc-800 shadow-[0_4px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[0_4px_40px_rgba(0,0,0,0.6)] hover:translate-y-[-2px]"
            >
              <CardContent className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-zinc-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
