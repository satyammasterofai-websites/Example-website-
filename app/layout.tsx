import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Indira | Luxury Sarees & Jewels',
  description: 'Premium Indian Saree & Jewelry eCommerce website. Timeless Indian Elegance & Luxury.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-[#FFFAF0] text-[#3E000E]" suppressHydrationWarning>{children}</body>
    </html>
  );
}
