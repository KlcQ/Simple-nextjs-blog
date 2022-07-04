import NextLink from 'next/link'
import { Heading, Box, Button, useColorModeValue } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/onlyfans" passHref scroll={false}>
      <Button colorScheme={useColorModeValue('blue', 'pink')} variant="outline">
        <ChevronLeftIcon />{' '}
      </Button>
    </NextLink>
    <Heading display="inline-block" as="h3" fontSize={20} ml={4} mb={6}>
      {children}
    </Heading>
  </Box>
)
