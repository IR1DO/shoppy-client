import { Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';

const SignUp = () => {
  return (
    <Stack spacing={2} className='w-full max-w-xs'>
      <TextField label='Email' variant='outlined' type='email' />
      <TextField label='Password' variant='outlined' type='email' />
      <Button variant='contained'>Login</Button>
      <Link component={NextLink} href='/auth/login' className='self-center'>
        Login
      </Link>
    </Stack>
  );
};

export default SignUp;
