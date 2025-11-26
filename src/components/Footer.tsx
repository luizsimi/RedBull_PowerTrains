import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import footerLogo from 'figma:asset/432b9d71cb945b7b780bc36a23285370a7507233.png';

export function Footer() {
  const footerLinks = {
    Empresa: ['Sobre Nós', 'História', 'Liderança', 'Contato'],
    Tecnologia: ['POWER UNIT', 'Inovação', 'Sustentabilidade', 'Parceiros'],
    Carreiras: ['Vagas Abertas', 'Cultura', 'Benefícios', 'Estágios'],
    Mídia: ['Notícias', 'Kit de Imprensa', 'Galeria', 'Vídeos'],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-[#0a1628] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <img 
                src={footerLogo} 
                alt="Red Bull Racing" 
                className="h-16 w-auto"
              />
            </motion.div>
            <p className="text-gray-400 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Excelência em engenharia no desenvolvimento de POWER UNIT de Fórmula 1. Ultrapassando os
              limites de performance e inovação.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-[#c8102e] mt-1 flex-shrink-0" />
                <span className="text-sm">Milton Keynes, Reino Unido</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#c8102e] flex-shrink-0" />
                <span className="text-sm">info@redbullpowertrains.com</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white mb-6 uppercase tracking-widest text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#c8102e' }}
                      className="text-gray-400 hover:text-[#c8102e] transition-colors inline-block text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-12 pb-12 border-b border-white/10">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#c8102e] hover:bg-[#c8102e]/10 transition-all"
              aria-label={social.label}
            >
              <social.icon size={20} className="text-gray-400 group-hover:text-[#c8102e]" />
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'var(--font-mono)' }}>
            © 2025 Red Bull Powertrains. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-8 text-sm">
            <motion.a
              href="#"
              whileHover={{ y: -2, color: '#c8102e' }}
              className="text-gray-400 hover:text-[#c8102e] transition-colors"
            >
              Política de Privacidade
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: '#c8102e' }}
              className="text-gray-400 hover:text-[#c8102e] transition-colors"
            >
              Termos e Condições
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: '#c8102e' }}
              className="text-gray-400 hover:text-[#c8102e] transition-colors"
            >
              Política de Cookies
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -2, color: '#c8102e' }}
              className="text-gray-400 hover:text-[#c8102e] transition-colors"
            >
              Aviso Legal
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}