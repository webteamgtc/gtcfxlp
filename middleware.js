import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";

export const AppLanguage = {
  English: "en",
};

// Keep your existing intl setup
const intlMiddleware = createMiddleware({
  locales: ["en"],
  defaultLocale: "en",
  localeDetection: false,
});

// List of allowed landing pages
const allowedPages = ["/trade-with-gold", "/promo-bonus", "/vip-offer", "/gold-trading", "/welcome-bonus"];

export default function middleware(request) {
  const host = request.headers.get("host");
  const pathname = request.nextUrl.pathname;

  // Only apply this redirect rule to promo.gtcfx.com
  if (host === "promo.gtcfx.com" && !allowedPages.includes(pathname)) {
    return NextResponse.redirect("https://www.gtcfx.com", 307);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|lp-static|.*\\..*).*)",
  ],
};
