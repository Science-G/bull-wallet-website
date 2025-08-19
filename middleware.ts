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

  // Allow wallet itself only
  if (pathname === '/wallet') {
    return NextResponse.next()
  }

  // Redirect everything else to wallet
  const url = req.nextUrl.clone()
  url.pathname = '/wallet'
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.\\w+$).*)'],
}


