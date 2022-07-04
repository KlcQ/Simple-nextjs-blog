import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const HonorDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const Honor = ({ children, delay = 0 }) => (
  <HonorDiv
    initial={{ y: 0, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.1, delay }}
    whileHover={{ scale: 1.01 }}
  >
    {children}
  </HonorDiv>
)

export default Honor
