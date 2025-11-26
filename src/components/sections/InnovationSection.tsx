import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { Rocket, Target, Trophy, Users } from 'lucide-react';
import { useRef } from 'react';

const innovations = [
  {
    icon: Rocket,
    title: 'Future-Ready Technology',
    description: 'Pioneering sustainable powertrain solutions for the next generation of motorsport.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Every component designed and manufactured to the highest standards of excellence.',
  },
  {
    icon: Trophy,
    title: 'Championship DNA',
    description: 'Built on decades of racing success and continuous innovation at the highest level.',
  },
  {
    icon: Users,
    title: 'World-Class Team',
    description: 'The best engineers and designers working together to push boundaries.',
  },
];

export function InnovationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section
      id="innovation"
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-black via-purple-950/20 to-black overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl"></div>
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 border border-purple-500/50 rounded-full bg-purple-500/10 backdrop-blur-sm mb-6"
          >
            <span className="text-purple-400 text-sm">Innovation & Excellence</span>
          </motion.div>
          <h2 className="mb-6 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            Driving Innovation Forward
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combining racing heritage with cutting-edge technology
          </p>
        </motion.div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {innovations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 mb-6"
              >
                <item.icon size={32} className="text-white" />
              </motion.div>
              <h3 className="text-white mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-white/10 backdrop-blur-xl overflow-hidden text-center"
        >
          {/* Animated Background */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-3xl"
          />

          <div className="relative z-10">
            <h2 className="text-white mb-6">Join Our Team</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the future of motorsport engineering. We're looking for talented
              individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-black rounded-full hover:shadow-lg hover:shadow-white/50 transition-shadow"
              >
                View Careers
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/30 text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
