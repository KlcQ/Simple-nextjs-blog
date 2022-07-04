import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  Container,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Queen from '../components/queen'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { OfGridItem } from '../components/grid-items'

import rainbowBunny from '../public/images/onlyfans/1-rainbow-bunny/thumb.jpg'
import gummyMonster from '../public/images/onlyfans/2-gummy-monster/thumb.jpg'
import votesWomen from '../public/images/onlyfans/3-votes-for-women/thumb.jpg'
import starShirt from '../public/images/onlyfans/4-star-shirt/thumb.jpg'
import lewdElves from '../public/images/onlyfans/5-lewd-elves/thumb.jpg'
import bunnyPicnic from '../public/images/onlyfans/6-bunny-picnic/thumb.jpg'
import lolaBunny from '../public/images/onlyfans/7-lola-bunny/thumb.jpg'
import nokiaDelphine from '../public/images/onlyfans/8-nokia-delphine/thumb.jpg'

const Onlyfans = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} textAlign="center"></Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Queen>
            <Section delay={0.1}>
              <OfGridItem
                id="1-rainbow-bunny"
                title="Rainbow Bunny"
                thumbnail={rainbowBunny}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.15}>
              <OfGridItem
                id="2-gummy-monster"
                title="Gummy Monster"
                thumbnail={gummyMonster}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.2}>
              <OfGridItem
                id="3-votes-for-women"
                title="Vote for Women"
                thumbnail={votesWomen}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.25}>
              <OfGridItem
                id="4-star-shirt"
                title="Star shirt"
                thumbnail={starShirt}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.3}>
              <OfGridItem
                id="5-lewd-elves"
                title="Lewd Elves"
                thumbnail={lewdElves}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.35}>
              <OfGridItem
                id="6-bunny-picnic"
                title="Bunny Picnic"
                thumbnail={bunnyPicnic}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.4}>
              <OfGridItem
                id="7-lola-bunny"
                title="Lola Bunny"
                thumbnail={lolaBunny}
              ></OfGridItem>
            </Section>
          </Queen>
          <Queen>
            <Section delay={0.45}>
              <OfGridItem
                id="8-nokia-delphine"
                title="Nokia Delphine"
                thumbnail={nokiaDelphine}
              ></OfGridItem>
            </Section>
          </Queen>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Onlyfans
