import React, { ReactElement } from 'react';
import { chakra, Box, useColorModeValue, Flex, Button, Stack, Icon, Text } from '@chakra-ui/react';

const Hero = (): ReactElement => {
    const Feature = (props) => (
        <Flex alignItems="center" color={useColorModeValue(null, 'white')}>
            <Icon boxSize={4} mr={1} color="green.600" viewBox="0 0 20 20" fill="currentColor">
                <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                ></path>
            </Icon>
            {props.children}
        </Flex>
    );
    return (
        <Box px={4} mx="auto">
            <Box
                w={{ base: 'full', md: 11 / 12, xl: 9 / 12 }}
                textAlign={{ base: 'left', md: 'center' }}
                mx="auto"
            >
                <chakra.h1
                    mb={4}
                    fontSize={{ base: '4xl', md: '6xl' }}
                    fontWeight={{ base: 'bold', md: 'extrabold' }}
                    color={useColorModeValue('gray.700', 'gray.100')}
                    lineHeight="shorter"
                >
                    You will never have to optimize your <s>blog</s>{' '}
                    <Text as="span" color="primary.500">
                        superblog
                    </Text>
                </chakra.h1>
                <chakra.p
                    mb={10}
                    fontSize={{ base: 'xl', md: '2xl' }}
                    color="gray.500"
                    lineHeight="base"
                >
                    Superblog is a blazing fast alternative to WordPress and Medium. <br />
                    You can focus on writing content instead of SEO audits, speed, and <i>design</i>
                    .
                </chakra.p>
                <Stack direction={['column', 'row']} spacing={3} justifyContent="center">
                    <Button variant="solid" size="lg" colorScheme="primary">
                        Create your blog in 1 minute
                    </Button>

                    <Button variant="ghost" size="lg" color="gray.600">
                        View Showcase
                    </Button>
                </Stack>
                <Stack
                    display="flex"
                    direction={{ base: 'column', md: 'row' }}
                    justifyContent={{ base: 'start', md: 'center' }}
                    mb={8}
                    mt={6}
                    spacing={{ base: 2, md: 8 }}
                    fontSize="xs"
                    color="gray.600"
                >
                    <Feature>No credit card required</Feature>
                    <Feature>14 days free</Feature>
                    <Feature>Cancel anytime</Feature>
                </Stack>
            </Box>
        </Box>
    );
};

export default Hero;
