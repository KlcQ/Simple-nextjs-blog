import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Badge, Image } from '@chakra-ui/react'
import { Title } from '../../components/post'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper'

const Post = () => {
  const Pictures = [
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (1).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (2).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (3).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (4).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (5).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (6).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (7).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (8).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (9).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (10).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (11).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (12).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (13).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (14).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (15).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (16).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (17).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (18).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (19).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (20).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (23).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (24).jpg',
    '/images/onlyfans/1-rainbow-bunny/gallery/rainbowBunny (25).jpg'
  ]
  return (
    <Layout title="Rainbow Bunny">
      <Container>
        <Title>
          Rainbow Bunny <Badge>June 2022</Badge>
        </Title>
        <Paragraph>My favorite type of rainbow...</Paragraph>

        <Box maxW="container.sm" align="center">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {Pictures.map(picture => (
              <SwiperSlide>
                <Image borderRadius="lg" src={picture} alt={picture} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Layout>
  )
}

export default Post
