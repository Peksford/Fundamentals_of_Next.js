'use client';
import Link from 'next/link';

export default function NavigationBar() {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/about">About</Link>
        </div>
        <div>
          <Link href="/blog/post">Blog</Link>
        </div>
      </nav>
      {/* <h1>My Site</h1> */}
    </header>
  );
}
