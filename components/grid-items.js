import NextLink from 'next/link'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Image,
  VisuallyHidden
} from '@chakra-ui/react'
import { css, jsx } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail} alt={title} borderRadius="md" />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const OfGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/onlyfans/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          borderRadius="md"
          css={css`
            box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
          `}
        />
        <LinkOverlay href={`/onlyfans/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
        <VisuallyHidden>
          <Text>{jsx}</Text>
        </VisuallyHidden>
      </LinkBox>
    </NextLink>
  </Box>
)
