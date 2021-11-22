import { Container, Box, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
                Hello, I'm a motion analyst and product developer @Nelo
            </Box>
            <Box display ={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Tiago Portela
                    </Heading>
                    <p> Mago Digital (Writter / Reader / Maker)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page