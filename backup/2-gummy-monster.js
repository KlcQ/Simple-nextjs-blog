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
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (1).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (2).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (3).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (4).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (5).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (6).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (7).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (8).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (9).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (10).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (11).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (12).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (13).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (14).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (15).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (16).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (17).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (18).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (19).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (20).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (21).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (22).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (23).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (24).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (25).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (26).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (27).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (28).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (29).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (30).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (31).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (32).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (33).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (34).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (35).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (36).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (37).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (38).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (39).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (40).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (41).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (42).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (43).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (44).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (45).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (46).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (47).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (48).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (49).jpg',
    '/images/onlyfans/2-gummy-monster/gallery/gummyMonster (50).jpg'
  ]
  return (
    <Layout title="Rainbow Bunny">
      <Container>
        <Title>
          Gummy Monster <Badge>June 2022</Badge>
        </Title>
        <Paragraph>
          Only monster what I wanna find on my bed.. I mean under...
        </Paragraph>

        <Box maxW='container.sm' align="center">
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
