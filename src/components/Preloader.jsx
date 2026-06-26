import { motion } from 'framer-motion'
import Logo from './Logo'

const slogan = "PREPARANDO LA MAGIA..."

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center overflow-hidden"
    >


      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center gap-4 relative z-10"
      >
        <div className="relative -mb-10 sm:-mb-14 -mt-10 sm:-mt-14">
          <Logo animateDraw={true} className="h-40 sm:h-56 text-bordeaux relative z-10" />
          
          {/* Subtle glow behind the logo */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.05, 1] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-bordeaux/10 blur-[50px] rounded-full pointer-events-none"
          />
        </div>

        {/* Premium Loading Bar */}
        <div className="w-48 sm:w-64 h-[2px] bg-neutral-100 rounded-full overflow-hidden mb-1 relative">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.2, ease: [0.65, 0, 0.35, 1] }}
            className="absolute top-0 left-0 h-full bg-bordeaux"
          />
        </div>

        {/* Staggered text reveal */}
        <div className="flex overflow-hidden">
          {slogan.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.05,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="text-bordeaux/80 text-[10px] sm:text-xs font-bold tracking-[0.4em]"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
