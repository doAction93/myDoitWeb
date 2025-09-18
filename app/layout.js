// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: '일단해 - 습관교정 챌린지',
  description: '당신의 습관을 바꾸는 챌린지 앱',
  icons: {
    icon: '/favicon.ico' // apple 항목 제거
  }  // ← 이 한 줄 추가!
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: true
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 전역 CSS, 폰트 로드 등 여기서 해도 되고 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
