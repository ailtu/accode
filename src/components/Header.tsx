
"use client";

import { motion } from "motion/react";

const navigation = [
    { label: "PROJECTS", href: "#projects" },
    { label: "ABOUT", href: "#about" },
    { label: "CONTACT", href: "#contact" },
];

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 z-50 w-full border-b border-[#303030] bg-[#111111]/90 backdrop-blur-md"
        >
            <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-end gap-8 px-6 md:px-12">
                {navigation.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-[10px] tracking-[0.16em] text-neutral-400 transition-colors duration-300 hover:text-white md:text-xs"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </motion.header>
    );
}
