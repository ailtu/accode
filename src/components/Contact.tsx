
"use client";

import { motion } from "motion/react";

import {
    ArrowUpRight,
    BriefcaseBusiness,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa6";

const contacts = [
    {
        name: "99Freelas",
        description: "Freelance opportunities",
        icon: BriefcaseBusiness,
        href: "https://www.99freelas.com.br/user/ailtonasantos",
    },
    {
        name: "GitHub",
        description: "Projects and repositories",
        icon: FaGithub,
        href: "https://github.com/ailtu",
    },
    {
        name: "LinkedIn",
        description: "Professional network",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/ailton-santos-7987a51a2/",
    },
    {
        name: "Instagram",
        description: "Professional profile",
        icon: FaInstagram,
        href: "", // TODO: Add your professional Instagram URL
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="scroll-mt-16 border-t border-[#303030] px-6 py-28 md:px-12 md:py-36"
        >
            <div className="mx-auto max-w-[1440px]">

                <span className="text-xs tracking-[0.2em] text-neutral-500">
                    03 / CONTACT
                </span>

                <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">

                    {/* Main message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.07em] md:text-7xl">
                            Let&apos;s work
                            <br />
                            together.
                        </h2>

                        <p className="mt-8 max-w-sm text-sm leading-relaxed text-neutral-400 md:text-base">
                            Tem um projeto em mente? Adoraria ouvir mais a respeito.
                            Vamos criar algo significativo.
                        </p>
                    </motion.div>

                    {/* Contact links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="flex flex-col"
                    >
                        {contacts.map((item) => {
                            const Icon = item.icon;
                            const isAvailable = Boolean(item.href);

                            const content = (
                                <>
                                    <div className="flex items-center gap-5">
                                        <Icon
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-neutral-500 transition-colors duration-300 group-hover:text-white"
                                        />

                                        <div>
                                            <h3 className="text-base text-neutral-200">
                                                {item.name}
                                            </h3>

                                            <p className="mt-1 text-xs text-neutral-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {isAvailable && (
                                        <ArrowUpRight
                                            size={20}
                                            strokeWidth={1.4}
                                            className="text-neutral-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                                        />
                                    )}
                                </>
                            );

                            return isAvailable ? (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-between border-b border-[#303030] py-7 transition-colors duration-300 hover:border-white"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div
                                    key={item.name}
                                    aria-disabled="true"
                                    className="group flex cursor-default items-center justify-between border-b border-[#303030] py-7 opacity-50"
                                >
                                    {content}
                                </div>
                            );
                        })}
                    </motion.div>

                </div>

                {/* Minimal footer */}
                <footer className="mt-32 flex flex-col justify-between gap-4 border-t border-[#303030] pt-6 md:flex-row">
                    <span className="text-xs tracking-[0.15em] text-neutral-500">
                        ACCODE
                    </span>

                    <span className="text-xs text-neutral-500">
                        RECIFE, BRAZIL
                    </span>

                    <span className="text-xs text-neutral-500">
                        © 2026 ACCODE
                    </span>
                </footer>

            </div>
        </section>
    );
}