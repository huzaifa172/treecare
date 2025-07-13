import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define route configurations
const routeConfig = {
  // Public routes - accessible to everyone
  public: [
    '/',
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/forgot',
    '/api/auth/reset',
    '/api/auth/refresh',
    '/api/auth/verify',
  ],
  
  // Protected routes - require authentication
  protected: [
    '/dashboard',
    '/profile',
    '/settings',
    '/trees',
    '/trees/register',
    '/trees/[id]',
    '/trees/[id]/care',
    '/trees/[id]/edit',
    '/trees/adopt',
    '/organizations',
    '/organizations/create',
    '/organizations/[id]',
    '/organizations/[id]/edit',
    '/organizations/[id]/campaigns',
    '/organizations/[id]/campaigns/create',
    '/organizations/[id]/members',
    '/organizations/[id]/members/invite',
    '/organizations/[id]/bulk-upload',
    '/analytics',
    '/rewards',
    '/notifications',
    '/map',
  ],
  
  // Admin routes - require admin role
  admin: [
    '/admin',
    '/admin/users',
    '/admin/organizations',
    '/admin/trees',
    '/admin/analytics',
    '/admin/settings',
  ],
  
  // Organization owner/admin routes
  organizationAdmin: [
    '/organizations/[id]/settings',
    '/organizations/[id]/delete',
    '/organizations/[id]/members/[memberId]/role',
    '/organizations/[id]/members/[memberId]/remove',
  ],
};

// Helper function to check if route matches pattern
function routeMatches(pattern: string, pathname: string): boolean {
  if (pattern === pathname) return true;
  
  // Handle dynamic routes
  const patternParts = pattern.split('/');
  const pathParts = pathname.split('/');
  
  if (patternParts.length !== pathParts.length) return false;
  
  return patternParts.every((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return true; // Dynamic segment matches anything
    }
    return part === pathParts[index];
  });
}

// Helper function to check if user has access to route
function hasRouteAccess(
  pathname: string, 
  userRole?: string, 
  organizationRole?: string
): boolean {
  // Public routes are always accessible
  if (routeConfig.public.some(route => routeMatches(route, pathname))) {
    return true;
  }
  
  // Check admin routes
  if (routeConfig.admin.some(route => routeMatches(route, pathname))) {
    return userRole === 'admin';
  }
  
  // Check organization admin routes
  if (routeConfig.organizationAdmin.some(route => routeMatches(route, pathname))) {
    return organizationRole === 'owner' || organizationRole === 'admin';
  }
  
  // Protected routes require authentication
  if (routeConfig.protected.some(route => routeMatches(route, pathname))) {
    return true; // Will be checked in component level
  }
  
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Get token from cookies or headers
  const token = request.cookies.get('auth_token')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');
  
  // Check if user is authenticated
  const isAuthenticated = !!token;
  
  // For API routes, let them handle authentication internally
  if (pathname.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // Redirect to login if accessing protected route without authentication
  if (!isAuthenticated && routeConfig.protected.some(route => routeMatches(route, pathname))) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // Redirect authenticated users away from auth pages
  if (isAuthenticated && ['/login', '/signup'].includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};