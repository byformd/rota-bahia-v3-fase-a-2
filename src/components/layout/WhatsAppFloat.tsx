import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { whatsappHref } from '@/data/company'

export function WhatsAppFloat() {
  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#146C63] text-white shadow-[0_10px_30px_-8px_rgba(20,108,99,0.55)] md:bottom-8 md:right-8"
    >
      <MessageCircle size={26} strokeWidth={2} />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#146C63]/40" />
    </motion.a>
  )
}
