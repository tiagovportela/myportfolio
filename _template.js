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
  import { Title, PostImage, Meta } from '../../compoments/post'
  import ReactMarkdown from 'react-markdown'

//   import P from '../../components/paragraph'
  
  const Post = () => {
      return (
          <Layout title='Stroke Classification of Elite Paddlers'>
            <Container>
                <Title>
                Stroke Classification of Elite Paddlers <Badge>2018-2019</Badge>
                </Title>
                <p>
                    Desenvolvimeto de um metodo para classificar as rematas de remadores de elite
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.inkdrop.app/">
                        https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                    <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, Electron, React Native</span>
                    </ListItem>
                    <ListItem>
                    <Meta>Blogpost</Meta>
                    <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                        How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                        $5/mo <ExternalLinkIcon mx="2px" />
                    </Link>
                    </ListItem>
                </List>
            </Container>
          </Layout>
      )
  }
  
  export default Post