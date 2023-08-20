import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
  Avatar
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'Container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>GAMING HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder={'Email'}
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />
          {/* <Button variant={'link'} alignSelf={'flex-end'}>
            <Link to={'/forgetPassword'}>Forget Password</Link>
          </Button> */}
          <Button colorScheme={'purple'} type={'submit'}>
            SignUp
          </Button>

          <Text textAlign={'right'}>
            Already User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to={'/login'}>Login</Link>{' '}
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
