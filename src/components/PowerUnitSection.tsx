import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, Gauge, Thermometer, Cpu } from 'lucide-react';
import facilityImage from 'figma:asset/43daea929ce4f49fffcfe6bf8263d6a34b78c22b.png';
import f1Car from 'figma:asset/8e2d95553ade404c0120d724a8c11ff98cc619a8.png';

const features = [
  {
    icon: Zap,
    title: 'Tecnologia Híbrida',
    description: 'Sistemas avançados de recuperação de energia para máxima eficiência',
  },
  {
    icon: Gauge,
    title: 'Performance de Pico',
    description: 'Mais de 1000 cavalos de potência com confiabilidade excepcional',
  },
  {
    icon: Thermometer,
    title: 'Gestão Térmica',
    description: 'Soluções de resfriamento de ponta para temperaturas ideais',
  },
  {
    icon: Cpu,
    title: 'Integração Digital',
    description: 'Processamento de dados em tempo real e otimização de performance',
  },
];

export function PowerUnitSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-100px']);

  return (
    <section
      id="power-unit"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a1628] overflow-hidden"
    >
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0 opacity-20">
        <img
          src={facilityImage}
          alt="Red Bull Powertrains Facility"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0a1628]/95 to-[#0a1628]"></div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#c8102e] text-sm uppercase tracking-widest block mb-6"
          >
            Tecnologia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white mb-8"
          >
            A POWER UNIT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Nossa POWER UNIT de Fórmula 1 representa o equilíbrio perfeito entre potência bruta,
            eficiência e confiabilidade—projetada para competir no mais alto nível.
          </motion.p>
        </motion.div>

        {/* 3D Engine Visualization - Advanced Tech Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-20 relative"
          style={{ perspective: '2000px' }}
        >
          {/* Holographic Grid Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ 
                backgroundPosition: ['0px 0px', '0px 100px'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(200, 16, 46, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200, 16, 46, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] mx-auto overflow-hidden">
            
            {/* Scan Line Effect */}
            <motion.div
              animate={{ top: ['-10%', '110%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute left-0 right-0 h-1 z-30 pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(200, 16, 46, 0.8), rgba(0, 200, 255, 0.8), transparent)',
                boxShadow: '0 0 20px rgba(200, 16, 46, 0.5), 0 0 40px rgba(0, 200, 255, 0.3)',
              }}
            />

            {/* Energy Core Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-40 md:w-64 h-40 md:h-64 bg-gradient-to-br from-[#c8102e] via-[#ff4060] to-[#00c8ff] rounded-full blur-3xl"
              />
            </div>

            {/* Rotating Tech Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                  className="absolute rounded-full"
                  style={{
                    width: `${200 + i * 60}px`,
                    height: `${200 + i * 60}px`,
                    border: `1px solid rgba(200, 16, 46, ${0.6 - i * 0.15})`,
                    boxShadow: `0 0 15px rgba(200, 16, 46, ${0.3 - i * 0.08})`,
                  }}
                >
                  {/* Tech Nodes on Rings */}
                  {[0, 90, 180, 270].map((deg) => (
                    <motion.div
                      key={deg}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: deg / 360 }}
                      className="absolute w-2 h-2 bg-[#00c8ff] rounded-full"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${deg}deg) translateX(${100 + i * 30}px) translateY(-50%)`,
                        boxShadow: '0 0 10px #00c8ff',
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Digital Circuit Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#c8102e" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              {[
                { x1: '10%', y1: '30%', x2: '30%', y2: '45%' },
                { x1: '90%', y1: '30%', x2: '70%', y2: '45%' },
                { x1: '10%', y1: '70%', x2: '30%', y2: '55%' },
                { x1: '90%', y1: '70%', x2: '70%', y2: '55%' },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="url(#circuitGradient)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: [0.3, 0.8, 0.3] } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
            </svg>

            {/* HUD Data Panels - Left */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 space-y-2 md:space-y-4 z-20"
            >
              {[
                { label: 'RPM', value: '15,000', unit: 'rpm', color: '#c8102e' },
                { label: 'POTÊNCIA', value: '1,050', unit: 'hp', color: '#00c8ff' },
                { label: 'TORQUE', value: '350', unit: 'Nm', color: '#c8102e' },
              ].map((data, i) => (
                <motion.div
                  key={data.label}
                  initial={{ x: -30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="bg-black/60 backdrop-blur-sm border-l-2 px-2 md:px-4 py-1 md:py-2"
                  style={{ borderColor: data.color }}
                >
                  <div className="text-gray-400 text-[10px] md:text-xs tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>{data.label}</div>
                  <motion.div
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-white text-sm md:text-xl"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {data.value}
                    <span className="text-[10px] md:text-xs text-gray-500 ml-1">{data.unit}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* HUD Data Panels - Right */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 space-y-2 md:space-y-4 z-20"
            >
              {[
                { label: 'TEMP. MOTOR', value: '120', unit: '°C', color: '#ff6b35' },
                { label: 'ERS', value: '4.0', unit: 'MJ', color: '#00ff88' },
                { label: 'EFICIÊNCIA', value: '52', unit: '%', color: '#00c8ff' },
              ].map((data, i) => (
                <motion.div
                  key={data.label}
                  initial={{ x: 30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="bg-black/60 backdrop-blur-sm border-r-2 px-2 md:px-4 py-1 md:py-2 text-right"
                  style={{ borderColor: data.color }}
                >
                  <div className="text-gray-400 text-[10px] md:text-xs tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>{data.label}</div>
                  <motion.div
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: 0.25 }}
                    className="text-white text-sm md:text-xl"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {data.value}
                    <span className="text-[10px] md:text-xs text-gray-500 ml-1">{data.unit}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Center F1 Car with 3D Effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  rotateY: [-3, 3, -3],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Car Glow Effect */}
                <motion.div
                  animate={{ opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-8 bg-gradient-to-r from-[#c8102e]/30 via-transparent to-[#00c8ff]/30 blur-2xl rounded-full"
                />
                
                <img
                  src={f1Car}
                  alt="Red Bull F1 Car"
                  className="w-64 md:w-80 lg:w-[450px] h-auto drop-shadow-2xl relative z-10"
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(200, 16, 46, 0.5)) drop-shadow(0 0 60px rgba(0, 200, 255, 0.3))',
                  }}
                />

                {/* Energy Pulse from Car */}
                <motion.div
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-40 h-32 md:h-40 border border-[#c8102e] rounded-full"
                />
              </motion.div>
            </div>

            {/* Floating Energy Particles - Reduced on mobile */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  backgroundColor: i % 2 === 0 ? '#c8102e' : '#00c8ff',
                  boxShadow: `0 0 ${5 + Math.random() * 10}px ${i % 2 === 0 ? '#c8102e' : '#00c8ff'}`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* Status Bar Bottom */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1.5 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-6 bg-black/70 backdrop-blur-sm px-4 md:px-8 py-2 md:py-3 border border-[#c8102e]/30 whitespace-nowrap"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ backgroundColor: ['#00ff88', '#00ff88', '#00ff88'] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-[#00ff88]"
                />
                <span className="text-[10px] md:text-xs text-gray-400 tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>ATIVO</span>
              </div>
              <div className="w-px h-4 bg-gray-600 hidden md:block" />
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[10px] md:text-xs text-[#00c8ff] tracking-wider hidden md:inline"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                TELEMETRIA
              </motion.span>
              <div className="w-px h-4 bg-gray-600 hidden md:block" />
              <span className="text-[10px] md:text-xs text-gray-400 tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>V6 HÍBRIDO</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="relative p-8 bg-white/5 border border-white/10 backdrop-blur-sm group"
              style={{ perspective: '1000px' }}
            >
              {/* Icon */}
              <motion.div
                animate={{
                  rotateZ: hoveredIndex === index ? 360 : 0,
                }}
                transition={{ duration: 0.6 }}
                className="inline-flex p-4 bg-[#c8102e] mb-6"
              >
                <feature.icon size={28} className="text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-white mb-3 text-xl">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>

              {/* Hover Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#c8102e]"
                initial={{ width: 0 }}
                animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* 3D Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#c8102e]/0 to-[#c8102e]/20 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}