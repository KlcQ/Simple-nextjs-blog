import { Heading, Container, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import Queen from '../../components/queen'
import { OfGridItem } from '../../components/grid-items'

export default function Onlyfans({ post }) {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4} textAlign="center"></Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/* 
          Fetch from /api/onlyfans, kazdy objekt ma id(link na post), title(meno postu + alt imgu) a image(thumb pre post).
          .map prebehne cez kazdy post kde <queen> je mouseOver effect, <section> je delay effekt 0.1sec + index*0.05 increment
          <OfGridItem> je hotovy component
          */}
          {post.map((post, index) => (
            <Queen key={index}>
              <Section delay={0.1 + index * 0.05}>
                <OfGridItem
                  id={post.id}
                  title={post.name}
                  thumbnail={post.thumb}
                ></OfGridItem>
              </Section>
            </Queen>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps() {
  const req = await fetch(`http://localhost:8000/api/onlyfans`)
  const data = await req.json()
  return {
    props: { post: data }
  }
}
