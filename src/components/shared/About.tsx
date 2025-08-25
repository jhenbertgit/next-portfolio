"use client";

import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>Prisma</li>
        <li>Redis</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of the People</li>
        <li>University of Iloilo</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript Essentials 1</li>
        <li>Mckinsey.org Forward Program</li>
        <li>Google Cloud Fundamentals: Core Infrastructure</li>
        <li>Managing Security in Google Cloud</li>
        <li>Operating Systems: Overview, Administration, and Security</li>
        <li>Cyber Incident Response</li>
        <li>Introduction to Generative AI</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 px-4 sm:py-16 sm:px-6 lg:px-16">
        {/* Image Section */}
        <div className="relative flex items-center justify-center w-full h-auto">
          <div className="p-[3px] rounded-3xl bg-gradient-to-br from-primary-700 to-secondary-700 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] max-w-full">
            <Image
              src="/images/about-image.png"
              width={500}
              height={500}
              alt="about"
              className="rounded-3xl object-cover bg-[#121212] w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-6 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-base text-justify lg:text-lg leading-relaxed">
            I architect performant web solutions that blend cutting-edge tools
            with client-centric development. My focus on Next.js ISR/SSR and
            Nest.js microservices ensures seamless user experiences, while
            Prisma migrations and Redis caching optimize backend stability.
            Let&apos;s transform your vision into a high-performance digital
            product — with 40% faster delivery cycles than traditional MERN
            stacks.
          </p>

          {/* Tab Buttons - Scrollable on small screens */}
          <div className="flex flex-row justify-start mt-8 space-x-4 overflow-x-auto pb-2 lg:overflow-visible">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
