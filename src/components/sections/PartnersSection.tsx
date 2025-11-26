import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function PartnersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-[#0a1628] overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0c1a2e] to-[#0a1628]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#c8102e] text-sm uppercase tracking-widest block mb-4"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Parceiros & Patrocinadores
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            Juntos Pela <span className="text-[#c8102e]">Vitória</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Orgulhosamente apoiados por marcas líderes mundiais que compartilham nossa paixão pela excelência
          </motion.p>
        </motion.div>

        {/* Partners Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#c8102e]/20 via-transparent to-[#c8102e]/20 blur-3xl opacity-50" />
          
          {/* Image Container */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden"
          >
            <img
              src="/partners-banner.png"
              alt="Red Bull Racing Partners - Oracle, TAG Heuer, Mobil, Honda, Visa, Pirelli e outros parceiros"
              className="w-full h-auto object-contain"
            />
            
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/30 via-transparent to-[#0a1628]/30 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Bottom Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-12 h-[2px] bg-gradient-to-r from-transparent via-[#c8102e] to-transparent"
          style={{ transformOrigin: 'center' }}
        />
      </div>
    </section>
  );
}

