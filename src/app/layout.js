import "./globals.css";
import { Press_Start_2P } from 'next/font/google';
import { MusicProvider } from '../app/components/MusicContext'; // Import the MusicProvider

export const metadata = {
  title: "Smug Pepe",
  description: "Join The Smug Pepe Community",
};

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <MusicProvider> {/* Wrap the layout with MusicProvider */}
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}
