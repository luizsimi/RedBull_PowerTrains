import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../../lib/ImageWithFallback';

const newsItems = [
  {
    date: 'Fevereiro 2023',
    category: 'Parceria',
    title: 'Ford Retorna à Fórmula 1 com Red Bull Powertrains',
    excerpt:
      'Parceria histórica anunciada: A Ford colaborará com a Red Bull Powertrains para desenvolver e fabricar a POWER UNIT de F1 de 2026, marcando o retorno da Ford à F1 após mais de 15 anos.',
    image: 'https://images.unsplash.com/photo-1569717552157-0dee5f2da188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JkJTIwcGFydG5lcnNoaXAlMjBhbm5vdW5jZW1lbnQlMjBidXNpbmVzc3xlbnwxfHx8fDE3NjMzODg3OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: true,
  },
  {
    date: 'Outubro 2024',
    category: 'Tecnologia',
    title: 'Primeira POWER UNIT de 2026 Ativada no Dinamômetro',
    excerpt:
      'Red Bull Powertrains alcança marco importante com a primeira execução bem-sucedida da POWER UNIT híbrida V6 especificação 2026 no dinamômetro nas instalações de Milton Keynes.',
    image: 'https://images.unsplash.com/photo-1627704671340-0969d7dbac25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlc3RpbmclMjBkeW5vJTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzM4ODc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    date: 'Julho 2024',
    category: 'Infraestrutura',
    title: 'Expansão das Instalações de Ponta Concluída',
    excerpt:
      'A instalação expandida de 50.000 m² agora inclui células de teste avançadas, áreas de fabricação e espaços dedicados para desenvolvimento de combustíveis sustentáveis.',
    image: 'https://images.unsplash.com/photo-1713894055910-1a8bdffc41ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwZmFjaWxpdHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjMzODg3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    date: 'Maio 2024',
    category: 'Desenvolvimento',
    title: 'Foco em Combustíveis 100% Sustentáveis para 2026',
    excerpt:
      'Equipes de engenharia trabalham intensivamente na otimização da nova POWER UNIT para combustíveis 100% sustentáveis mantendo as metas de performance.',
    image: 'https://images.unsplash.com/photo-1609872209699-3e55dc7d90b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMGVuZ2luZSUyMGZhY3RvcnklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzM4ODc5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
  {
    date: 'Março 2024',
    category: 'Inovação',
    title: 'Potência Elétrica Aprimorada: Desenvolvimento MGU-K',
    excerpt:
      'Progresso significativo no Motor Gerador Unidade - Cinético, que fornecerá três vezes mais potência elétrica do que as regulamentações atuais permitem.',
    image: 'https://images.unsplash.com/photo-1739973276729-c1366d0a8544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtdWxhJTIwMSUyMHBvd2VyJTIwdW5pdCUyMGh5YnJpZHxlbnwxfHx8fDE3NjMzODg3OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    featured: false,
  },
];

export function NewsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <section
      id="news"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(#c8102e 2px, transparent 2px),
              linear-gradient(90deg, #c8102e 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#c8102e] text-sm uppercase tracking-[0.3em] block mb-6"
          >
            Últimas Atualizações
          </motion.span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#0a1628] text-4xl md:text-5xl lg:text-6xl"
            >
              Notícias & Atualizações
            </motion.h2>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 text-[#c8102e] uppercase tracking-wider text-lg"
            >
              Ver Todas as Notícias
              <motion.div
                animate={{ x: hoveredIndex === -1 ? [0, 5, 0] : 0 }}
                transition={{ duration: 0.6 }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>

        {/* Featured News - Large */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-0 bg-[#0a1628] overflow-hidden group cursor-pointer">
            {/* Image */}
            <div className="relative h-[400px] md:h-[600px] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="h-full"
              >
                <ImageWithFallback
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 to-transparent md:hidden" />
              
              {/* Category Badge */}
              <div className="absolute top-8 left-8 px-6 py-3 bg-[#c8102e] text-white uppercase tracking-wider text-sm">
                {featuredNews.category}
              </div>
            </div>

            {/* Content */}
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6 text-white/60">
                <Calendar size={18} />
                <span className="text-sm uppercase tracking-wider">{featuredNews.date}</span>
              </div>

              <h3 className="text-white text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                {featuredNews.title}
              </h3>

              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {featuredNews.excerpt}
              </p>

              <motion.button
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-[#c8102e] uppercase tracking-wider text-lg group-hover:gap-5 transition-all"
              >
                Ler História Completa
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Regular News Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularNews.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className="flex gap-6 h-full">
                {/* Image - Smaller */}
                <div className="relative w-48 h-48 flex-shrink-0 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="h-full"
                  >
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#c8102e] text-white uppercase tracking-wider text-xs">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-2 mb-3 text-gray-500">
                      <Calendar size={14} />
                      <span className="text-xs uppercase tracking-wider">{item.date}</span>
                    </div>

                    <h3 className="text-[#0a1628] text-xl mb-3 leading-tight group-hover:text-[#c8102e] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-[#c8102e] uppercase text-xs tracking-wider mt-4"
                    animate={{ x: hoveredIndex === index ? 5 : 0 }}
                  >
                    Leia Mais
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Line */}
              <motion.div
                className="h-[2px] bg-gradient-to-r from-[#c8102e] via-[#0a1628] to-transparent mt-6"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: hoveredIndex === index ? 1 : 0.3 } : {}}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-5 bg-[#0a1628] text-white uppercase tracking-widest text-lg hover:bg-[#c8102e] transition-colors shadow-xl"
          >
            <span className="flex items-center gap-3">
              Assinar Newsletter
              <ExternalLink size={20} />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}