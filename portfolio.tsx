"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

/* Smooth spring-based animated counter */
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

export default function PortfolioPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(statsRef, { once: true, margin: "-50px" });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
    <div className="bg-white min-h-screen text-foreground">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[68px]">
        <Link href="/" className="relative shrink-0 h-8">
          <img
            src="/assets/images/logo-black.svg"
            alt="Andalus"
            className="h-full w-auto"
          />
        </Link>
        <div className="hidden sm:flex items-center gap-7 text-[10.5px] font-bold tracking-[0.12em] uppercase text-foreground">
          <Link href="/" className="hover:opacity-60 transition-opacity duration-200">
            Home
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity duration-200">
            About
          </Link>
          <Link href="#" className="hover:opacity-60 transition-opacity duration-200">
            Team
          </Link>
          <Link href="/portfolio" className="opacity-60">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:opacity-60 transition-opacity duration-200">
            Contact
          </Link>
        </div>
      </nav>

      {/* Parallax Sections Wrapper */}
      <div className="relative">
      {/* Hero Section */}
      <section className="sticky top-0 z-10 relative min-h-screen flex flex-col justify-between px-10 pt-28 pb-16 overflow-hidden bg-white">

        {/* Large heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h1
            className="tracking-[-0.03em]"
            style={{
              font: "800 clamp(4.5rem, 14vw, 12rem)/0.95 var(--font-manrope), sans-serif",
            }}
          >
            Portfolio
          </h1>
        </motion.div>

        {/* Bottom section — stats left, description right */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative z-10 flex flex-col tb:flex-row items-start tb:items-end justify-between gap-12 mt-auto"
        >
          {/* Stats */}
          <div className="flex items-end gap-6 tb:gap-10">
            {/* Stat 1 */}
            <div className="flex items-baseline gap-2">
              <span
                className="tracking-[-0.02em]"
                style={{
                  font: "700 clamp(3rem, 7vw, 5.5rem)/1 var(--font-manrope), sans-serif",
                }}
              >
                <AnimatedNumber target={20} inView={inView} />+
              </span>
              <span
                className="text-foreground/50"
                style={{
                  font: "var(--font-b2)",
                }}
              >
                investments
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex items-baseline gap-2">
              <span
                className="tracking-[-0.02em]"
                style={{
                  font: "700 clamp(3rem, 7vw, 5.5rem)/1 var(--font-manrope), sans-serif",
                }}
              >
                <AnimatedNumber target={5} inView={inView} />+
              </span>
              <span
                className="text-foreground/50"
                style={{
                  font: "var(--font-b2)",
                }}
              >
                sectors across MENAP
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex items-baseline gap-2">
              <span
                className="tracking-[-0.02em]"
                style={{
                  font: "700 clamp(3rem, 7vw, 5.5rem)/1 var(--font-manrope), sans-serif",
                }}
              >
                <AnimatedNumber target={10} inView={inView} />+
              </span>
              <span
                className="text-foreground/50"
                style={{
                  font: "var(--font-b2)",
                }}
              >
                years in the industry
              </span>
            </div>
          </div>

          {/* Description text */}
          <div
            className="max-w-lg tb:max-w-xl tb:text-right"
            style={{
              font: "500 clamp(1.25rem, 2.5vw, 2rem)/1.3 var(--font-inter), sans-serif",
            }}
          >
            <p className="tracking-[-0.01em]">
              From primary care to digital health,
              <br />
              our portfolio drives real outcomes.
              <br />
              Explore our investments below.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Featured Project 01 */}
      <section className="sticky top-0 z-20 relative min-h-screen bg-white text-foreground">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left — Project Info */}
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
                style={{
                  font: "800 clamp(5rem, 10vw, 9rem)/1 var(--font-manrope), sans-serif",
                }}
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
              <h2
                className="tracking-[0.02em] mb-1"
                style={{
                  font: "var(--font-h3)",
                }}
              >
                Novacare Hospitals
              </h2>
              <p
                className="text-foreground/40 mb-3"
                style={{
                  font: "var(--font-b2)",
                }}
              >
                <span className="font-semibold">Subsector:</span> Acute care multi-specialty hospitals
              </p>
              <p
                className="text-foreground/50 max-w-md mb-10"
                style={{
                  font: "var(--font-b2)",
                }}
              >
                Novacare is a 250-bed tertiary hospital in Islamabad, Pakistan
                built to accreditation standards with Imperial College Healthcare,
                integrating AI diagnostics and a nursing academy to elevate
                regional care delivery.
              </p>
            </motion.div>
          </div>

          {/* Right — Project Image */}
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
      <section className="sticky top-0 z-30 relative min-h-screen bg-white text-foreground">
        <div className="flex flex-col md:flex-row min-h-screen">
          {/* Left — Project Info */}
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
                style={{
                  font: "800 clamp(5rem, 10vw, 9rem)/1 var(--font-manrope), sans-serif",
                }}
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
              <h2
                className="tracking-[0.02em] mb-6"
                style={{
                  font: "var(--font-h3)",
                }}
              >
                MedTech Diagnostics
              </h2>
              <p
                className="text-foreground/50 max-w-md mb-10"
                style={{
                  font: "var(--font-b2)",
                }}
              >
                MedTech Diagnostics is a precision-driven venture bringing
                cutting-edge laboratory and imaging services to underserved
                markets. With AI-powered analysis and rapid turnaround, the
                project is redefining diagnostic accuracy and accessibility
                across the region.
              </p>
            </motion.div>
          </div>

          {/* Right — Project Image */}
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
      <section className="relative z-40 bg-[#1a1a1a] py-24 text-center">
        <h2
          className="text-white tracking-[0.02em] mb-4"
          style={{
            font: "var(--font-h3)",
          }}
        >
          Ready to Partner With Us?
        </h2>
        <p
          className="text-white/50 mb-10"
          style={{
            font: "var(--font-b2)",
          }}
        >
          Join us in building the future of healthcare across the MENAP region
        </p>
        <Link
          href="/contact"
          className="inline-block border border-white text-white text-[13px] font-medium tracking-wide px-10 py-3.5 rounded-full hover:bg-white hover:text-[#1a1a1a] transition-colors duration-200"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
