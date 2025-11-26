import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Zap, Target, Users, Trophy, Cpu, Gauge } from 'lucide-react';

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    { icon: Zap, title: 'Inovação', description: 'Tecnologia pioneira em unidades de potência híbridas de ponta' },
    { icon: Target, title: 'Precisão', description: 'Excelência em engenharia até o menor detalhe' },
    { icon: Trophy, title: 'Performance', description: 'Potência e confiabilidade campeãs' },
    { icon: Cpu, title: 'Tecnologia', description: 'Integração avançada de MGU-K e MGU-H' },
    { icon: Gauge, title: 'Eficiência', description: 'Máxima potência com consumo otimizado de combustível' },
    { icon: Users, title: 'Equipe', description: 'Engenheiros e especialistas de classe mundial' },
  ];

  const stats = [
    { number: '2026', label: 'POWER UNIT Nova Era' },
    { number: '1000+', label: 'Funcionários' },
    { number: '50.000', label: 'm² de Instalações' },
    { number: '15.000+', label: 'RPM' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a1628] overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 16, 46, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 16, 46, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Large Decorative Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-[#c8102e]" />
          <div className="absolute inset-20 rounded-full border border-white" />
          <div className="absolute inset-40 rounded-full border-2 border-[#c8102e]" />
        </div>
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[#c8102e] text-sm uppercase tracking-[0.3em]">
              Sobre Nós
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white mb-8 text-4xl md:text-6xl lg:text-7xl max-w-4xl"
          >
            Engenhando o Futuro da{' '}
            <span className="text-[#c8102e]">Fórmula 1</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 max-w-5xl"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              A Red Bull Powertrains representa o ápice da engenharia do automobilismo,
              combinando décadas de herança nas corridas com tecnologia de ponta para desenvolver
              unidades de potência campeãs mundiais.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Nossa instalação de última geração em Milton Keynes abriga algumas das mentes
              mais brilhantes da engenharia, todas dedicadas a ultrapassar os limites de performance,
              eficiência e inovação.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <div key={stat.label} className="relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <motion.div
                    className="text-5xl md:text-6xl lg:text-7xl text-[#c8102e] mb-3"
                    style={{ fontFamily: 'var(--font-display)' }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-white/60 text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-mono)' }}>
                    {stat.label}
                  </div>
                </motion.div>

                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-4 left-0 h-[2px] bg-[#c8102e]"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '60%' } : {}}
                  transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features List */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white text-3xl md:text-4xl uppercase tracking-wider mb-16"
          >
            Nossa Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-20 group"
                >
                  {/* Icon */}
                  <motion.div
                    className="absolute left-0 top-0 w-14 h-14 flex items-center justify-center bg-[#c8102e] group-hover:bg-white transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={28} className="text-white group-hover:text-[#c8102e] transition-colors duration-300" />
                  </motion.div>

                  {/* Content */}
                  <h4 className="text-white text-xl uppercase tracking-wide mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover line */}
                  <motion.div
                    className="absolute left-20 -bottom-2 h-[1px] bg-[#c8102e]"
                    initial={{ width: 0 }}
                    whileHover={{ width: '80%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-white text-3xl md:text-4xl uppercase tracking-wider mb-16 text-center">
            Nossa Jornada
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              className="absolute top-8 left-0 w-full h-[2px] bg-white/20 hidden lg:block"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 2, delay: 1 }}
              style={{ transformOrigin: 'left' }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {[
                { year: '2021', event: 'Fundação da Red Bull Powertrains' },
                { year: '2022', event: 'Inauguração da Instalação de Ponta' },
                { year: '2023', event: 'Primeira Temporada Completa' },
                { year: '2026', event: 'Nova Regulamentação POWER UNIT' },
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  className="relative text-center lg:text-left"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="hidden lg:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#c8102e] rounded-full"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.15 }}
                    whileHover={{ scale: 1.5 }}
                  />

                  <div className="pt-16">
                    <motion.div
                      className="text-[#c8102e] text-4xl md:text-5xl mb-4"
                      style={{ fontFamily: 'var(--font-display)' }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.div>
                    <p className="text-white/70 text-lg">
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-transparent border-2 border-[#c8102e] text-[#c8102e] uppercase tracking-widest text-lg overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-[#c8102e]"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Explore Nossa Tecnologia
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}