"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export default function PageTranstion({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  return (
    <AnimatePresence>
      <div className="" key={path}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
