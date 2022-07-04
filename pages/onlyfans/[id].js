import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Badge, Image, Button } from '@chakra-ui/react'
import { Title } from '../../components/post'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { useSpring, animated } from 'react-spring'
import styled from '@emotion/styled'

import 'swiper/css'
import 'swiper/css/effect-cards'

import { EffectCards } from 'swiper'

{
  /* 
  CardEffect styled(animated.div) ze vraj ptorebny... 1.01 v calc je scale po mouseover...
  const [props, set] - config , nastavuje efekt, default config treba importovat ako {react} from 'spring'
  for some rason musim mat fetchnute data oznacene [0] (post[0])... Co robi perspective(X px) v trans som uz zabudol... ale opravil som cez to nieco
  cez .map loop nastavenie alt imagu.. 
  nazov galerie + index obrazka + Belle Delphine.
  pre index.js/[id].js pridany key={index aktualneho loopu}
  Left icon button vedla nazvu postu a badgu pre datum postu je cez Title: post.js
  */
}
const Cardeffect = styled(animated.div)``
const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.01
]
const trans = (x, y, s) =>
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function Post({ post }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 600, friction: 500 }
  }))
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title={post[0].name}>
      <Container>
        <Title>
          {post[0].name} <Badge>{post[0].date}</Badge>
        </Title>
        <Paragraph>{post[0].text}</Paragraph>

        <Box maxW="container.sm" align="center">
          <Cardeffect
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              {post[0].images.map((postImg, index) => (
                <SwiperSlide key={index}>
                  <Image
                    borderRadius="lg"
                    src={postImg}
                    alt={`${post[0].name} ${index} - Belle Delphine`}
                    key={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </Cardeffect>
        </Box>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`http://localhost:3000/api/onlyfans/${params.id}`)
  const data = await req.json()

  return {
    props: { post: data }
  }
}
