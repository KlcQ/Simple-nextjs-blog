import { motion } from 'framer-motion'
import Head from 'next/head'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20, scale: 0.5 },
  enter: { opacity: 1, x: 0, y: 0, scale: 1 },
  exit: {
    opacity: 0,
    x: 0,
    y: 900,
    scale: 0
  }
}

const Layout = ({ children, title }) => {
  const t = `${title} - Belle Delphine`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.2, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}
    </motion.article>
  )
}

export default Layout
