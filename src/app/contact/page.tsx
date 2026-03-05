"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "97%"]);

  return (
    <div ref={containerRef} className="min-h-screen text-foreground overflow-y-auto h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Hero Heading */}
      <div className="text-center" style={{ maxWidth: '1000px', margin: '0 auto', padding: '11rem 2rem 10rem' }}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.05] tracking-[-0.05em] font-medium mb-6"
          style={{ color: '#1a1a1a' }}
        >
          Get In Touch<br />
          <span style={{ fontFamily: '"Lora", serif', fontStyle: 'italic', color: '#B1A26B' }}>With Us</span> Today
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg"
          style={{ color: 'rgba(0,0,0,0.5)' }}
        >
          Whether you're exploring healthcare investment opportunities or seeking growth capital, we're here to help.
        </motion.p>
      </div>

      {/* Contact Info + Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="px-10 pb-24"
      >
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left — Contact Info */}
          <div className="flex flex-1">
            {/* Animated vertical line with dot */}
            <div ref={timelineRef} className="relative mr-8 w-2.5 shrink-0">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2" />
              <motion.div
                className="absolute left-1/2 top-0 w-px bg-[#B1A26B] -translate-x-1/2 origin-top"
                style={{ height: dotTop }}
              />
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#B1A26B]"
                style={{ top: dotTop }}
              />
            </div>

            {/* Info content */}
            <div className="max-w-md" style={{ fontFamily: '"Google Sans", sans-serif' }}>
              <p
                className="text-foreground/70 mb-16"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: 1.6,
                  fontWeight: 500,
                }}
              >
                Whether you&rsquo;re exploring healthcare investment opportunities,
                seeking growth capital, or looking to transform care delivery in the
                MENAP region, we&rsquo;re here to help. Let&rsquo;s discuss how Andalus
                can support your vision.
              </p>

              <div className="mb-10">
                <span className="block text-foreground/40 text-sm mb-1">Email</span>
                <a
                  href="mailto:info@andalusholding.com"
                  className="text-foreground hover:text-foreground/70 transition-colors text-base"
                >
                  info@andalusholding.com
                </a>
              </div>

              <div className="mb-10">
                <span className="block text-foreground/40 text-sm mb-1">Phone</span>
                <a
                  href="tel:+97126944500"
                  className="text-foreground hover:text-foreground/70 transition-colors text-base"
                >
                  +971 2 694 4500
                </a>
              </div>

              <div>
                <span className="block text-foreground/40 text-sm mb-1">Address</span>
                <address className="not-italic text-foreground leading-relaxed text-base">
                  2473, Al Sila Tower,
                  <br />
                  ADGM Square, Al Maryah Island,
                  <br />
                  Abu Dhabi, United Arab Emirates
                </address>
              </div>
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="flex-[1.2] max-w-2xl" style={{ fontFamily: '"Google Sans", sans-serif' }}>
            <h2
              className="text-foreground tracking-[-0.02em] mb-10"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              What are you waiting for? Let&rsquo;s talk&hellip;
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name*"
                  required
                  className="w-full bg-[#f4f4f4] border-none rounded-xl px-6 py-5 text-foreground placeholder:text-foreground/30 text-[15px] outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                  style={{ fontFamily: '"Google Sans", sans-serif' }}
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  required
                  className="w-full bg-[#f4f4f4] border-none rounded-xl px-6 py-5 text-foreground placeholder:text-foreground/30 text-[15px] outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                  style={{ fontFamily: '"Google Sans", sans-serif' }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="w-full bg-[#f4f4f4] border-none rounded-xl px-6 py-5 text-foreground placeholder:text-foreground/30 text-[15px] outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                  style={{ fontFamily: '"Google Sans", sans-serif' }}
                />
                <input
                  type="text"
                  placeholder="Subject*"
                  required
                  className="w-full bg-[#f4f4f4] border-none rounded-xl px-6 py-5 text-foreground placeholder:text-foreground/30 text-[15px] outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                  style={{ fontFamily: '"Google Sans", sans-serif' }}
                />
              </div>

              <textarea
                placeholder="Write your message..."
                rows={7}
                className="w-full bg-[#f4f4f4] border-none rounded-xl px-6 py-5 text-foreground placeholder:text-foreground/30 text-[15px] outline-none focus:ring-2 focus:ring-black/10 transition-shadow resize-none"
                style={{ fontFamily: '"Google Sans", sans-serif' }}
              />

              <button
                type="submit"
                className="w-full bg-foreground text-white text-[15px] font-semibold tracking-wide py-5 rounded-xl hover:bg-foreground/85 transition-colors cursor-pointer"
                style={{ fontFamily: '"Google Sans", sans-serif' }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Google Map */}
      <div className="w-full h-[450px] group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.234567890123!2d54.3266!3d24.5022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6600f8c0cf59%3A0x3c3730f3c5c9b3e8!2sAl%20Sila%20Tower%2C%20ADGM%20Square%2C%20Al%20Maryah%20Island%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          className="grayscale transition-[filter] duration-500 ease-out group-hover:grayscale-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Al Sila Tower, ADGM Square, Al Maryah Island, Abu Dhabi"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
