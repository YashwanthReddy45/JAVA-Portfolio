
import Link from 'next/link';
import './globals.css';

export const metadata = { title: 'Portfolio' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
