import { NextResponse } from 'next/server'
import jwtDecode from 'jwt-decode'

export function middleware(request) {
  // Check for a token in cookies
  const token = request.cookies.get('auth_token')?.value

  if (!token) {
    console.log("No token found. Redirecting to login...");
    return NextResponse.redirect(new URL('/justice/login', request.url))
  }

  try {
    // Decode the JWT token
    const decodedToken = jwtDecode(token)

    // Check if the token has expired
    if (decodedToken.exp * 1000 < Date.now()) {
      console.log("Session expired. Redirecting to login...");
      const response = NextResponse.redirect(new URL('/justice/login', request.url))
      
      // Remove the expired token from cookies
      response.cookies.set('auth_token', '', { maxAge: -1 })

      return response
    }

    // Token is valid
    return NextResponse.next()
  } catch (error) {
    console.error('Error decoding token:', error)
    const response = NextResponse.redirect(new URL('/justice/login', request.url))
    
    // Remove invalid token
    response.cookies.set('auth_token', '', { maxAge: -1 })

    return response
  }
}

export const config = {
  matcher: ['/justice/dashboard/:path*']
}

