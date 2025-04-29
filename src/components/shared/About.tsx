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
        <li>Google Cloud Fundamentals: Core Infrastructure</li>
        <li>Managing Security in Google Cloud</li>
        <li>Operating Systems: Overview, Administration, and Security</li>
        <li>Cyber Incident Response</li>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative flex items-center justify-center w-[504px] h-[504px]">
          <div className="p-[3px] rounded-3xl bg-gradient-to-br from-primary-700 to-secondary-700 shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <Image
              src="/images/about-image.png"
              width={500}
              height={500}
              alt="about"
              className="rounded-3xl object-cover bg-[#121212]"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base text-justify lg:text-lg">
            I architect performant web solutions that blend cutting-edge tools
            with client-centric development. My focus on Next.js ISR/SSR and
            Nest.js microservices ensures seamless user experiences, while
            Prisma migrations and Redis caching optimize backend stability.
            Let&apos;s transform your vision into a high-performance digital
            product - with 40% faster delivery cycles than traditional MERN
            stacks.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
