import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Rotate3D } from 'lucide-react';
import { useRef, useState } from 'react';
import heroImage1 from 'figma:asset/78b909075804cc5e3d99ccf374d24588dd18a40f.png';

export function Hero() {
  const containerRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startPos.x;
    const deltaY = e.clientY - startPos.y;
    setRotation({
      y: rotation.y + deltaX * 0.5,
      x: rotation.x - deltaY * 0.3,
    });
    setStartPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startPos.x;
    const deltaY = e.touches[0].clientY - startPos.y;
    setRotation({
      y: rotation.y + deltaX * 0.5,
      x: rotation.x - deltaY * 0.3,
    });
    setStartPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-[#0a1628]">
      {/* Background Image with 360 Rotation Effect */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/40 to-[#0a1628] z-10 pointer-events-none"></div>
        
        {/* 360 Rotatable Image Container */}
        <div 
          className="w-full h-full flex items-center justify-center"
          style={{ 
            perspective: '1500px',
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            animate={{
              rotateY: rotation.y,
              rotateX: rotation.x,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              transformStyle: 'preserve-3d',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              src={heroImage1}
              alt="Red Bull Racing F1 Car - 360° View"
              className="w-full h-full object-cover select-none"
              draggable={false}
              style={{
                transform: 'translateZ(50px)',
                filter: isDragging ? 'brightness(1.1)' : 'brightness(1)',
                transition: 'filter 0.2s',
              }}
            />
          </motion.div>
        </div>

        {/* 360 Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isDragging ? 0 : 1, scale: 1 }}
          className="absolute bottom-24 right-8 z-20 bg-[#c8102e]/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg pointer-events-none"
        >
          <Rotate3D size={20} className="text-white" />
          <span className="text-white text-sm tracking-wide font-mono">ARRASTE PARA ROTACIONAR 360°</span>
        </motion.div>
      </motion.div>

      {/* 3D Grid Overlay */}
      <div className="absolute inset-0 z-20 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(200, 16, 46, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 16, 46, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-30 flex flex-col items-center justify-center h-full text-center px-6 pointer-events-none"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-white mb-6">
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-5xl md:text-7xl lg:text-8xl mb-4 tracking-tight"
            >
              RED BULL
            </motion.span>
            <motion.span
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="block text-6xl md:text-8xl lg:text-9xl tracking-wider"
              style={{ color: '#c8102e' }}
            >
              POWERTRAINS
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/90 text-lg md:text-2xl max-w-3xl mb-12 tracking-wide font-light"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          Excelência em engenharia de unidades de potência da Fórmula 1
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-[#c8102e] text-white text-lg uppercase tracking-wider hover:bg-[#a00d25] transition-all shadow-lg pointer-events-auto font-semibold"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Descobrir Mais
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={40} className="text-white/60" strokeWidth={1.5} />
        </motion.div>
      </motion.div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute w-2 h-2 bg-[#c8102e] opacity-40"
            style={{
              boxShadow: '0 0 20px rgba(200, 16, 46, 0.6)',
            }}
          />
        ))}
      </div>
    </div>
  );
}




