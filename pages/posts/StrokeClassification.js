import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../compoments/layouts/article' 
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, PostImage, Meta, Subtitle } from '../../compoments/post'
  import ReactMarkdown from 'react-markdown'

//   import P from '../../components/paragraph'
  
  const Post = () => {
      return (
          <Layout title='Stroke Classification of Elite Paddlers'>
            <Container>
                <Title>
                Stroke Classification of Elite Paddlers <Badge>2018-2019</Badge>
                </Title>
                <Subtitle>
                    Stroke Fases Division
                </Subtitle>
                <p>
                    Desenvolvimeto de um metodo para classificar as rematas de remadores de elite
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, Electron, React Native</span>
                    
                    </ListItem>
                </List>
                <PostImage src="/images/stroke_classification.png" alt="stroke" legend="Teste teste teste"/>

                <p>
                    Oi Oi Oi
                </p>
            </Container>
          </Layout>
      )
  }
  
  export default Post