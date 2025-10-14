"use client";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

export default function RootClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <motion.main
      key={pathname}                // remount on route change
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="pt-16"             // match your fixed navbar height
    >
      {children}
    </motion.main>
  );
}
