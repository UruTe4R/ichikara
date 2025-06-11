'use server';

import { cookies } from 'next/headers';

export async function handleLogin(userId: string, accessToken: string, refreshToken: string) {
  const cookieStore = await cookies()
  // save userId
  cookieStore.set('session_userid', userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/'
  })
  // save accessToken
  cookieStore.set('session_access_token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60, // 1 hour
    path: '/'
  })
  // save refreshToken
  cookieStore.set('session_refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24* 7, // 1 week
    path: '/'
  })

}

export async function resetAuthCookie() {
  const cookieStore = await cookies()

  cookieStore.delete('session_userid');
  cookieStore.delete('session_access_token');
  cookieStore.delete('session_refresh_token');
}

export async function getUserId() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('session_userid')?.value

  return userId ? userId : null
}

export async function getAccessToken() {
  const cookieStore = await cookies()
  let accessToken = cookieStore.get('session_access_token')?.value;
  
  return accessToken ? accessToken : null
}

export async function getRefreshToken() {
  const cookieStore = await cookies()

  const refreshToken = cookieStore.get('session_refresh_token')?.value;

  return refreshToken ? refreshToken : null
}
