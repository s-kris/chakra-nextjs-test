import { Box } from "@chakra-ui/react"
import Hero from "../components/Hero"

export const config = {
  unstable_runtimeJS: false
};

const Index = () => (
  <Box w="100vw" p={5}>
    <Hero />
  </Box>
)

export default Index
