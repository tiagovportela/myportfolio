import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, Code, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/posts">
      <Link>Posts</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h2" fontSize={30} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const PostImage = ({ src, alt, legend }) => (
<Box mb={4} mt={2}>
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={1}  />
    <p><i>{legend}</i></p>
</Box>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
export const Subtitle = ({children}) => (
    <Box>
        <Heading display="inline-block" as="h3" fontSize={20} mb={2} mt={2}>
        {children}
        </Heading>
    </Box>
)

export const PostCode = ({children}) => (
    <Code alignContent="center" mb={3} mt={3}>
            {children}
    </Code>
)

export const PostParagraph = ({children}) => (
  <Box mb={5}>
    <Text fontSize="md" >
      {children}
    </Text>
  </Box>
  
)