import { Inter, JetBrains_Mono } from 'next/font/google';
// or you can use other alternative fonts like:
import { Space_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
});

// Update your RootLayout component to use these fonts
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <header>
          
        </header>
        <main className="flex-1">
          <div className="mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 max-w-screen-2xl">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
        <footer>
          
        </footer>
      </body>
    </html>
  );
}
