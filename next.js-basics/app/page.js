import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>This is my first next.js page</p>
      <nav>
        <Link href="/about">Go to About Page</Link>
      </nav>
    </main>
  );
}
