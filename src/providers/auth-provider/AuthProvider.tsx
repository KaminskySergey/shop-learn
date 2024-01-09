import { Component, FC, PropsWithChildren, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import Cookies from 'js-cookie'
import { getAccessToken } from '@/services/auth/auth.helpers'
import { usePathname, useRouter } from 'next/navigation'
import { REFRESH_TOKEN } from '@/constants/token'
import { protectedRoutes } from './protected-route.data'
import { ADMIN_PANEL_URL } from '@/config/url.config'
import NotFound from '@/app/not-found'


const AuthProvider: FC<PropsWithChildren<unknown>> = ({
  children
}) => {

  const { user } = useAuth()
  const { checkAuth, logout } = useActions()

  const pathname = usePathname()

  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getAccessToken();
      if (accessToken) {
        checkAuth();
      }
    };
  
    fetchData();
  }, [checkAuth]);

  useEffect(() => {
const refreshToken = Cookies.get(REFRESH_TOKEN)
if(!refreshToken && user) logout()
  }, [logout, user])

const isProtectedRoute = protectedRoutes.some(route => pathname?.startsWith(route))

const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

if(!isProtectedRoute && !isAdminRoute) return <>{children}</>

if(user?.isAdmin) return <>{children}</>

if(user && isProtectedRoute) return <>{children}</>

if(user && isAdminRoute) return <NotFound />

pathname !== '/auth' && router.replace('/auth')
return null



}

export default AuthProvider
