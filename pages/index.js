import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"
import Section from "../compoments/section"
import Paragraph from "../compoments/paragraph"
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
                Hello, I'm a motion analyst and product developer @Nelo
            </Box>
            <Box display ={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Tiago Portela
                    </Heading>
                    <p> Mago Digital (Writter / Reader / Maker)</p>
                </Box>
                <Box 
                flexShrink={0} 
                mt = {{base:4, md:0}} 
                ml={{md:6}} 
                align="center">
                    <Image 
                    borderColor="whiteAlpha.800" 
                    borderWidth={2} 
                    borderStyle="solid"
                    maxWidth="100px" 
                    display="inline-block" 
                    boxSize="100px" 
                    borderRadius="full" 
                    src="/images/my_image.jpg" 
                    alt="Profile Image"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Posts
                </Heading>
                <Paragraph>
                    Tiago Portela is a developer that a full passion for data science and IoT.
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page