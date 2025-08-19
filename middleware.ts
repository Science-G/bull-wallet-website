import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {

  const { pathname } = req.nextUrl

  // Allow static and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots.txt') ||
    pathname.startsWith('/sitemap') ||
    pathname.startsWith('/locales') ||
    pathname.startsWith('/badges') ||
    pathname.startsWith('/network-logos') ||
    pathname.startsWith('/mockups') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/public')
  ) {
    return NextResponse.next()
  }

  // No route restrictions now; let Next.js handle 404s
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.\\w+$).*)'],
}


