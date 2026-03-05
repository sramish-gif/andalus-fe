"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/home/CTA";

function AnimatedNumber({ target, inView }: { target: number; inView: boolean }) {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { mass: 1, stiffness: 40, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return unsubscribe;
  }, [spring]);

  return <>{display}</>;
}

const fontGoogle = '"Google Sans", sans-serif';

export default function PortfolioPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen text-foreground" style={{ fontFamily: fontGoogle, backgroundColor: 'var(--background)' }}>
      {/* Parallax Sections Wrapper */}
      <div className="relative">
        {/* Hero Section */}
        <section className="sticky top-0 z-10 relative min-h-screen flex flex-col justify-top overflow-hidden mt-55" style={{ backgroundColor: 'var(--background)' }}>
          <div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 2rem' }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-[-0.05em] font-medium mb-6"
              style={{ color: '#1a1a1a' }}
            >
              Explore our healthcare<br />
              <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic', color: '#B1A26B' }}>portfolio</span> of investments
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-base md:text-lg"
              style={{ color: 'rgba(0,0,0,0.5)' }}
            >
              From primary care to digital health, our portfolio drives real outcomes across the MENAP region.
            </motion.p>

            {/* Stats */}
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex justify-center items-end gap-10 lg:gap-16 mt-14"
            >
              <div className="flex flex-col items-center">
                <span className="tracking-[-0.02em] font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1 }}>
                  <AnimatedNumber target={20} inView={inView} />+
                </span>
                <span className="text-foreground/50 text-sm mt-1">investments</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="tracking-[-0.02em] font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1 }}>
                  <AnimatedNumber target={5} inView={inView} />+
                </span>
                <span className="text-foreground/50 text-sm mt-1">sectors across MENAP</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="tracking-[-0.02em] font-serif" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1 }}>
                  <AnimatedNumber target={10} inView={inView} />+
                </span>
                <span className="text-foreground/50 text-sm mt-1">years in the industry</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Project 01 */}
        <section className="sticky top-0 z-20 relative min-h-screen text-foreground" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex flex-col md:flex-row min-h-screen">
            <div className="relative flex flex-col justify-between p-10 md:p-14 md:w-[40%] min-h-[50vh] md:min-h-screen">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/50"
                >
                  Featured Project
                </motion.span>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.08, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="tracking-[-0.04em] mt-2"
                  style={{ fontSize: "clamp(5rem, 10vw, 9rem)", fontWeight: 800, lineHeight: 1 }}
                >
                  01
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-foreground/30 text-2xl my-6"
              >
                +
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="tracking-[0.02em] mb-1 text-2xl font-semibold">
                  Novacare Hospitals
                </h2>
                <p className="text-foreground/40 mb-3 text-sm">
                  <span className="font-semibold">Subsector:</span> Acute care multi-specialty hospitals
                </p>
                <p className="text-foreground/50 max-w-md mb-10 text-sm leading-relaxed">
                  Novacare is a 250-bed tertiary hospital in Islamabad, Pakistan
                  built to accreditation standards with Imperial College Healthcare,
                  integrating AI diagnostics and a nursing academy to elevate
                  regional care delivery.
                </p>
              </motion.div>
            </div>

            <div className="relative md:w-[60%] flex items-center py-9 pr-9">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "calc(100vh - 4.5rem)" }}>
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600"
                  alt="Novacare Hospitals"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Project 02 */}
        <section className="sticky top-0 z-30 relative min-h-screen text-foreground" style={{ backgroundColor: '#ffffff' }}>
          <div className="flex flex-col md:flex-row min-h-screen">
            <div className="relative flex flex-col justify-between p-10 md:p-14 md:w-[40%] min-h-[50vh] md:min-h-screen">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-[11px] font-bold tracking-[0.2em] uppercase text-foreground/50"
                >
                  Featured Project
                </motion.span>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.08, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="tracking-[-0.04em] mt-2"
                  style={{ fontSize: "clamp(5rem, 10vw, 9rem)", fontWeight: 800, lineHeight: 1 }}
                >
                  02
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-foreground/30 text-2xl my-6"
              >
                +
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="tracking-[0.02em] mb-6 text-2xl font-semibold">
                  MedTech Diagnostics
                </h2>
                <p className="text-foreground/50 max-w-md mb-10 text-sm leading-relaxed">
                  MedTech Diagnostics is a precision-driven venture bringing
                  cutting-edge laboratory and imaging services to underserved
                  markets. With AI-powered analysis and rapid turnaround, the
                  project is redefining diagnostic accuracy and accessibility
                  across the region.
                </p>
              </motion.div>
            </div>

            <div className="relative md:w-[60%] flex items-center py-9 pr-9">
              <div className="relative w-full rounded-xl overflow-hidden" style={{ height: "calc(100vh - 4.5rem)" }}>
                <motion.img
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1600"
                  alt="MedTech Diagnostics"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
