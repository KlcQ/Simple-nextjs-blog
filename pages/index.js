import React, { useReducer } from 'react'
import NextLink from 'next/link'
import {
  Link,
  Image,
  Box,
  Container,
  Heading,
  VisuallyHidden,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Queen from '../components/queen'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { HonorMention, HonorName } from '../components/honor'
import Honor from '../components/honorani'
import { css, jsx } from '@emotion/react'

function reducer(secret, action) {
  switch (action.type) {
    case 'hover':
      return '/images/belle.jpg'
    case 'leave':
      return '/images/belle2.jpg'
    default:
      throw new error()
  }
}

const Page = () => {
  const [secret, dispatch] = useReducer(reducer, '/images/belle2.jpg')

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" mb={2} variant="page-title">
              &quot;JOBD&quot; - Trainwreckstv
            </Heading>

            <Box
              mb={6}
              onMouseEnter={() => dispatch({ type: 'hover' })}
              onMouseLeave={() => dispatch({ type: 'leave' })}
            >
              <Queen>
                <Image
                  borderRadius="md"
                  src={secret}
                  alt="Wifu"
                  css={css`
                    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 2px;
                  `}
                />
                <VisuallyHidden>
                  <Image src="/images/belle.jpg" alt="Wifu" />
                  {jsx}
                </VisuallyHidden>
              </Queen>
            </Box>
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" mb={2} variant="section-title">
            Work
          </Heading>
          <Paragraph>
            TOOK THE DICK 🥒, GOT THE BAG 💰, 10 MORE BEDROOMS TO FUCK IN 🏩,
            DID THE PORN FOR MY DAD 🤦‍♂️, HOPE HES PROUD OF HIS MUFFIN 🧁 ..uWu..
            PUT THE FIST IN MY KITTY 😿, BEAT IT UP TILL I CUM 🎯, IF WATCHING
            ME MAKES YOU A 🐻... THEN THERES 69 MILLION 🛐
          </Paragraph>

          <Box align="center" mb={8}>
            <Queen>
              <NextLink href="/onlyfans" passHref scroll={false}>
                <Button
                  leftIcon={<ExternalLinkIcon />}
                  colorScheme={useColorModeValue('blue', 'pink')}
                  variant="outline"
                >
                  Onlyfans
                </Button>
              </NextLink>
            </Queen>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" mb={2} variant="section-title">
            Honorable mentions, but Queen is only one!
          </Heading>
          <Section delay={0.3}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/mira_nowhere/"
                    target="_blank"
                  >
                    @mira_nowhere
                  </Link>
                </HonorName>
                Life on EZ mode 💘
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.35}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/nyyxxii_/"
                    target="_blank"
                  >
                    @nyyxxii_
                  </Link>
                </HonorName>
                Wet dream... 🌡️
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.4}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/hannahxowo/"
                    target="_blank"
                  >
                    @hannahxowo
                  </Link>
                </HonorName>
                Ofc I can give you my kidney.. both? 💯
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.45}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/bonnierabbit/"
                    target="_blank"
                  >
                    @bonnierabbit
                  </Link>
                </HonorName>
                If Poki was hot... 🙈
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.5}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/_sassycassi_/"
                    target="_blank"
                  >
                    @_sassycassi_
                  </Link>
                </HonorName>
                Underrated... 👏
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.55}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/kyootbot/"
                    target="_blank"
                  >
                    @kyootbot
                  </Link>
                </HonorName>
                Hmm yummy 🙃
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.6}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/melina.goransson/"
                    target="_blank"
                  >
                    @melina.goransson
                  </Link>
                </HonorName>
                Still usable... 🥴
              </HonorMention>
            </Honor>
          </Section>
          <Section delay={0.65}>
            <Honor>
              <HonorMention>
                <HonorName>
                  <Link
                    href="https://www.instagram.com/catiescos/"
                    target="_blank"
                  >
                    @catiescos
                  </Link>
                </HonorName>
                We both know you will not say no 😺
              </HonorMention>
            </Honor>
          </Section>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
