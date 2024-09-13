import { Button, Link, Stack, TextField } from '@mui/material';
import NextLink from 'next/link';

const Login = () => {
  return (
    <Stack spacing={2} className='w-full max-w-xs'>
      <TextField label='Email' variant='outlined' type='email' />
      <TextField label='Password' variant='outlined' type='email' />
      <Button variant='contained'>Login</Button>
      <Link component={NextLink} href='/auth/sign-up' className='self-center'>
        Sign Up
      </Link>
    </Stack>
  );
};

export default Login;
