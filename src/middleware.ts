import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Only protect /admin routes
  if (req.nextUrl.pathname.startsWith('/admin')) {
    const basicAuth = req.headers.get('authorization')
    const url = req.nextUrl

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      const adminPassword = process.env.ADMIN_PASSWORD

      // If ADMIN_PASSWORD is not set in env, we allow access with "admin" (or maybe we should block, but let's allow "admin" to prevent lockout for now)
      const validPassword = adminPassword || 'admin'

      if (user === 'admin' && pwd === validPassword) {
        return NextResponse.next()
      }
    }
    url.pathname = '/api/auth'

    return new NextResponse('Auth required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
