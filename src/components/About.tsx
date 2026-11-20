
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type Language = "en" | "pt";

const content = {
    en: {
        label: "02 / ABOUT ME",
        greeting: "Hello, I'm Ailton.",
        description:
            "I'm a software developer based in Recife, Brazil, with experience in IT operations and system development. I enjoy turning real-world problems into practical digital solutions.",
        information:
            "RECIFE, BRAZIL · INTERNET SYSTEMS · IT & DEVELOPMENT",
        languages: "PORTUGUESE · ENGLISH",
    },
    pt: {
        label: "02 / SOBRE MIM",
        greeting: "Olá, sou Ailton.",
        description:
            "Sou desenvolvedor de software, baseado em Recife, Brasil, com experiência em operações de TI e desenvolvimento de sistemas. Gosto de transformar problemas reais em soluções digitais práticas.",
        information:
            "RECIFE, BRASIL · SISTEMAS PARA INTERNET · TI E DESENVOLVIMENTO",
        languages: "PORTUGUÊS · INGLÊS",
    },
};

export default function About() {
    const [language, setLanguage] = useState<Language>("en");

    const text = content[language];

    return (
        <section
            id="about"
            className="scroll-mt-16 border-t border-[#303030] px-6 py-28 md:px-12 md:py-36"
        >
            <div className="mx-auto max-w-[1440px]">

                {/* Section header */}
                <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-neutral-500">
                        {text.label}
                    </span>

                    {/* Language selector */}
                    <div className="flex items-center gap-1 rounded-full border border-[#303030] p-1">
                        {(["en", "pt"] as const).map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setLanguage(item)}
                                aria-pressed={language === item}
                                className={`rounded-full px-3 py-1.5 text-[10px] tracking-wider transition-colors duration-300 ${language === item
                                    ? "bg-white text-black"
                                    : "text-neutral-500 hover:text-white"
                                    }`}
                            >
                                {item.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main content */}
                <div className="mt-16 grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">

                    {/* Personal photo */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                        className="group relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden bg-[#1b1b1b] md:mx-0"
                    >
                        <Image
                            src="/images/about.jpg"
                            alt="Ailton Santos"
                            fill
                            priority={true}
                            sizes="(max-width: 768px) 100vw, 440px"
                            className="object-cover object-center grayscale-0 transition-all duration-500 ease-in-out group-hover:grayscale"
                        />

                        <div className="absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-5">
                            <span className="text-xs tracking-[0.2em] text-white/80">
                                RECIFE, BRAZIL
                            </span>
                        </div>
                    </motion.div>

                    {/* Introduction */}
                    <motion.div
                        key={language}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-4xl font-medium tracking-[-0.06em] md:text-6xl">
                            {text.greeting}
                        </h2>

                        <p className="mt-8 text-base leading-[1.9] text-neutral-400 md:text-lg">
                            {text.description}
                        </p>

                        {/* Professional information */}
                        <div className="mt-14 border-t border-[#303030] pt-7">
                            <p className="text-[10px] leading-7 tracking-[0.12em] text-neutral-500 md:text-xs">
                                {text.information}
                            </p>

                            <p className="mt-2 text-[10px] tracking-[0.12em] text-neutral-500 md:text-xs">
                                {text.languages}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}