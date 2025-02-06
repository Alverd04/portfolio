import { Book } from "lucide-react";
import Link from "next/link";

export default function ExperienceTimeline() {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-white">Resume</h2>
      <div className="h-[3px] bg-gradient-to-r from-green-600 to-green-800 w-16 rounded-xl mt-4" />
      <div className="max-w-3xl mt-8">
        <div className="flex items-center gap-3 mb-8">
          <Book className="w-6 h-6 text-green-500" />
          <h2 className="text-2xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative border-l border-zinc-800 pl-8 ml-3">
          {/* Fined */}
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Chief Technology Officer
              </h3>
              <Link
                target="_blank"
                href="https://fined.es/"
                className="text-zinc-400"
              >
                Fined
              </Link>
              <p className="text-green-500">Present</p>
              <p className="text-zinc-300 leading-relaxed">
                Leading the development of an innovative online course platform,
                overseeing both technical and strategic decisions. Managing a
                modern tech stack including NextJS, TypeScript, Supabase,
                Stripe, and Google Cloud to build a scalable and user-friendly
                learning experience. Driving team collaboration, feature
                development, and system architecture.
              </p>
            </div>
          </div>

          {/* Adevinta */}
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Frontend Engineer
              </h3>
              <Link
                target="_blank"
                href="https://www.adevinta.com/"
                className="text-zinc-400"
              >
                Adevinta
              </Link>
              <p className="text-green-500">Jul 2021 - Present</p>
              <p className="text-zinc-300">
                Worked on Fotocasa and Habitaclia, two major real estate
                marketplaces. Focused on frontend development with React,
                improving SEO, optimizing performance, and implementing scalable
                architectures. Led a full rebranding initiative and contributed
                to migrating legacy applications to modern frameworks.
              </p>
            </div>
          </div>

          {/* Bambaii */}
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Mobile Developer
              </h3>
              <Link
                href="https://bambai.es/"
                target="_blank"
                className="text-zinc-400"
              >
                Bambaii
              </Link>
              <p className="text-green-500">Jan 2020 - Dec 2022</p>
              <p className="text-zinc-300">
                Spearheaded the development of a mobile app for temporary home
                alarms using Flutter. Implemented key features such as real-time
                alerts, user role management, and historical data tracking.
                Integrated Firebase for authentication, cloud storage, and push
                notifications, ensuring a smooth and secure user experience.
              </p>
            </div>
          </div>

          {/* NTT Data */}
          <div className="relative mb-12">
            <div className="absolute -left-[35px] w-4 h-4 bg-green-500 rounded-full" />
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-white">
                Software Developer
              </h3>
              <Link
                href="https://www.nttdata.com/"
                target="_blank"
                className="text-zinc-400"
              >
                NTT Data
              </Link>
              <p className="text-green-500">Sep 2020 - Jan 2021</p>
              <p className="text-zinc-300">
                Part of the architecture team, specializing in backend
                development with Spring Boot and Java. Designed and built
                RESTful APIs, ensuring high-performance and scalable services.
                Worked with Angular on frontend applications, following best
                practices for maintainability and user experience. Gained deep
                experience in enterprise software design, cloud computing, and
                system optimization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
