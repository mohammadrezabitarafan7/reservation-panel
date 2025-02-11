import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const COOKIE_KEY = 'UserCookie'

export function middleware(req: NextRequest) {
  // const cookie = req.cookies.get(COOKIE_KEY)
  // const protectedRoutes = ['/dashboard']

  // بررسی اینکه آیا مسیر درخواست شده در لیست مسیرهای محافظت شده است
  // if (protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
  //   if (!cookie) {
  //     // اگر کوکی وجود نداشته باشد، به صفحه لاگین هدایت شود
  //     return NextResponse.redirect(new URL('/', req.url))
  //   }
  // }

  return NextResponse.next()
}

// اعمال میدلور فقط روی صفحات خاص
export const config = {
  matcher: ['/dashboard/:path*'], // استفاده از :path* برای تطابق زیرمجموعه‌ها
}
