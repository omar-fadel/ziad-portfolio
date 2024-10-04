import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Ziad Portfolio',
  description: 'Portfolio of Ziad an animator',
};

// const degular = localFont({
//   src: [
//     {
//       path: './fonts/DegularDemo-Thin.otf',
//       style: 'normal',
//       weight: '100 200',
//     },
//     {
//       path: './fonts/DegularDemo-Light.otf',
//       style: 'normal',
//       weight: '300',
//     },
//     {
//       path: './fonts/DegularDemo-Regular.otf',
//       style: 'normal',
//       weight: '400',
//     },
//     {
//       path: './fonts/DegularDemo-Medium.otf',
//       style: 'normal',
//       weight: '500',
//     },
//     {
//       path: './fonts/DegularDemo-SemiBold.otf',
//       style: 'normal',
//       weight: '600',
//     },
//     {
//       path: './fonts/DegularDemo-Bold.otf',
//       style: 'normal',
//       weight: '700',
//     },
//     {
//       path: './fonts/DegularDemo-Black.otf',
//       style: 'normal',
//       weight: '800',
//     },
//   ],
//   display: 'swap',
//   variable: '--font-degular',
// });

const code = localFont({
  src: [
    {
      path: './fonts/CodePro/CodecPro-UltraBlack.ttf',
      style: 'normal',
      weight: '900',
    },
    {
      path: './fonts/CodePro/CodecPro-Bold.ttf',
      style: 'normal',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-code',
});

const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins/Poppins-Regular.ttf',
      style: 'normal',
      weight: '400',
    },
  ],
  display: 'swap',
  variable: '--font-poppins',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${code.variable} ${poppins.variable}`}>{children}</body>
    </html>
  );
}
