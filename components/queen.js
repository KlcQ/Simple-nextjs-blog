import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const QueenImg = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Queen = ({ children }) => (
  <QueenImg
    initial={{ y: -100, scale: 0.5, opacity: 0 }}
    animate={{
      y: 0,
      scale: 0.95,
      opacity: 1
    }}
    transition={{ type: 'easeInOut', duration: 0.2 }}
    whileHover={{ scale: 1 }}
  >
    {children}
  </QueenImg>
)

export default Queen
