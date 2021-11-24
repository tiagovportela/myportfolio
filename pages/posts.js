
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../compoments/section'
import { PostsGridItem } from '../compoments/grid-item'
import thumbStrokeClass from '../public/images/posts/StrokeClassification/stroke.jpeg'
import Layout from '../compoments/layouts/article'
const Posts = () => {
    return (
        <Layout>
        <Container>
            <Heading as ="h3" fontSize={20} mb ={4}>
                Posts
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification of Elite Paddlers"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification of Elite Paddlers"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification of Elite Paddlers"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

                <Section>
                    <PostsGridItem 
                    id="StrokeClassification" 
                    title="Stroke Classification"
                    thumbnail = {thumbStrokeClass}
                    >
                        Classfication of elite paddlers strokes
                    </PostsGridItem>
                </Section>

            </SimpleGrid>
        </Container>
        </Layout>
    )
}
export default Posts