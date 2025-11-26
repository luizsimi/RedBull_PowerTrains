import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useRef, useEffect } from 'react';

const stats = [
  { value: 1000, suffix: '+', label: 'Horsepower', color: 'from-blue-500 to-cyan-500' },
  { value: 350, suffix: 'km/h', label: 'Top Speed', color: 'from-purple-500 to-pink-500' },
  { value: 15000, suffix: '+', label: 'RPM', color: 'from-orange-500 to-red-500' },
  { value: 99, suffix: '%', label: 'Efficiency', color: 'from-green-500 to-emerald-500' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = count.set(value);
      return () => controls;
    }
  }, [isInView, value, count]);

  const spring = useSpring(count, { duration: 2000 });

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="relative group"
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-20 blur-2xl`}
        />

        {/* Number */}
        <div
          className={`mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
          style={{ transform: 'translateZ(30px)' }}
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} />
        </div>

        {/* Label */}
        <p className="text-gray-400" style={{ transform: 'translateZ(20px)' }}>
          {stat.label}
        </p>

        {/* 3D Glow Effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl`}
          style={{ transform: 'translateZ(-10px)' }}
        />
      </div>
    </motion.div>
  );
}

export function PerformanceStats() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="performance"
      ref={sectionRef}
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* 3D Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.5) 2px, transparent 2px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.5) 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(800px) rotateX(60deg) scale(2)',
            transformOrigin: 'center center',
          }}
        />
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
            className="inline-block px-4 py-2 border border-blue-500/50 rounded-full bg-blue-500/10 backdrop-blur-sm mb-6"
          >
            <span className="text-blue-400 text-sm">Performance Metrics</span>
          </motion.div>
          <h2 className="mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Unmatched Performance
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Numbers that define excellence in motorsport engineering
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* 3D Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative"
          style={{ perspective: '1000px' }}
        >
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-xl overflow-hidden">
            {/* Engine Visualization */}
            <div className="flex items-center justify-center">
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="relative w-64 h-64"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Core */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-50 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                
                {/* Rings */}
                {[0, 60, 120].map((rotation, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 border-4 border-blue-500/50 rounded-full"
                    style={{
                      transform: `rotateY(${rotation}deg) rotateX(60deg)`,
                    }}
                    animate={{
                      borderColor: [
                        'rgba(59, 130, 246, 0.5)',
                        'rgba(147, 51, 234, 0.5)',
                        'rgba(59, 130, 246, 0.5)',
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            <div className="text-center mt-8">
              <h3 className="text-white mb-2">V6 Hybrid Power Unit</h3>
              <p className="text-gray-400">
                The heart of championship-winning performance
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
