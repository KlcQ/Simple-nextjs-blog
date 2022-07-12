import { useRouter } from 'next/router'
import { CardSwiper } from 'react-card-rotate-swiper'
import { Container, Badge, Image, VisuallyHidden } from '@chakra-ui/react'
import { Title } from '../../components/post'
import Layout from '../../components/layouts/article'
import Paragraph from '../../components/paragraph'
import { useSpring, animated } from 'react-spring'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function Post({ post }) {
  //MouseOver 3dCard effect - react-spring
  const Cardeffect = styled(animated.div)``

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 60,
    (x - window.innerWidth / 2) / 60,
    1.01
  ]
  const trans = (x, y, s) =>
    `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  //react-card-rotate-swiper return call po swipe
  const handleSwipe = () => {}

  //Loop pre zobrazenie imgs
  const SwipeImages = post[0].images.map((postImg, index) => {
    return (
      <CardSwiper
        key={index}
        onSwipe={handleSwipe}
        contents={
          <Image
            zIndex={index * -1}
            position="absolute"
            borderRadius="lg"
            src={postImg}
            alt={`${post[0].name} ${index} - Belle Delphine`}
            key={index}
            css={css`
              box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px;
            `}
          />
        }
      />
    )
  })

  //MouseOver 3dCard effect - react-spring - config setup
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 600, friction: 500 }
  }))
  //Router
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout title={post[0].name}>
      <Container>
        <Title>
          {post[0].name} <Badge>{post[0].date}</Badge>
        </Title>
        <Paragraph>{post[0].text}</Paragraph>
        <VisuallyHidden>
          <Paragraph>{id}</Paragraph>
        </VisuallyHidden>

        <Cardeffect
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
        >
          {SwipeImages}
        </Cardeffect>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const req = await fetch(`https://simple-nextjs-blog-two.vercel.app/api/onlyfans/${params.id}`)
  const data = await req.json()

  return {
    props: { post: data }
  }
}
