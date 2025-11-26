import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Cultura Colaborativa',
    description: 'Trabalhe ao lado de engenheiros de classe mundial em um ambiente de equipe dinâmico',
  },
  {
    icon: Target,
    title: 'Projetos de Ponta',
    description: 'Ultrapasse os limites da tecnologia em projetos campeões',
  },
  {
    icon: Award,
    title: 'Crescimento Profissional',
    description: 'Oportunidades contínuas de aprendizado e desenvolvimento em todos os níveis',
  },
  {
    icon: TrendingUp,
    title: 'Foco em Inovação',
    description: 'Faça parte de desenvolvimentos revolucionários em engenharia automotiva',
  },
];

export function CareersSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="careers"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 16, 46, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 16, 46, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

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
            Junte-se à Nossa Equipe
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#0a1628] mb-8"
          >
            Molde o Futuro Conosco
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto"
          >
            Junte-se a uma equipe de engenheiros e inovadores apaixonados dedicados à excelência
            no desenvolvimento de POWER UNIT de Fórmula 1.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{
                y: -15,
                scale: 1.05,
                rotateY: 5,
              }}
              className="relative p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-md group"
              style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotateZ: 360 }}
                transition={{ duration: 0.8 }}
                className="inline-flex p-4 bg-[#c8102e] mb-6"
              >
                <value.icon size={28} className="text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-[#0a1628] mb-4 text-xl">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>

              {/* 3D Corner Accent */}
              <motion.div
                className="absolute top-0 left-0 w-16 h-16 bg-[#c8102e]/10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              />

              {/* Hover Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#c8102e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Section with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="relative"
          style={{ perspective: '1500px' }}
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: 2, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative p-12 md:p-16 bg-gradient-to-br from-[#0a1628] to-[#152238] text-center overflow-hidden"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Animated Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 opacity-10"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute border border-[#c8102e]"
                    style={{
                      width: `${(i + 1) * 20}%`,
                      height: `${(i + 1) * 20}%`,
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 15}deg)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-white mb-6"
              >
                Pronto para Fazer a Diferença?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
              >
                Explore oportunidades empolgantes de carreira e faça parte de nossa equipe de classe mundial.
              </motion.p>

              <div className="flex gap-6 justify-center flex-wrap">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-[#c8102e] text-white uppercase tracking-wider hover:bg-[#a00d25] transition-all shadow-lg"
                >
                  Ver Vagas Abertas
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 border-2 border-white text-white uppercase tracking-wider hover:bg-white hover:text-[#0a1628] transition-all"
                >
                  Saiba Mais
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}