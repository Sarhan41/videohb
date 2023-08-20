import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTrasform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          m={'auto'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
          <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"} >
          Here You can upload any of your gaming video, as well as you can watch any of gaming video.
          if you have new game developed you can upload video here by tagging "#NewGame",Our Team will verify it and if they like 
          we will give you chance to upload your game here and in playstore.
          you can watch other videos , you can contact it's player you can directly talk with him and they you can play with him.
          wait for our new update where we will announce new Tournaments every single Week.
          
          "So Yo GAMERS, ARE YOU ECITED TO START YOUR NEW LIFE IN GAMINGHUB?"
          Regards -
           HAPPY GAMING!



          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        NightLife is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
