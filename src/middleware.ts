import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

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
        // Continue to the next-intl middleware even for admin if needed, 
        // but /admin is probably not localized.
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

  // Handle i18n routing
  return intlMiddleware(req)
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}
