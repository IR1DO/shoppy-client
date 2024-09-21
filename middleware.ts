import { NextRequest } from 'next/server';

const unauthorizedRoutes = ['/auth/login', '/auth/sign-up'];

export function middleware(request: NextRequest) {
  const auth = request.cookies.get('Authentication')?.value;

  if (
    !auth &&
    !unauthorizedRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    )
  ) {
    console.log('request.url: ', request.url);
    console.log('new url: ', new URL('/auth/login', request.url));
    return Response.redirect(new URL('/auth/login', request.url));
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
