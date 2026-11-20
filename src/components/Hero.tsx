
"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center px-6 md:px-12">
            <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-8 pb-24 pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-[clamp(3.5rem,10vw,9rem)] font-medium leading-[0.9] tracking-[-0.075em]">
                        ACCODE
                    </h1>

                    <p className="mt-8 text-sm tracking-[0.08em] text-neutral-400 md:text-base">
                        INDEPENDENT SOFTWARE DEVELOPER
                    </p>
                </motion.div>

                <motion.a
                    href="#projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-3 pb-2 text-[10px] tracking-[0.15em] text-neutral-400 transition-colors hover:text-white md:text-xs"
                >
                    VIEW PROJECTS
                    <ArrowDownRight
                        size={16}
                        strokeWidth={1.2}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                </motion.a>
            </div>
        </section>
    );
}
