'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      {/* <Link href="/">Home</Link> */}
      <Link href="/about">Go to About Page</Link>
    </nav>
  );
}
