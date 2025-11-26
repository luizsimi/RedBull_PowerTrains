import { motion, useInView } from 'motion/react';
import { Cpu, Zap, Gauge, Wind } from 'lucide-react';
import { useRef, useState } from 'react';

const technologies = [
  {
    icon: Cpu,
    title: 'Advanced Engine Control',
    description: 'State-of-the-art ECU systems optimizing performance in real-time with microsecond precision.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Hybrid Power Unit',
    description: 'Cutting-edge energy recovery systems delivering maximum power with unprecedented efficiency.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gauge,
    title: 'Performance Analytics',
    description: 'AI-powered telemetry processing millions of data points per second for optimal performance.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Wind,
    title: 'Aerodynamic Integration',
    description: 'Seamless powertrain-aero integration for reduced drag and enhanced cooling efficiency.',
    color: 'from-green-500 to-emerald-500',
  },
];

function TechCard({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? 5 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-20 blur-2xl`}
        />

        {/* Icon */}
        <motion.div
          animate={{
            rotateZ: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6 }}
          className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.color} mb-6`}
          style={{ transform: 'translateZ(50px)' }}
        >
          <tech.icon size={32} className="text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="mb-4 text-white">{tech.title}</h3>
        <p className="text-gray-400">{tech.description}</p>

        {/* 3D Border Effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} opacity-50`}
          style={{
            padding: '2px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function TechnologySection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      </div>

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
            <span className="text-purple-400 text-sm">Advanced Engineering</span>
          </motion.div>
          <h2 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Cutting-Edge Technology
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pushing the boundaries of what's possible in motorsport engineering
          </p>
        </motion.div>

        {/* Technology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <TechCard key={tech.title} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
