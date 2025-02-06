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
      <div className="h-2 bg-gradient-to-r from-green-600 to-green-800 w-16 rounded-xl" />
      <p className="text-white text-lg">
        I&apos;m Flutter Developer, Android Developer and Tech Educator who
        provides services for digital programming and design content needs, for
        all businesses with more than 2 years of experience. I enjoy turning
        complex problems into simple, beautiful and intuitive solutions. I am
        very much interested in new technologies and always eager to learn new
        technologies which enhance my knowledge. I always try to use
        Object-Oriented Techniques to make the project Generic which can be used
        not only at one time but only the slight modification in my project that
        can be used for different purposes. My job is to build your applications
        so that it is functional, user-friendly and attractive as well.
        Moreover, I add personal touch to your product and make sure that is
        eye-catching and easy to use.
      </p>
      <h2 className="text-2xl font-bold text-white mt-8">
        What Can I do for your needs
      </h2>
      <p className="text-white text-lg">
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
